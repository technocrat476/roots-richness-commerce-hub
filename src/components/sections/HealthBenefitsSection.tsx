
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Heart, Flame, Soap, Hair, Bottle } from 'lucide-react';

const HealthBenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Supports Brain Health",
      description: "Rich in Omega-3 and Vitamin E, supports cognitive health and memory",
      keywords: "brain function, cognitive health, omega-3 oils"
    },
    {
      icon: Heart,
      title: "Boosts Heart Health", 
      description: "Contains unsaturated fats that help maintain cholesterol levels",
      keywords: "heart health, cholesterol, unsaturated fats"
    },
    {
      icon: Flame,
      title: "High Smoke Point",
      description: "Makes it ideal for Indian cooking styles like tadka, frying, and sautéing",
      keywords: "high smoke point, Indian cooking, frying"
    },
    {
      icon: Soap,
      title: "Easy to Digest",
      description: "Unrefined oils aid digestion and improve liver function",
      keywords: "digestive health, liver function, unrefined oils"
    },
    {
      icon: Hair,
      title: "Promotes Hair Growth",
      description: "Strengthens hair roots and reduces hair fall when applied regularly",
      keywords: "hair care, hair growth, scalp health"
    },
    {
      icon: Bottle,
      title: "Nourishes the Skin",
      description: "Anti-inflammatory and moisturizing properties keep skin soft and clear",
      keywords: "skin care, anti-inflammatory, moisturizing"
    }
  ];

  return (
    <section id="health-benefits" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary">
            Health Benefits of Wood-Pressed Oils
          </h2>
          <p className="text-lg text-neutral-medium max-w-4xl mx-auto leading-relaxed">
            Naturally extracted using traditional wooden presses, our oils retain essential nutrients, flavor, and aroma—making them a healthier choice for your daily meals.
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-neutral-medium leading-relaxed">
              Wood-pressed oils, also known as cold-pressed or kachi ghani oils, are extracted at low temperatures without any chemicals or refining. This method preserves vital nutrients and antioxidants that offer real health benefits for traditional Indian cooking and wellness routines.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 animate-fade-in bg-white" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent 
                        size={28} 
                        className="text-primary" 
                        aria-label={benefit.title}
                      />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-secondary">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-medium leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/products">
            <Button size="lg" className="btn-primary text-lg px-8 py-4">
              Explore Our Oils
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Learn the Wood-Pressed Method
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefitsSection;
