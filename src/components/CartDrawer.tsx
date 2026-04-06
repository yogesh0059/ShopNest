import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useStore } from '@/lib/store';
import { formatPrice } from '@/lib/products';
import { toast } from 'sonner';

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQuantity, cartTotal } = useStore();

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md glass shadow-2xl animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold font-display text-foreground">Your Cart</h2>
            <span className="text-sm text-muted-foreground">({cart.length})</span>
          </div>
          <button onClick={() => setCartOpen(false)} className="w-8 h-8 rounded-full hover:bg-white/[0.06] flex items-center justify-center transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-lg font-semibold text-foreground mb-1">Your cart is empty</p>
            <p className="text-sm text-muted-foreground mb-6">Add some items to get started</p>
            <button
              onClick={() => setCartOpen(false)}
              className="px-6 py-2.5 rounded-full gradient-primary text-primary-foreground text-sm font-semibold glow-hover"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-3 rounded-xl bg-white/[0.03] group transition-all duration-200 hover:bg-white/[0.06]">
                  <img src={item.product.image} alt={item.product.name} className="w-20 h-20 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate text-foreground">{item.product.name}</p>
                    <p className="text-sm font-bold text-primary mt-1">{formatPrice(item.product.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-white/[0.06] transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-white/[0.06] transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => { removeFromCart(item.product.id); toast('Item removed from cart'); }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity self-start"
                  >
                    <X className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-border/50 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-bold text-foreground">{formatPrice(cartTotal())}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium text-success">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-border/50 pt-4">
                <span className="text-foreground">Total</span>
                <span className="gradient-text">{formatPrice(cartTotal())}</span>
              </div>
              <button className="w-full py-3.5 rounded-full gradient-primary text-primary-foreground font-semibold text-sm glow-primary transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Checkout — {formatPrice(cartTotal())}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
