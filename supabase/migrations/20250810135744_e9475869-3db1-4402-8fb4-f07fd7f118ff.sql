-- Ensure RLS is enabled (idempotent)
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.coupons enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.blog_posts enable row level security;

-- Drop existing policies if present, then recreate cleanly
-- Categories
drop policy if exists "Public can read categories" on public.categories;
create policy "Public can read categories" on public.categories
for select using (true);

-- Products
drop policy if exists "Public can read published products" on public.products;
create policy "Public can read published products" on public.products
for select using (published = true);

-- Blog posts
drop policy if exists "Public can read published posts" on public.blog_posts;
create policy "Public can read published posts" on public.blog_posts
for select using (published = true);

-- Coupons
drop policy if exists "Public can read coupons" on public.coupons;
create policy "Public can read coupons" on public.coupons
for select using (true);

-- Orders
drop policy if exists "Anyone can create orders" on public.orders;
create policy "Anyone can create orders" on public.orders
for insert with check (true);

-- Order items
drop policy if exists "Anyone can create order items" on public.order_items;
create policy "Anyone can create order items" on public.order_items
for insert with check (true);

-- Realtime setup (idempotent)
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