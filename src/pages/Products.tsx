
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { dispatch } = useCart();

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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
      {/* Page Header */}
      <section className="bg-neutral-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary">
              Our Products
            </h1>
            <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
              Discover our complete range of premium natural products, each crafted with care and tradition
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter size={20} className="text-neutral-medium" />
            <h2 className="text-lg font-semibold text-secondary">Categories</h2>
          </div>
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.originalPrice && (
                  <Badge className="absolute top-3 left-3 bg-accent">
                    Save ₹{product.originalPrice - product.price}
                  </Badge>
                )}
                {product.featured && (
                  <Badge className="absolute top-3 right-3 bg-primary">
                    Featured
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-playfair font-semibold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-neutral-medium mt-1 line-clamp-2">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-x-1">
                      <span className="text-lg font-bold text-secondary">
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
                      <span className="text-xs text-neutral-medium">4.8</span>
                    </div>
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-playfair font-semibold text-secondary mb-2">
              No products found
            </h3>
            <p className="text-neutral-medium">
              Try selecting a different category or check back later for new products.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
