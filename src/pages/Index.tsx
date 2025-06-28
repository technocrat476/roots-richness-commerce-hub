
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Star, Truck, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const Index = () => {
  const { dispatch } = useCart();
  const featuredProducts = products.filter(product => product.featured);

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-light to-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-secondary leading-tight">
                  Pure. Traditional.
                  <span className="text-primary block">Authentic.</span>
                </h1>
                <p className="text-lg text-neutral-medium max-w-lg">
                  Discover premium wood-pressed oils, tribal-sourced coffee, and natural wellness products. 
                  Crafted with traditional methods, delivered with modern care.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="btn-primary group">
                    Shop Now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="btn-outline">
                    Our Story
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Truck className="text-primary" size={20} />
                  <span className="text-sm font-medium">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="text-primary" size={20} />
                  <span className="text-sm font-medium">100% Natural</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-primary" size={20} />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=600&fit=crop"
                  alt="Natural products"
                  className="w-4/5 h-4/5 object-cover rounded-full shadow-xl"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="text-primary fill-current" size={16} />
                  <span className="text-sm font-semibold">5.0 Rating</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-secondary">1000+</div>
                  <div className="text-xs text-neutral-medium">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary">
              Featured Products
            </h2>
            <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
              Handpicked premium products that bring the best of nature's goodness to your doorstep
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-accent text-white px-2 py-1 rounded-lg text-sm font-medium">
                      Save ₹{product.originalPrice - product.price}
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-playfair font-semibold text-secondary group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-neutral-medium mt-1">
                        {product.shortDescription}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-x-2">
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
                        <Star className="text-primary fill-current" size={16} />
                        <span className="text-sm text-neutral-medium">4.8</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Link to={`/products/${product.slug}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </Link>
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="btn-primary"
                      >
                        <ShoppingCart size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="btn-primary">
                View All Products
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary">
              Why Choose Roots & Richness?
            </h2>
            <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
              We're committed to bringing you the finest natural products with complete transparency and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "100% Natural",
                description: "No artificial additives, preservatives, or chemicals. Pure as nature intended."
              },
              {
                icon: "🏔️",
                title: "Direct from Source",
                description: "Sourced directly from farmers and tribal communities for authentic quality."
              },
              {
                icon: "🔬",
                title: "Quality Tested",
                description: "Every batch is tested for purity and quality before it reaches you."
              },
              {
                icon: "🚚",
                title: "Fast Delivery",
                description: "Quick and secure delivery to ensure freshness and quality."
              },
              {
                icon: "💚",
                title: "Sustainable",
                description: "Supporting sustainable farming practices and fair trade."
              },
              {
                icon: "🎯",
                title: "Customer First",
                description: "Dedicated customer support and satisfaction guarantee."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-playfair font-semibold text-secondary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-medium">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-playfair font-bold">
              Stay Connected with Nature
            </h2>
            <p className="text-gray-300">
              Subscribe to our newsletter for wellness tips, product updates, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-neutral-dark"
              />
              <Button className="btn-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
