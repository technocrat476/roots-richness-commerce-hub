
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SocialShare from '@/components/ui/SocialShare';
import PageSEO from '@/components/SEO/PageSEO';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const Blog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Wood-Pressed Oils vs Refined Oils: Why Traditional Methods Win Every Time',
      slug: 'wood-pressed-oil-traditional-methods',
      excerpt: 'Discover the ancient wisdom behind wood-pressed oils and why they retain 10x more nutrients than modern industrial extraction methods. Learn how traditional cold-pressing preserves essential vitamins and antioxidants.',
      author: 'Dr. Priya Sharma',
      date: '2024-01-15',
      category: 'Health & Wellness',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop',
      readTime: '5 min read',
      featured: true
    },
    {
      id: '2',
      title: 'Empowering Tribal Communities: Our Direct Farm-to-Table Journey',
      slug: 'supporting-tribal-communities',
      excerpt: 'How our direct trade partnerships are transforming lives of 200+ tribal farming families while preserving centuries-old sustainable farming practices. See the real impact of ethical sourcing.',
      author: 'Arjun Patel',
      date: '2024-01-10',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      readTime: '7 min read',
      featured: true
    },
    {
      id: '3',
      title: '10 Science-Backed Health Benefits of Raw Unprocessed Forest Honey',
      slug: 'health-benefits-raw-forest-honey',
      excerpt: 'Explore the incredible healing properties of pure, unfiltered forest honey sourced from deep tribal forests. From boosting immunity to healing wounds - discover why raw honey is nature\'s superfood.',
      author: 'Dr. Meera Singh',
      date: '2024-01-05',
      category: 'Health & Wellness',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop',
      readTime: '6 min read',
      featured: false
    },
    {
      id: '4',
      title: 'Sustainable Farming Revolution: How Ancient Practices Are Saving Our Planet',
      slug: 'sustainable-farming-future',
      excerpt: 'Discover how traditional farming methods practiced by tribal communities are becoming the solution to modern agriculture\'s environmental crisis. Learn about pesticide-free cultivation that heals the earth.',
      author: 'Rajesh Kumar',
      date: '2024-01-01',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop',
      readTime: '8 min read',
      featured: false
    },
    {
      id: '5',
      title: 'Turmeric: The Golden Medicine That Beats Modern Painkillers',
      slug: 'turmeric-golden-spice-wellness',
      excerpt: 'Dive deep into the 4000-year history of turmeric and discover why this golden root is more effective than many pharmaceutical drugs. Plus: 5 ways to use turmeric for maximum health benefits.',
      author: 'Dr. Meera Singh',
      date: '2023-12-28',
      category: 'Health & Wellness',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop',
      readTime: '4 min read',
      featured: false
    },
    {
      id: '6',
      title: 'From Tribal Hills to Your Cup: The Untold Story of Araku Coffee',
      slug: 'tribal-coffee-journey',
      excerpt: 'Follow the remarkable journey of India\'s finest organic coffee from the remote tribal farms of Araku Valley to international recognition. Taste the difference ethical sourcing makes.',
      author: 'Arjun Patel',
      date: '2023-12-25',
      category: 'Products',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      readTime: '6 min read',
      featured: false
    }
  ];

  const categories = ['All', 'Health & Wellness', 'Sustainability', 'Products'];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Wellness Blog' }
  ];

  // Structured data for the blog page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Roots & Richness Wellness Blog",
    "description": "Expert insights on wood-pressed oils, traditional wellness, sustainable farming, and natural living from India's premium organic food brand.",
    "url": "https://rootsandrichness.in/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Roots & Richness",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rootsandrichness.in/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://rootsandrichness.in/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "image": post.image
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title="Wood-Pressed Oils Blog | Traditional Wellness & Sustainable Living Tips"
        description="Expert insights on cold-pressed oils, natural health benefits, sustainable farming, and traditional Indian wellness practices. Learn from certified nutritionists and farming experts."
        keywords="wood-pressed oils blog, cold-pressed oil benefits, natural wellness tips, sustainable farming India, traditional health remedies, organic food benefits"
        canonicalUrl="https://rootsandrichness.in/blog"
        ogType="blog"
        structuredData={structuredData}
      />

      {/* Breadcrumbs */}
      <div className="bg-neutral-light py-4">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary">
              Traditional Wellness & Natural Living Blog
            </h1>
            <p className="text-xl text-neutral-medium leading-relaxed">
              Discover the science behind wood-pressed oils, learn from traditional wellness practices, 
              and explore sustainable living through expert insights from nutritionists, farmers, and wellness practitioners.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-sm max-w-2xl mx-auto">
              <p className="text-secondary font-semibold mb-2">What You'll Learn:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Health benefits of cold-pressed oils</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Traditional farming wisdom</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Sustainable living practices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Natural remedies & recipes</span>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <SocialShare variant="blog-header" className="justify-center" />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-secondary mb-2">Featured Articles</h2>
                <p className="text-neutral-medium">Hand-picked insights from our wellness experts</p>
              </div>
              <Badge className="bg-accent text-white">Editor's Choice</Badge>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={`${post.title} - Featured article on traditional wellness and wood-pressed oils`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-neutral-medium">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div>
                        <Link to={`/blog/${post.slug}`}>
                          <h3 className="text-xl font-playfair font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2 mb-3">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-neutral-medium line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-neutral-light">
                        <div className="flex items-center space-x-4 text-sm text-neutral-medium">
                          <div className="flex items-center space-x-1">
                            <User size={14} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="group text-primary">
                            Read More
                            <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <h3 className="text-lg font-semibold text-secondary">Browse by Category:</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button key={category} variant="outline" size="sm" className="hover:bg-primary hover:text-white">
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Regular Posts */}
        <section>
          <h2 className="text-2xl font-playfair font-bold text-secondary mb-8">Latest Wellness Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={`${post.title} - Learn about traditional wellness and organic living`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center space-x-1 text-neutral-medium">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div>
                      <Link to={`/blog/${post.slug}`}>
                        <h3 className="text-lg font-playfair font-semibold text-secondary group-hover:text-primary transition-colors line-clamp-2 mb-2">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-neutral-medium line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-neutral-medium pt-2 border-t border-neutral-light">
                      <div className="flex items-center space-x-1">
                        <User size={12} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="w-full group mt-3">
                        Read Full Article
                        <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-white hover:bg-primary hover:text-white">
            Load More Articles
          </Button>
        </div>

        {/* Why Read Our Blog Section */}
        <section className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-playfair font-bold text-secondary">Why Read Our Wellness Blog?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <User className="text-white" size={20} />
                </div>
                <h3 className="font-semibold text-secondary">Expert Authors</h3>
                <p className="text-sm text-neutral-medium">Content created by certified nutritionists, farming experts, and traditional wellness practitioners</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Clock className="text-white" size={20} />
                </div>
                <h3 className="font-semibold text-secondary">Research-Backed</h3>
                <p className="text-sm text-neutral-medium">Every health claim is supported by scientific studies and traditional knowledge passed down through generations</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <ArrowRight className="text-white" size={20} />
                </div>
                <h3 className="font-semibold text-secondary">Actionable Tips</h3>
                <p className="text-sm text-neutral-medium">Practical advice you can implement immediately for better health and sustainable living</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-playfair font-bold">
              Get Weekly Wellness Tips
            </h2>
            <p className="text-gray-300">
              Join 10,000+ health-conscious readers getting expert insights on natural wellness, 
              traditional remedies, and sustainable living delivered every Tuesday.
            </p>
            <div className="bg-white/10 p-6 rounded-2xl">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-neutral-dark"
                  aria-label="Email address for newsletter subscription"
                />
                <Button className="btn-primary">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                ✓ Free weekly newsletter ✓ No spam ✓ Unsubscribe anytime
              </p>
            </div>
            <div className="pt-4">
              <SocialShare variant="footer" className="justify-center" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
