import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  colors?: string[];
  sizes?: string[];
  description?: string;
  images?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  searchQuery: string;
  cartOpen: boolean;
  addToCart: (product: Product, color?: string, size?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  setSearchQuery: (query: string) => void;
  setCartOpen: (open: boolean) => void;
  cartTotal: () => number;
  cartCount: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  wishlist: [],
  searchQuery: '',
  cartOpen: false,
  addToCart: (product, color, size) => set((state) => {
    const existing = state.cart.find(i => i.product.id === product.id);
    if (existing) {
      return { cart: state.cart.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i) };
    }
    return { cart: [...state.cart, { product, quantity: 1, selectedColor: color, selectedSize: size }] };
  }),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(i => i.product.id !== productId)
  })),
  updateQuantity: (productId, quantity) => set((state) => ({
    cart: quantity <= 0
      ? state.cart.filter(i => i.product.id !== productId)
      : state.cart.map(i => i.product.id === productId ? { ...i, quantity } : i)
  })),
  toggleWishlist: (productId) => set((state) => ({
    wishlist: state.wishlist.includes(productId)
      ? state.wishlist.filter(id => id !== productId)
      : [...state.wishlist, productId]
  })),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setCartOpen: (cartOpen) => set({ cartOpen }),
  cartTotal: () => get().cart.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
  cartCount: () => get().cart.reduce((sum, i) => sum + i.quantity, 0),
}));
