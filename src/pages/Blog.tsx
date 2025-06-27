
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'The Art of Wood-Pressed Oil: Why Traditional Methods Matter',
      slug: 'wood-pressed-oil-traditional-methods',
      excerpt: 'Discover the ancient wisdom behind wood-pressed oils and why they retain more nutrients than modern extraction methods.',
      author: 'Priya Sharma',
      date: '2024-01-15',
      category: 'Health & Wellness',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop',
      readTime: '5 min read',
      featured: true
    },
    {
      id: '2',
      title: 'Supporting Tribal Communities: Our Direct Trade Journey',
      slug: 'supporting-tribal-communities',
      excerpt: 'Learn how our direct trade partnerships are empowering tribal communities and preserving traditional farming practices.',
      author: 'Arjun Patel',
      date: '2024-01-10',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      readTime: '7 min read',
      featured: true
    },
    {
      id: '3',
      title: '10 Health Benefits of Raw Forest Honey',
      slug: 'health-benefits-raw-forest-honey',
      excerpt: 'Explore the incredible health benefits of pure, unprocessed forest honey and how to incorporate it into your daily routine.',
      author: 'Dr. Meera Singh',
      date: '2024-01-05',
      category: 'Health & Wellness',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop',
      readTime: '6 min read',
      featured: false
    },
    {
      id: '4',
      title: 'Sustainable Farming: The Future of Natural Products',
      slug: 'sustainable-farming-future',
      excerpt: 'How sustainable farming practices are shaping the future of natural product cultivation and environmental conservation.',
      author: 'Rajesh Kumar',
      date: '2024-01-01',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop',
      readTime: '8 min read',
      featured: false
    },
    {
      id: '5',
      title: 'Turmeric: The Golden Spice of Wellness',
      slug: 'turmeric-golden-spice-wellness',
      excerpt: 'Dive deep into the history, benefits, and uses of turmeric, one of nature\'s most powerful anti-inflammatory spices.',
      author: 'Dr. Meera Singh',
      date: '2023-12-28',
      category: 'Health & Wellness',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop',
      readTime: '4 min read',
      featured: false
    },
    {
      id: '6',
      title: 'From Bean to Cup: The Journey of Tribal Coffee',
      slug: 'tribal-coffee-journey',
      excerpt: 'Follow the journey of our ethically sourced coffee from the tribal farms in the hills to your morning cup.',
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary">
              Wellness & Wisdom
            </h1>
            <p className="text-lg text-neutral-medium">
              Discover insights on natural wellness, traditional practices, and sustainable living 
              from our community of experts and partners.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-playfair font-bold text-secondary mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
                          <h3 className="text-xl font-playfair font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-neutral-medium mt-2 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
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
                          <Button variant="ghost" size="sm" className="group">
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
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button key={category} variant="outline" size="sm">
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Regular Posts */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                        <h3 className="text-lg font-playfair font-semibold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-neutral-medium mt-2 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-neutral-medium">
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
                      <Button variant="ghost" size="sm" className="w-full group">
                        Read Article
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
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-playfair font-bold">
              Stay Updated
            </h2>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest articles, wellness tips, and product updates
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

export default Blog;
