-- Enable required extension
create extension if not exists pgcrypto;

-- Common updated_at trigger function
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Enum types
do $$ begin
  if not exists (select 1 from pg_type where typname = 'order_status') then
    create type public.order_status as enum ('PENDING','CONFIRMED','PACKED','SHIPPED','DELIVERED','CANCELLED');
  end if;
  if not exists (select 1 from pg_type where typname = 'payment_status') then
    create type public.payment_status as enum ('PENDING','PAID','FAILED','REFUNDED');
  end if;
end $$;

-- Categories
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_categories_slug on public.categories(slug);
create trigger trg_categories_updated_at before update on public.categories
for each row execute function public.update_updated_at_column();

-- Products
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  price numeric(10,2) not null,
  images jsonb not null default '[]'::jsonb,
  in_stock boolean not null default true,
  stock integer not null default 0,
  published boolean not null default true,
  category_id uuid references public.categories(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_products_slug on public.products(slug);
create index if not exists idx_products_category on public.products(category_id);
create trigger trg_products_updated_at before update on public.products
for each row execute function public.update_updated_at_column();

-- Coupons
create table if not exists public.coupons (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  type text not null check (type in ('PERCENT','FIXED')),
  value numeric(10,2) not null,
  min_cart_total numeric(10,2) not null default 0,
  max_uses integer not null default 0, -- 0 means unlimited
  uses integer not null default 0,
  active boolean not null default true,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_coupons_code on public.coupons(code);
create trigger trg_coupons_updated_at before update on public.coupons
for each row execute function public.update_updated_at_column();

-- Orders
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid, -- optional, guest checkout supported
  email text not null,
  phone text,
  shipping_address jsonb,
  billing_address jsonb,
  status public.order_status not null default 'PENDING',
  total numeric(10,2) not null,
  discount numeric(10,2) not null default 0,
  final_total numeric(10,2) not null,
  coupon_code text,
  payment_provider text,
  payment_status public.payment_status not null default 'PENDING',
  payment_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger trg_orders_updated_at before update on public.orders
for each row execute function public.update_updated_at_column();

-- Order Items
create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.products(id),
  name text not null,
  price numeric(10,2) not null,
  quantity integer not null check (quantity > 0),
  subtotal numeric(10,2) not null
);
create index if not exists idx_order_items_order on public.order_items(order_id);
create index if not exists idx_order_items_product on public.order_items(product_id);

-- Blog Posts
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text not null,
  cover_image text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_blog_posts_slug on public.blog_posts(slug);
create index if not exists idx_blog_posts_published on public.blog_posts(published);
create trigger trg_blog_posts_updated_at before update on public.blog_posts
for each row execute function public.update_updated_at_column();

-- Enable Row Level Security
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.coupons enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.blog_posts enable row level security;

-- RLS Policies
-- Categories & Products are publicly readable
create policy if not exists "Public can read categories" on public.categories for select using (true);
create policy if not exists "Public can read published products" on public.products for select using (published = true);

-- Blog posts: public can read only published
create policy if not exists "Public can read published posts" on public.blog_posts for select using (published = true);

-- Coupons: public can read (to validate on client); updates only via functions (service role)
create policy if not exists "Public can read coupons" on public.coupons for select using (true);

-- Orders: allow inserts by anyone (guest checkout). Reads restricted (handled via edge functions with service role)
create policy if not exists "Anyone can create orders" on public.orders for insert with check (true);
-- No select/update/delete policies for public on orders

-- Order items: inserts allowed when creating an order; reads restricted
create policy if not exists "Anyone can create order items" on public.order_items for insert with check (true);

-- Realtime for orders (optional but useful)
alter table public.orders replica identity full;
alter table public.order_items replica identity full;

do $$ begin
  if not exists (
    select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'orders'
  ) then
    alter publication supabase_realtime add table public.orders;
  end if;
  if not exists (
    select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'order_items'
  ) then
    alter publication supabase_realtime add table public.order_items;
  end if;
end $$;