
import { Users, Leaf, Heart, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-light to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary">
                Our Story of
                <span className="text-primary block">Roots & Richness</span>
              </h1>
              <p className="text-lg text-neutral-medium leading-relaxed">
                Born from a deep respect for traditional methods and a commitment to bringing you 
                the purest natural products, Roots & Richness connects you directly with the source 
                of authentic wellness.
              </p>
              <p className="text-neutral-medium leading-relaxed">
                We believe that the best products come from the earth, crafted by hands that 
                understand the ancient wisdom of natural processing. Every product in our collection 
                tells a story of tradition, sustainability, and genuine care.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=600&fit=crop"
                alt="Traditional farming"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-neutral-medium">Natural Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary">
              Our Mission & Values
            </h2>
            <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
              We're driven by principles that guide every decision we make and every product we offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="text-primary" size={40} />,
                title: "Sustainability",
                description: "Supporting eco-friendly farming practices and sustainable sourcing that protects our planet for future generations."
              },
              {
                icon: <Users className="text-primary" size={40} />,
                title: "Community First",
                description: "Working directly with tribal communities and farmers, ensuring fair trade and supporting local livelihoods."
              },
              {
                icon: <Heart className="text-primary" size={40} />,
                title: "Pure & Natural",
                description: "No compromise on quality. Every product is 100% natural, free from artificial additives and chemicals."
              },
              {
                icon: <Award className="text-primary" size={40} />,
                title: "Traditional Methods",
                description: "Preserving ancient processing techniques that maintain the nutritional integrity and authentic taste."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-playfair font-semibold text-secondary mb-3">
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

      {/* Our Process */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary">
              Our Process
            </h2>
            <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
              From source to your door, every step is carefully managed to ensure quality and authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Source Selection",
                description: "We carefully select farmers and communities who share our commitment to traditional, sustainable practices."
              },
              {
                step: "02",
                title: "Traditional Processing",
                description: "Products are processed using time-honored methods like wood-pressing for oils and sun-drying for spices."
              },
              {
                step: "03",
                title: "Quality Assurance",
                description: "Every batch undergoes rigorous quality testing to ensure purity, potency, and safety before packaging."
              }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {process.step}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-secondary">
                  {process.title}
                </h3>
                <p className="text-neutral-medium leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary">
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
              Passionate individuals dedicated to bringing you the finest natural products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Rajesh Kumar",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
                description: "20+ years in sustainable agriculture and natural product sourcing."
              },
              {
                name: "Priya Sharma",
                role: "Quality Head",
                image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
                description: "Expert in traditional processing methods and quality assurance."
              },
              {
                name: "Arjun Patel",
                role: "Community Relations",
                image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
                description: "Building partnerships with farming communities across India."
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-neutral-light rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-secondary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-neutral-medium text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-playfair font-bold">
              Join Our Journey
            </h2>
            <p className="text-gray-300">
              Experience the difference that comes from products made with care, 
              tradition, and a deep respect for nature's wisdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products" className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors">
                Shop Our Products
              </a>
              <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-secondary px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
