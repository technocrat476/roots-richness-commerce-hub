import { ChevronDown, ChevronUp, MessageCircle, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import PageSEO from '@/components/SEO/PageSEO';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Enhanced FAQ data with more detailed, SEO-optimized answers
  const faqData = [
    {
      question: "What makes wood-pressed oils different from regular refined oils?",
      answer: "Wood-pressed oils are extracted using traditional wooden presses (called 'ghani') at room temperature, preserving natural nutrients, antioxidants, vitamins, and flavors that are destroyed in high-heat industrial processing. Unlike refined oils that use chemical solvents like hexane, our oils are 100% mechanically extracted with no chemicals. This results in oils that retain their natural aroma, taste, and nutritional value - containing up to 10x more antioxidants than refined oils. Shop our premium wood-pressed oils with free shipping on orders over ₹500.",
      category: "Product Information"
    },
    {
      question: "How long do wood-pressed oils last and how should I store them?",
      answer: "Our wood-pressed oils have a shelf life of 12-18 months when stored properly in a cool, dry place away from direct sunlight. Once opened, we recommend using within 6-8 months for optimal freshness and nutritional value. Store in the original glass bottle, keep the cap tightly closed, and avoid storing near heat sources like stoves. Refrigeration isn't necessary but can help extend shelf life in very hot climates. Order today for the freshest oils delivered to your doorstep.",
      category: "Storage & Usage"
    },
    {
      question: "Are your products 100% organic and chemical-free?",
      answer: "Yes, all our products are 100% natural and chemical-free. Our oils are extracted without any chemical solvents, preservatives, or additives. Our tribal-sourced products follow traditional, sustainable farming practices without harmful pesticides or synthetic fertilizers. While not all are certified organic (due to certification costs for small farmers), we personally verify that all our partner farms use completely natural, chemical-free methods. Discover our range of pure, natural products with COD available.",
      category: "Quality & Certification"
    },
    {
      question: "Do you offer free shipping? What are your shipping charges?",
      answer: "We offer FREE shipping on orders above ₹999 across India. For orders below ₹999, a nominal shipping charge of ₹50 applies. We ship through trusted courier partners and typically deliver within 3-7 business days depending on your location. Remote areas may take 5-10 days. All orders are trackable and we send you tracking details via SMS and email. Shop now to enjoy free shipping on bulk orders.",
      category: "Shipping & Delivery"
    },
    {
      question: "What is your return and refund policy?",
      answer: "We offer a hassle-free 7-day return policy for unopened products. If you're not completely satisfied with your purchase, you can return it within 7 days of delivery for a full refund. The product must be in its original packaging and unused. For quality issues or damaged products, we provide immediate replacement or full refund even after opening. Contact our customer care team at +91-9876543210 to initiate a return. Order with confidence knowing your satisfaction is guaranteed.",
      category: "Returns & Refunds"
    },
    {
      question: "How do I know which oil is right for my needs?",
      answer: "Each of our oils has unique properties and benefits: Coconut oil (high smoke point, great for cooking and hair care), Sesame oil (perfect for oil pulling, massage, and medium-heat cooking), Mustard oil (excellent for high-heat cooking and therapeutic massage), Groundnut oil (neutral taste, ideal for all cooking methods). Check our detailed product descriptions, or contact our wellness experts for personalized recommendations based on your specific health goals and cooking needs.",
      category: "Product Selection"
    },
    {
      question: "Are your oils safe for babies, children, and pregnant women?",
      answer: "Yes, our pure, natural wood-pressed oils are generally safe for all age groups, including babies and pregnant women. However, we recommend consulting with your pediatrician or healthcare provider before introducing new oils to infants under 6 months or if you have specific health conditions or allergies. Our oils are free from chemicals and additives, making them gentle and safe for topical use and consumption when used appropriately.",
      category: "Safety & Health"
    },
    {
      question: "Can I use your oils for skin and hair care?",
      answer: "Absolutely! Our unrefined, wood-pressed oils are excellent for skin and hair care. Coconut oil deeply moisturizes and has antimicrobial properties, sesame oil is rich in vitamin E and perfect for anti-aging skincare, and mustard oil stimulates blood circulation for hair growth. Unlike refined oils, ours retain natural vitamins and antioxidants that nourish skin and hair. Always do a patch test first if you have sensitive skin.",
      category: "Beauty & Personal Care"
    },
    {
      question: "Do you have physical stores or only sell online?",
      answer: "Currently, we operate as a direct-to-consumer brand and sell exclusively online through our website. This allows us to offer better prices by eliminating middlemen costs and ensures fresh products reach you directly from our processing units. We're considering select retail partnerships in the future, but for now, online ordering gives you access to the freshest oils at the best prices with detailed product information.",
      category: "Shopping & Availability"
    },
    {
      question: "What payment methods do you accept? Is online payment safe?",
      answer: "We accept all major payment methods including credit cards (Visa, MasterCard, American Express), debit cards, UPI (PhonePe, Google Pay, Paytm), net banking, and popular digital wallets. All transactions are processed through Razorpay's secure payment gateway with 256-bit SSL encryption. We also offer Cash on Delivery (COD) for orders above ₹500. Your payment information is never stored on our servers.",
      category: "Payment & Security"
    },
    {
      question: "How do you ensure the quality and purity of your oils?",
      answer: "We maintain strict quality control at every step: We personally visit and verify all partner farms, supervise the wood-pressing process, conduct laboratory testing for purity and nutritional content, use only food-grade glass bottles, and maintain cold chain storage. Each batch is tested for adulterants, and we provide certificates of analysis on request. Our oils are processed in small batches to ensure maximum freshness.",
      category: "Quality Assurance"
    },
    {
      question: "Do you offer bulk quantities or wholesale pricing?",
      answer: "Yes, we offer bulk quantities and wholesale pricing for restaurants, wellness centers, retail stores, and large families. Bulk orders start from 10 liters with attractive quantity discounts. We also have special pricing for corporate gifting, wedding favors, and institutional buyers. Contact our sales team at wholesale@rootsandrichness.in or call +91-XXXXXXXXX for custom quotes and partnership opportunities.",
      category: "Bulk Orders & Wholesale"
    }
  ];

  const categories = [...new Set(faqData.map(faq => faq.category))];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Frequently Asked Questions' }
  ];

  // Enhanced JSON-LD structured data for FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Wood-Pressed Oils FAQ - Roots & Richness",
    "description": "Common questions about wood-pressed oils, storage, benefits, shipping, and more",
    "url": "https://rootsandrichness.in/faq",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title="FAQ - Wood-Pressed Oils Questions Answered"
        description="Get expert answers to common questions about wood-pressed oils, organic products, shipping, storage, health benefits, and more from India's premium natural oil brand. Shop with confidence."
        keywords="wood-pressed oil FAQ, cold-pressed oil questions, organic oil storage, natural oil benefits, oil pressing questions, traditional oil extraction, chemical-free oils, FAQ Roots and Richness"
        canonicalUrl="https://rootsandrichness.in/faq"
        structuredData={faqJsonLd}
      />

      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Breadcrumb */}
      <div className="bg-neutral-light py-4">
        <div className="container mx-auto container-padding">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Header - Consistent with other pages */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding text-center">
          <h1 className="mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg leading-relaxed content-width mb-8">
            Everything you need to know about our wood-pressed oils, traditional extraction methods, 
            health benefits, shipping, and more. Can't find your answer? Our wellness experts are here to help.
          </p>
          
          {/* Consistent quick stats layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 content-width">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl card-hover">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-neutral-medium font-medium">Chemical-Free</div>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-xl card-hover">
              <div className="text-3xl font-bold text-accent">12-18</div>
              <div className="text-sm text-neutral-medium font-medium">Months Shelf Life</div>
            </div>
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-xl card-hover">
              <div className="text-3xl font-bold text-secondary">3-7</div>
              <div className="text-sm text-neutral-medium font-medium">Days Delivery</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-6 rounded-xl card-hover">
              <div className="text-3xl font-bold text-green-600">7-Day</div>
              <div className="text-sm text-neutral-medium font-medium">Return Policy</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories - Enhanced consistency */}
      <section className="py-8 bg-neutral-light">
        <div className="container mx-auto container-padding">
          <div className="content-width">
            <h2 className="text-xl font-semibold text-secondary mb-6">Browse by Category:</h2>
            <div className="flex flex-wrap gap-3">
              <Button variant="default" size="sm" className="btn-primary">All Questions</Button>
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm" className="hover:bg-primary hover:text-white transition-colors">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content - Enhanced accessibility and consistency */}
      <section id="main-content" className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="content-width">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="overflow-hidden card-hover">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                      aria-expanded={openItems.includes(index)}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <div className="flex-1 pr-4">
                        <h3 className="text-lg font-semibold text-secondary mb-2 leading-tight">
                          {faq.question}
                        </h3>
                        <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      {openItems.includes(index) ? (
                        <ChevronUp className="text-primary flex-shrink-0" size={20} />
                      ) : (
                        <ChevronDown className="text-primary flex-shrink-0" size={20} />
                      )}
                    </button>
                    
                    {openItems.includes(index) && (
                      <div id={`faq-answer-${index}`} className="px-6 pb-6 border-t border-neutral-light">
                        <p className="leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section - Consistent with other pages */}
      <section className="section-padding bg-neutral-light">
        <div className="container mx-auto container-padding">
          <div className="content-width text-center">
            <h2 className="mb-6">
              Still Need Help?
            </h2>
            <p className="text-neutral-medium mb-8 max-w-2xl mx-auto">
              Our customer care team and wellness experts are available to answer any questions 
              about our products, traditional oil extraction methods, or help you choose the right oils for your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Phone className="text-primary mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-secondary mb-2">Call Us</h3>
                <p className="text-sm text-neutral-medium mb-3">Mon-Sat, 9 AM - 7 PM</p>
                <a href="tel:+919876543210" className="text-primary font-medium">+91-9876-543-210</a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Mail className="text-primary mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-secondary mb-2">Email Support</h3>
                <p className="text-sm text-neutral-medium mb-3">Response within 24 hours</p>
                <a href="mailto:support@rootsandrichness.in" className="text-primary font-medium">support@rootsandrichness.in</a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <MessageCircle className="text-primary mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-secondary mb-2">Live Chat</h3>
                <p className="text-sm text-neutral-medium mb-3">Instant help available</p>
                <Button size="sm" className="btn-primary">Start Chat</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">
            Have a Specific Question About Wood-Pressed Oils?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of wellness experts and traditional oil processing specialists are here to help. 
            Get personalized advice on choosing the right oils for your health goals and cooking needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-primary">
                Contact Our Experts
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                Browse Our Products
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-xs text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">99%</div>
              <div className="text-xs text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-xs text-gray-400">Partner Farms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24hrs</div>
              <div className="text-xs text-gray-400">Support Response</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
