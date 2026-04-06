import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Star, Heart, ShoppingBag, Minus, Plus, ChevronDown, Truck, Shield, RotateCcw } from 'lucide-react';
import { products, formatPrice } from '@/lib/products';
import { useStore } from '@/lib/store';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState<string | null>('description');

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <p className="text-2xl font-display font-bold text-foreground">Product not found</p>
        </div>
      </div>
    );
  }

  const isWished = wishlist.includes(product.id);
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  const images = product.images || [product.image];
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product, product.colors?.[selectedColor], selectedSize || undefined);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img src={images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              {images.length > 1 && (
                <div className="flex gap-3">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        i === selectedImage ? 'border-primary' : 'border-border/50 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="md:sticky md:top-28 md:self-start space-y-6">
              {product.badge && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold gradient-primary text-primary-foreground">{product.badge}</span>
              )}
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">{product.name}</h1>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-warning fill-warning' : 'text-muted'}`} />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-foreground">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-destructive/10 text-destructive">-{discount}%</span>
                  </>
                )}
              </div>

              {product.colors && (
                <div>
                  <p className="text-sm font-medium text-foreground mb-3">Color</p>
                  <div className="flex gap-2">
                    {product.colors.map((color, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedColor(i)}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          i === selectedColor ? 'border-primary scale-110' : 'border-border/50'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {product.sizes && (
                <div>
                  <p className="text-sm font-medium text-foreground mb-3">Size</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[44px] h-11 px-4 rounded-xl text-sm font-medium border transition-all ${
                          selectedSize === size
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-foreground/30 text-foreground'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-xl">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-11 h-11 flex items-center justify-center hover:bg-white/[0.06] rounded-l-xl transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold text-foreground">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="w-11 h-11 flex items-center justify-center hover:bg-white/[0.06] rounded-r-xl transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl gradient-primary text-primary-foreground font-semibold glow-hover transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={() => { toggleWishlist(product.id); toast(isWished ? 'Removed from wishlist' : 'Added to wishlist'); }}
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all ${
                    isWished ? 'border-destructive/30 bg-destructive/10 text-destructive' : 'border-border hover:bg-white/[0.06] text-foreground'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWished ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/50">
                {[
                  { icon: Truck, text: 'Free Shipping' },
                  { icon: Shield, text: '2yr Warranty' },
                  { icon: RotateCcw, text: '30-day Return' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.03]">
                    <Icon className="w-5 h-5 text-primary mb-1" />
                    <span className="text-xs font-medium text-muted-foreground">{text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-4">
                {[
                  { id: 'description', title: 'Description', content: product.description || 'No description available.' },
                  { id: 'reviews', title: 'Reviews', content: `${product.reviews} reviews with an average rating of ${product.rating}/5. Customers love the quality and design.` },
                ].map((section) => (
                  <div key={section.id} className="border border-border/50 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                      className="w-full flex items-center justify-between p-4 text-sm font-semibold text-foreground hover:bg-white/[0.03] transition-colors"
                    >
                      {section.title}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === section.id ? 'rotate-180' : ''}`} />
                    </button>
                    {openSection === section.id && (
                      <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                        {section.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-display font-bold text-foreground mb-8">You might also like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {related.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
