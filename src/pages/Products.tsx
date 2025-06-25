
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Filter, Search, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { products, categories } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { dispatch } = useCart();

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'featured':
        default:
          return b.featured ? 1 : -1;
      }
    });

  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = 'Premium Natural Products - Wood-Pressed Oils & Organic Wellness Products | Roots and Richness';
    
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Shop premium wood-pressed oils, tribal-sourced coffee, and natural wellness products. 100% organic, traditionally processed, directly from source. Free shipping on orders over ₹500.');
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/products');

    // Add structured data for product catalog
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Premium Natural Products",
      "description": "Premium wood-pressed oils, tribal-sourced coffee, and natural wellness products",
      "url": window.location.origin + "/products",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": filteredProducts.length,
        "itemListElement": filteredProducts.map((product, index) => ({
          "@type": "Product",
          "position": index + 1,
          "name": product.name,
          "description": product.shortDescription,
          "image": product.images[0],
          "url": `${window.location.origin}/products/${product.slug}`,
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "INR",
            "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
          }
        }))
      }
    };

    let scriptTag = document.querySelector('#products-structured-data') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'products-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

    return () => {
      // Cleanup structured data on unmount
      const existingScript = document.querySelector('#products-structured-data');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [filteredProducts]);

  const handleAddToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        slug: product.slug
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO-optimized Page Header */}
      <section className="bg-neutral-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary">
              Premium Natural Products
            </h1>
            <p className="text-lg text-neutral-medium max-w-3xl mx-auto">
              Discover our complete range of premium wood-pressed oils, tribal-sourced coffee, and natural wellness products. Each item is crafted with traditional methods and sourced directly from farmers.
            </p>
            
            {/* Trust indicators for conversion */}
            <div className="flex justify-center items-center space-x-8 mt-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>100% Natural</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Free Shipping ₹500+</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Direct from Source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Enhanced Search and Filter Section */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-medium" size={20} />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border-2 border-neutral-light focus:border-primary rounded-lg"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-neutral-medium" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? "btn-primary" : ""}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-neutral-light rounded-lg focus:border-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>

              <div className="flex border border-neutral-light rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid size={16} />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Results counter */}
          <div className="text-sm text-neutral-medium">
            Showing {filteredProducts.length} of {products.length} products
            {searchQuery && ` for "${searchQuery}"`}
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group hover:shadow-xl transition-all duration-300 animate-fade-in ${
                viewMode === 'list' ? 'flex flex-row' : ''
              }`} 
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'rounded-t-lg'
              }`}>
                <img
                  src={product.images[0]}
                  alt={`${product.name} - Premium ${product.category} at Roots and Richness`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading={index < 8 ? 'eager' : 'lazy'}
                />
                {product.originalPrice && (
                  <Badge className="absolute top-3 left-3 bg-accent text-white">
                    Save ₹{product.originalPrice - product.price}
                  </Badge>
                )}
                {product.featured && (
                  <Badge className="absolute top-3 right-3 bg-primary text-white">
                    Bestseller
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
              </div>

              <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-playfair font-semibold text-secondary group-hover:text-primary transition-colors line-clamp-2 text-lg">
                      {product.name}
                    </h3>
                    <p className="text-sm text-neutral-medium mt-1 line-clamp-2">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-x-1">
                      <span className="text-xl font-bold text-secondary">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-neutral-medium line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="text-primary fill-current" size={14} />
                      <span className="text-xs text-neutral-medium">4.8 (24)</span>
                    </div>
                  </div>

                  {/* Conversion-focused benefits */}
                  <div className="text-xs text-neutral-medium">
                    ✓ Free shipping • ✓ 100% Natural • ✓ 7-day return
                  </div>

                  <div className="flex space-x-2">
                    <Link to={`/products/${product.slug}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                      size="sm"
                      className="btn-primary"
                    >
                      <ShoppingCart size={14} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-playfair font-semibold text-secondary mb-2">
              No products found
            </h3>
            <p className="text-neutral-medium mb-6">
              {searchQuery 
                ? `No products match "${searchQuery}". Try adjusting your search or filters.`
                : 'Try selecting a different category or check back later for new products.'
              }
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="btn-primary"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* SEO Content Section */}
        <section className="mt-20 py-16 bg-neutral-light rounded-2xl">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-playfair font-bold text-secondary mb-6">
              Why Choose Our Natural Products?
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-medium">
              <p>
                At Roots and Richness, we specialize in premium wood-pressed oils and natural wellness products 
                that are traditionally processed and sourced directly from farmers and tribal communities across India.
              </p>
              <p>
                Our wood-pressed oils retain maximum nutrition as they are extracted using traditional wooden 
                presses at room temperature, preserving essential nutrients, vitamins, and natural flavors that 
                are often lost in commercial processing.
              </p>
              <h3 className="text-xl font-playfair font-semibold text-secondary mt-8 mb-4">
                Our Product Categories
              </h3>
              <ul className="space-y-2">
                <li><strong>Wood-Pressed Oils:</strong> Coconut, Sesame, Groundnut, and more</li>
                <li><strong>Natural Sweeteners:</strong> Raw honey, jaggery, and palm sugar</li>
                <li><strong>Tribal Coffee:</strong> Directly sourced from hill tribes</li>
                <li><strong>Wellness Products:</strong> Herbal teas, spices, and superfoods</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
