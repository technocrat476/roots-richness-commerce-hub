
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Star, Truck, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import AutoplayHero from '@/components/ui/AutoplayHero';
import PageSEO from '@/components/SEO/PageSEO';

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

  // Structured data for homepage
  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pure Wood-Pressed Oils, Handpicked from Indian Farms - Roots and Richness",
    "description": "Cold-pressed, chemical-free oils and natural wellness products directly from Indian farms. Wood-pressed oils with traditional methods for authentic purity.",
    "url": "https://rootsandrichness.in/",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Featured Products",
      "itemListElement": featuredProducts.map((product, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": product.name,
        "description": product.shortDescription,
        "image": product.images[0],
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      }))
    }
  };

  return (
    <div className="min-h-screen">
      <PageSEO 
        title="Pure Wood-Pressed Oils, Handpicked from Indian Farms | Roots and Richness"
        description="Cold-pressed, chemical-free oils and natural wellness products directly from Indian farms. Buy authentic wood-pressed mustard oil, groundnut oil, and tribal coffee online."
        keywords="wood-pressed oils, cold-pressed oils, pure oils online, mustard oil, groundnut oil, tribal coffee, natural wellness products, buy oils online India"
        canonicalUrl="https://rootsandrichness.in/"
        structuredData={homePageStructuredData}
      />

      {/* Autoplay Hero Section */}
      <AutoplayHero interval={1000} />

      {/* Main Content with SEO Structure */}
      <main>
        {/* Hero Content Section */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-secondary mb-6">
              Pure Wood-Pressed Oils, Handpicked from Indian Farms
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-medium mb-8 max-w-4xl mx-auto leading-relaxed">
              Cold-pressed, chemical-free, and full of flavor — just like nature intended.
            </p>
            
            {/* Brand Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-lg font-medium text-secondary">Wood-Pressed, Not Refined</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-lg font-medium text-secondary">From Small Farms</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-lg font-medium text-secondary">No Additives</span>
              </div>
            </div>

            <Link to="/products">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Explore Our Oils
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </section>

        {/* Brand Story Section */}
        <section id="brand-story" className="py-20 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary">
                Purity, Tradition, and Transparency
              </h2>
              <div className="space-y-6 text-lg text-neutral-medium leading-relaxed">
                <p>
                  At Roots and Richness, we bring you pure, chemical-free wellness — sourced directly from Indian farms and tribal communities. Our products are made with traditional wood-pressed methods to preserve nutrition and authenticity.
                </p>
                <p>
                  We started this journey to reconnect people with traditional Indian wellness practices. Every bottle tells a story of generations-old wisdom, sustainable farming, and the dedication of farmers who understand that the best products come from patience and care.
                </p>
                <blockquote className="text-xl italic text-primary border-l-4 border-primary pl-6 my-8">
                  "We never refine. We never rush. We never compromise."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section id="what-makes-us-different" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary">
                What Makes Our Products Different
              </h2>
              <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
                Traditional methods meet modern quality standards for authentic, pure products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-secondary">Wood-Pressed Method</h3>
                <p className="text-neutral-medium text-sm">
                  Traditional wooden presses extract oil slowly, preserving nutrients and natural flavor without heat damage.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏔️</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-secondary">Single-Origin Sourcing</h3>
                <p className="text-neutral-medium text-sm">
                  Direct partnerships with farmers ensure traceability and quality from specific regions known for their produce.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-secondary">Lab-Tested Purity</h3>
                <p className="text-neutral-medium text-sm">
                  Every batch is tested for adulterants, ensuring you receive 100% pure, chemical-free products.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">♻️</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-secondary">Sustainable Practices</h3>
                <p className="text-neutral-medium text-sm">
                  Supporting eco-friendly farming and fair trade practices that benefit both farmers and the environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Highlights Section */}
        <section id="product-highlights" className="py-20 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary">
                Our Featured Products
              </h2>
              <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
                Handpicked premium products that bring the best of nature's goodness to your doorstep
              </p>
            </div>

            {/* Featured Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.images[0]}
                      alt={`${product.name} - Pure wood-pressed oil from Roots and Richness, sourced directly from Indian farms`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
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
                          aria-label={`Add ${product.name} to cart`}
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

        {/* Enhanced Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary">
                What Our Customers Say
              </h2>
              <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
                Real experiences from our valued customers who trust our natural products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <blockquote className="bg-neutral-light p-8 rounded-lg shadow-lg">
                <p className="text-lg text-neutral-dark italic mb-6 leading-relaxed">
                  "The groundnut oil reminds me of my grandmother's kitchen — so pure and flavorful. I can taste the difference in every dish I make. It's become a staple in my cooking."
                </p>
                <footer className="text-secondary font-semibold">
                  — Priya K., Mumbai
                </footer>
              </blockquote>

              <blockquote className="bg-neutral-light p-8 rounded-lg shadow-lg">
                <p className="text-lg text-neutral-dark italic mb-6 leading-relaxed">
                  "Finally found authentic mustard oil that doesn't compromise on quality. The traditional wood-pressing method really makes a difference in taste and nutrition."
                </p>
                <footer className="text-secondary font-semibold">
                  — Rajesh S., Delhi
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced */}
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
                  title: "100% Natural & Pure",
                  description: "No artificial additives, preservatives, or chemicals. Every product is tested for purity and authenticity."
                },
                {
                  icon: "🏔️",
                  title: "Direct from Source",
                  description: "Sourced directly from farmers and tribal communities, ensuring fair trade and authentic quality."
                },
                {
                  icon: "🔬",
                  title: "Traditional Methods",
                  description: "Wood-pressed oils and time-honored processing techniques that preserve nutrition and flavor."
                },
                {
                  icon: "🚚",
                  title: "Fast & Secure Delivery",
                  description: "Quick delivery with proper packaging to ensure freshness reaches your doorstep safely."
                },
                {
                  icon: "💚",
                  title: "Sustainable & Ethical",
                  description: "Supporting sustainable farming practices and empowering rural farming communities."
                },
                {
                  icon: "🎯",
                  title: "Customer Satisfaction",
                  description: "Dedicated support team and 7-day easy return policy for your complete satisfaction."
                }
              ].map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4" role="img" aria-label={feature.title}>{feature.icon}</div>
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

        {/* Newsletter - Enhanced */}
        <section className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-playfair font-bold">
                Join the Roots & Richness Family
              </h2>
              <p className="text-gray-300">
                Subscribe to our newsletter for wellness tips, traditional recipes, product updates, and exclusive offers from our farming community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-neutral-dark"
                  aria-label="Enter your email for newsletter subscription"
                />
                <Button className="btn-primary">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                Join 10,000+ customers who trust our natural wellness products
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
