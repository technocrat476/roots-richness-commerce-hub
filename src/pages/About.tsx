
import { Users, Leaf, Heart, Award, MapPin, Clock, Handshake, Shield, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PageSEO from '@/components/SEO/PageSEO';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const About = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us' }
  ];

  // Enhanced structured data for About page
  const aboutPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Roots and Richness - Authentic Wood-Pressed Oils from Indian Farms",
    "description": "Discover Roots and Richness - India's most trusted source for authentic wood-pressed oils and natural wellness products, sourced directly from tribal communities and traditional farms since 2018",
    "url": "https://rootsandrichness.in/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Roots and Richness",
      "foundingDate": "2018",
      "founder": {
        "@type": "Person",
        "name": "Rajesh Kumar"
      },
      "description": "Premium wood-pressed oils and natural wellness products from traditional Indian farms",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-98765-43210",
        "contactType": "Customer Service"
      },
      "sameAs": [
        "https://www.instagram.com/rootsandrichness",
        "https://www.facebook.com/rootsandrichness"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PageSEO 
        title="About Roots and Richness - Authentic Wood-Pressed Oils from Indian Farms | Our Story"
        description="Discover the inspiring story behind Roots and Richness - India's most trusted source for authentic wood-pressed oils and natural wellness products. Learn about our 6-year journey connecting traditional Indian wellness with modern homes through direct partnerships with 500+ farming families."
        keywords="about roots and richness, wood-pressed oils india, traditional farming partnerships, authentic oil processing, tribal communities, sustainable agriculture, farm-to-table oils, chemical-free products"
        canonicalUrl="https://rootsandrichness.in/about"
        structuredData={aboutPageStructuredData}
      />

      {/* Breadcrumb */}
      <div className="bg-neutral-light py-4">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-light via-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Star size={16} className="text-primary" />
                  <span>Trusted by 10,000+ Families Since 2018</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-secondary leading-tight">
                  Preserving India's
                  <span className="text-primary block">Ancient Wellness</span>
                  <span className="text-secondary">Traditions</span>
                </h1>
              </div>
              
              <p className="text-xl text-neutral-medium leading-relaxed font-light">
                For over six years, we've been the bridge between India's time-honored farming traditions 
                and modern wellness seekers. Every drop of our wood-pressed oils carries the wisdom of 
                generations and the purity of traditional methods.
              </p>
              
              <p className="text-lg text-neutral-medium leading-relaxed">
                We believe that the best wellness products come from the earth, crafted by hands that 
                understand ancestral wisdom. Every bottle tells a story of authenticity, sustainability, 
                and genuine care for both people and planet.
              </p>
              
              {/* Enhanced Key Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-neutral-light">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-neutral-medium font-medium">Farming Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">6+</div>
                  <div className="text-sm text-neutral-medium font-medium">Years Trusted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                  <div className="text-sm text-neutral-medium font-medium">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-neutral-medium font-medium">Chemical-Free</div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm">
                  <Shield size={16} />
                  <span>FSSAI Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm">
                  <CheckCircle size={16} />
                  <span>ISO 22000 Compliant</span>
                </div>
                <div className="flex items-center space-x-2 bg-amber-50 text-amber-700 px-3 py-2 rounded-lg text-sm">
                  <Award size={16} />
                  <span>Organic Certified</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&h=500&fit=crop&crop=center"
                  alt="Traditional Indian farmer using wood-pressing technique for oil extraction - authentic methods preserved by Roots and Richness"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                  loading="eager"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border-4 border-primary/10">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">Zero</div>
                    <div className="text-sm text-neutral-medium font-medium">Chemicals Used</div>
                    <div className="text-xs text-neutral-light">Ever. Period.</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative background elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full -z-10"></div>
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-secondary/5 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Heart size={16} />
              <span>Our Core Values</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary">
              What Drives Us Every Day
            </h2>
            <p className="text-xl text-neutral-medium max-w-4xl mx-auto leading-relaxed">
              These principles guide every partnership we form, every product we create, and every promise we make to our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="text-primary" size={48} />,
                title: "Sustainability First",
                description: "Supporting regenerative farming practices that heal the soil and protect biodiversity. Our partners use traditional methods that have sustained Indian agriculture for centuries.",
                highlight: "Carbon Negative Process"
              },
              {
                icon: <Handshake className="text-primary" size={48} />,
                title: "Fair Trade Always",
                description: "Direct partnerships with tribal communities and small farmers, ensuring fair prices and supporting local livelihoods. No middlemen, just honest relationships.",
                highlight: "Direct Farm Partnerships"
              },
              {
                icon: <Heart className="text-primary" size={48} />,
                title: "Purity Promise",
                description: "Zero compromise on quality. Every product is 100% natural, traditionally processed, and free from chemicals, preservatives, and artificial additives.",
                highlight: "Chemical-Free Guarantee"
              },
              {
                icon: <Award className="text-primary" size={48} />,
                title: "Ancient Wisdom",
                description: "Preserving time-tested processing techniques like wood-pressing and sun-drying that maintain nutritional integrity and authentic flavors our ancestors knew.",
                highlight: "Traditional Methods Only"
              }
            ].map((value, index) => (
              <Card key={index} className="group text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-primary/20 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {value.highlight}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-secondary mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-neutral-medium text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Difference Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-light to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                <Star size={16} />
                <span>What Makes Us Different</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary">
                The Roots & Richness Promise
              </h2>
            </div>
            
            <div className="bg-primary text-white p-12 rounded-3xl mb-16 text-center">
              <blockquote className="text-2xl lg:text-4xl italic font-light mb-6">
                "We never refine. We never rush. We never compromise."
              </blockquote>
              <p className="text-xl opacity-90">Our founding principle since day one</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-green-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold text-secondary">What We Always Do</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Source directly from farmers - eliminating middlemen and price inflation",
                    "Use traditional wood-pressing that preserves all nutrients and natural flavors",
                    "Process in small batches to ensure maximum freshness and quality control",
                    "Maintain complete transparency from farm to your kitchen table",
                    "Pay fair prices that support farming families and their communities",
                    "Test every batch for purity and quality before packaging"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold text-lg">✓</span>
                      <span className="text-neutral-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-red-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-2xl">✗</span>
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold text-secondary">What We Never Do</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Use chemical refining or any artificial processing methods",
                    "Apply high-heat extraction that destroys precious nutrients",
                    "Add artificial preservatives, colors, or flavor enhancers",
                    "Compromise on quality for mass production or profit margins",
                    "Source from suppliers we haven't personally visited and verified",
                    "Rush the traditional processes that ensure authentic quality"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 font-bold text-lg">✗</span>
                      <span className="text-neutral-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Farmer Partners Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Users size={16} />
              <span>Our Partners</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary">
              Meet the Hands Behind Our Products
            </h2>
            <p className="text-xl text-neutral-medium max-w-4xl mx-auto leading-relaxed">
              The heart of Roots & Richness lies in our deep partnerships with dedicated farmers and tribal communities across India. 
              These are the guardians of traditional knowledge who make our authentic products possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Kamla Devi & Family",
                location: "Araku Valley, Andhra Pradesh",
                specialty: "Tribal Arabica Coffee Cultivation",
                image: "https://images.unsplash.com/photo-1594736797933-d0d71a80e0d8?w=400&h=400&fit=crop&crop=face",
                story: "Leading her tribal community in sustainable coffee cultivation at 3,000+ feet elevation. Her family has been preserving indigenous farming wisdom for over 4 generations, producing some of India's finest Arabica coffee beans.",
                icon: <MapPin className="text-primary" size={16} />,
                experience: "25+ Years",
                certification: "Organic Certified"
              },
              {
                name: "Raman Singh Rajput",
                location: "Sikar, Rajasthan", 
                specialty: "Traditional Mustard Oil Production",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
                story: "Third-generation mustard farmer who has perfected the art of traditional wood-pressing. His family has been producing pure, unadulterated mustard oil for over 60 years using the same wooden kolhu his grandfather built.",
                icon: <Clock className="text-primary" size={16} />,
                experience: "60+ Years Family Legacy",
                certification: "Traditional Methods"
              },
              {
                name: "Meera Patel",
                location: "Saurashtra, Gujarat",
                specialty: "Organic Groundnut Cultivation",
                image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=face",
                story: "Pioneer in organic groundnut farming, she transformed her 50-acre farm into a model of sustainable agriculture. Her cold-pressed groundnut oils retain the rich, nutty flavor that makes our products extraordinary.",
                icon: <Leaf className="text-primary" size={16} />,
                experience: "35+ Years Innovation",
                certification: "Certified Organic"
              }
            ].map((farmer, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-neutral-light rounded-full mx-auto overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={farmer.image}
                        alt={`${farmer.name} - ${farmer.specialty} partner with Roots and Richness`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {farmer.certification}
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                        {farmer.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        {farmer.icon}
                        <p className="text-primary font-medium text-sm">
                          {farmer.location}
                        </p>
                      </div>
                      <p className="text-secondary text-sm font-medium mb-1">
                        {farmer.specialty}
                      </p>
                      <p className="text-accent text-xs font-medium">
                        {farmer.experience}
                      </p>
                    </div>
                    
                    <p className="text-neutral-medium text-sm leading-relaxed">
                      {farmer.story}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership Stats */}
          <div className="mt-20 bg-gradient-to-r from-primary to-secondary text-white p-12 rounded-3xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-playfair font-bold mb-4">Our Partnership Impact</h3>
              <p className="text-lg opacity-90">Creating positive change across rural India</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Families Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15</div>
                <div className="text-sm opacity-90">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">₹2Cr+</div>
                <div className="text-sm opacity-90">Paid to Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Fair Trade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Journey Timeline */}
      <section className="py-24 bg-gradient-to-br from-neutral-light via-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Clock size={16} />
              <span>Our Journey</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary">
              Six Years of Impact & Growth
            </h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto leading-relaxed">
              From a simple idea to revolutionizing how India thinks about traditional wellness
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  year: "2018",
                  title: "The Beginning",
                  description: "Started with a simple but powerful mission: bring authentic, unprocessed oils from Indian farms directly to urban kitchens, eliminating middlemen and preserving traditional methods.",
                  achievement: "First 50 customers",
                  image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop"
                },
                {
                  year: "2019", 
                  title: "Building Trust",
                  description: "Formed direct relationships with 50+ farming families across Rajasthan and Gujarat. Established our quality standards and traditional processing protocols.",
                  achievement: "500+ happy customers",
                  image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=300&h=200&fit=crop"
                },
                {
                  year: "2021",
                  title: "Expanding Horizons",
                  description: "Partnered with tribal communities in Araku Valley, introducing authentic Arabica coffee. Launched our first premium product lines with enhanced packaging.",
                  achievement: "2,000+ customers nationwide",
                  image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&h=200&fit=crop"
                },
                {
                  year: "2023",
                  title: "Digital Growth",
                  description: "Launched our enhanced online platform, reaching 10,000+ customers nationwide while maintaining our uncompromising quality standards and personal touch.",
                  achievement: "10,000+ loyal customers",
                  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop"
                },
                {
                  year: "2024",
                  title: "Sustainability Leadership",
                  description: "Initiated comprehensive regenerative farming programs, supporting 500+ families in sustainable agriculture practices. Launched our zero-waste packaging initiative.",
                  achievement: "Carbon neutral operations",
                  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop"
                }
              ].map((milestone, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-12 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {milestone.year}
                    </div>
                  </div>
                  
                  <div className="flex-1 lg:flex lg:items-center lg:space-x-8">
                    <div className="lg:flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-playfair font-semibold text-secondary mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-neutral-medium leading-relaxed mb-4">
                          {milestone.description}
                        </p>
                        <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                          <CheckCircle size={16} />
                          <span>{milestone.achievement}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:flex-shrink-0 mt-6 lg:mt-0">
                      <img
                        src={milestone.image}
                        alt={`${milestone.title} - Roots and Richness journey milestone`}
                        className="w-full lg:w-64 h-40 object-cover rounded-xl shadow-md"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Users size={16} />
              <span>Leadership Team</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary">
              Passionate Leaders Driving Change
            </h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals behind Roots & Richness, each bringing decades of experience 
              and unwavering commitment to traditional wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                name: "Rajesh Kumar",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
                description: "With 20+ years in sustainable agriculture and a vision to connect traditional Indian wellness with modern lifestyles, Rajesh founded Roots & Richness to preserve ancestral wisdom while meeting contemporary quality standards.",
                expertise: "Sustainable Agriculture & Business Strategy",
                education: "MBA Agriculture Business, IIM Ahmedabad",
                quote: "Every product we create should honor our ancestors while serving our children's future."
              },
              {
                name: "Priya Sharma", 
                role: "Head of Quality & Sourcing",
                image: "https://images.unsplash.com/photo-1494790108755-2616c0763a9b?w=400&h=400&fit=crop&crop=face",
                description: "Expert in traditional processing methods and guardian of our quality standards across all product lines. Priya personally visits every partner farm and oversees our quality control processes to ensure absolute authenticity.",
                expertise: "Quality Assurance & Traditional Processing",
                education: "M.Tech Food Technology, CFTRI Mysore",
                quote: "Quality is not negotiable - it's the foundation of trust our customers place in us."
              },
              {
                name: "Arjun Patel",
                role: "Community Relations Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
                description: "Building meaningful partnerships with farming communities across India and ensuring fair trade practices. Arjun speaks 8 regional languages and has lived with tribal communities to understand their traditional methods.",
                expertise: "Community Development & Fair Trade",
                education: "MA Rural Development, TISS Mumbai",
                quote: "Our success is measured by the prosperity of the farming families we work with."
              }
            ].map((member, index) => (
              <Card key={index} className="group text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-neutral-light rounded-full mx-auto overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role} at Roots and Richness`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-3">
                        {member.role}
                      </p>
                      <p className="text-accent text-xs font-medium mb-4">
                        {member.expertise}
                      </p>
                    </div>
                    
                    <p className="text-neutral-medium text-sm leading-relaxed mb-4">
                      {member.description}
                    </p>
                    
                    <div className="bg-neutral-light p-4 rounded-lg">
                      <p className="text-xs text-neutral-medium mb-2 font-medium">Education</p>
                      <p className="text-xs text-secondary">{member.education}</p>
                    </div>
                    
                    <blockquote className="text-sm italic text-primary border-l-2 border-primary pl-4 text-left">
                      "{member.quote}"
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 bg-gradient-to-r from-secondary via-primary to-secondary text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                <Heart size={16} />
                <span>Join Our Mission</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
                Experience Authentic
                <span className="block">Indian Wellness</span>
              </h2>
              
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                Every purchase supports farming families, preserves traditional knowledge, 
                and brings you products crafted with centuries of wisdom and zero compromise on purity.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/products" 
                className="group bg-white text-primary hover:bg-neutral-light px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
              >
                <span>Explore Our Products</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="/contact" 
                className="group border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Partner With Us</span>
                <Handshake size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            
            {/* Enhanced trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-80">Farm Families Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-80">Chemical-Free Promise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">10K+</div>
                <div className="text-sm opacity-80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">6+</div>
                <div className="text-sm opacity-80">Years of Trust</div>
              </div>
            </div>
            
            {/* Customer testimonial */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mt-12">
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg italic mb-4">
                "Roots & Richness has transformed how our family thinks about cooking oils. 
                The authentic taste and knowing we're supporting traditional farmers makes every meal special."
              </blockquote>
              <p className="text-sm opacity-80">- Priya M., Mumbai (Verified Customer since 2020)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
