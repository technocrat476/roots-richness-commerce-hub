import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart, Truck, Shield, RotateCcw, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import StickyCheckoutButton from '@/components/ui/StickyCheckoutButton';

const ProductDetail = () => {
  const { slug } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-playfair font-bold text-secondary">Product Not Found</h1>
          <Link to="/products">
            <Button className="btn-primary">
              <ArrowLeft size={16} className="mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
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
    }
  };

  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-neutral-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-neutral-medium hover:text-primary">Home</Link>
            <span className="text-neutral-medium">/</span>
            <Link to="/products" className="text-neutral-medium hover:text-primary">Products</Link>
            <span className="text-neutral-medium">/</span>
            <span className="text-secondary font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-neutral-light rounded-lg overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.originalPrice && (
                <Badge className="absolute top-4 left-4 bg-accent text-white">
                  Save ₹{product.originalPrice - product.price}
                </Badge>
              )}
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square bg-neutral-light rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-neutral-medium">
                {product.shortDescription}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-primary fill-current" size={20} />
                ))}
              </div>
              <span className="text-sm text-neutral-medium">(48 reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-secondary">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-neutral-medium line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-sm text-accent">
                  You save ₹{product.originalPrice - product.price} ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
                </p>
              )}
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-secondary">Size:</h3>
                <div className="flex space-x-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className={selectedSize === size ? "btn-primary" : ""}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-semibold text-secondary">Quantity:</h3>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="px-4 py-2 border border-gray-300 rounded">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="btn-primary flex-1"
                  size="lg"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart size={20} />
                </Button>
              </div>
              
              {!product.inStock && (
                <p className="text-destructive text-sm">This product is currently out of stock.</p>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center space-y-2">
                <Truck className="text-primary mx-auto" size={24} />
                <div className="text-xs">
                  <div className="font-medium">Free Shipping</div>
                  <div className="text-neutral-medium">Orders over ₹500</div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <Shield className="text-primary mx-auto" size={24} />
                <div className="text-xs">
                  <div className="font-medium">100% Natural</div>
                  <div className="text-neutral-medium">No chemicals</div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <RotateCcw className="text-primary mx-auto" size={24} />
                <div className="text-xs">
                  <div className="font-medium">Easy Returns</div>
                  <div className="text-neutral-medium">7-day policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16 space-y-8">
          <Separator />
          
          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-playfair font-bold text-secondary">Description</h2>
            <p className="text-neutral-medium leading-relaxed">{product.description}</p>
          </div>

          {/* Benefits */}
          {product.benefits && product.benefits.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-playfair font-bold text-secondary">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-neutral-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How to Use */}
          {product.howToUse && (
            <div className="space-y-4">
              <h2 className="text-2xl font-playfair font-bold text-secondary">How to Use</h2>
              <p className="text-neutral-medium leading-relaxed">{product.howToUse}</p>
            </div>
          )}

          {/* Ingredients */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-playfair font-bold text-secondary">Ingredients</h2>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 space-y-8">
            <Separator />
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-playfair font-bold text-secondary">Related Products</h2>
              <p className="text-neutral-medium">You might also like these products</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-playfair font-semibold text-secondary mb-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-secondary">
                        ₹{relatedProduct.price}
                      </span>
                      <Link to={`/products/${relatedProduct.slug}`}>
                        <Button size="sm" variant="outline">View</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Checkout Button */}
      <StickyCheckoutButton />
    </div>
  );
};

export default ProductDetail;
