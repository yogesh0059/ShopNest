import { Star, Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product, useStore } from '@/lib/store';
import { formatPrice } from '@/lib/products';
import { toast } from 'sonner';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [addingToCart, setAddingToCart] = useState(false);
  const isWished = wishlist.includes(product.id);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAddingToCart(true);
    addToCart(product);
    toast.success(`${product.name} added to cart`);
    setTimeout(() => setAddingToCart(false), 600);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    toast(isWished ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="card-lift rounded-2xl overflow-hidden bg-card border border-border/50">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold gradient-primary text-primary-foreground">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-destructive text-destructive-foreground">
              -{discount}%
            </span>
          )}

          {/* Quick Actions */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                addingToCart
                  ? 'bg-success text-success-foreground scale-95'
                  : 'glass text-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {addingToCart ? 'Added!' : 'Add to Cart'}
            </button>
            <button
              onClick={handleWishlist}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                isWished ? 'bg-destructive/10 text-destructive' : 'glass text-foreground hover:text-destructive'
              }`}
            >
              <Heart className={`w-4 h-4 ${isWished ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">{product.category}</p>
          <h3 className="text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-warning fill-warning' : 'text-muted'}`} />
            ))}
            <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-bold text-foreground">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
