import { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown, LogIn } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '@/lib/store';
import { categories } from '@/lib/products';
import { CartDrawer } from './CartDrawer';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const { cartCount, setCartOpen, searchQuery, setSearchQuery, wishlist } = useStore();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const count = cartCount();

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-background/80 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg transition-transform duration-300 group-hover:scale-110">
                S
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Shop<span className="gradient-text">Nest</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                  Categories <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {megaMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-scale-in">
                    <div className="glass rounded-2xl shadow-2xl shadow-black/30 p-6 grid grid-cols-3 gap-4 min-w-[420px]">
                      {categories.map((cat) => (
                        <Link
                          key={cat.name}
                          to={`/category/${cat.name.toLowerCase()}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group"
                        >
                          <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                          <span className="text-sm font-medium text-foreground">{cat.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link to="/deals" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Deals</Link>
              <Link to="/new" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">New Arrivals</Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className={`relative transition-all duration-300 ${searchOpen ? 'w-64' : 'w-10'}`}>
                {searchOpen ? (
                  <div className="flex items-center glass rounded-full px-4 py-2">
                    <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                    <input
                      ref={searchRef}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter' && searchQuery.trim()) navigate(`/search?q=${searchQuery}`); }}
                      placeholder="Search products..."
                      className="bg-transparent border-none outline-none text-sm ml-2 w-full text-foreground placeholder:text-muted-foreground"
                    />
                    <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }} className="ml-1">
                      <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                    </button>
                  </div>
                ) : (
                  <button onClick={() => setSearchOpen(true)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/[0.06] transition-colors">
                    <Search className="w-5 h-5 text-foreground" />
                  </button>
                )}
              </div>

              <Link to="/wishlist" className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/[0.06] transition-colors">
                <Heart className="w-5 h-5 text-foreground" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full gradient-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">{wishlist.length}</span>
                )}
              </Link>

              <button onClick={() => setCartOpen(true)} className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/[0.06] transition-colors">
                <ShoppingBag className="w-5 h-5 text-foreground" />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full gradient-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center animate-count-pulse">{count}</span>
                )}
              </button>

              <Link to="/login" className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold hover:scale-105 active:scale-95 transition-transform duration-200">
                <LogIn className="w-4 h-4" />
                Login
              </Link>

              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/[0.06] transition-colors">
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden glass border-t border-border/50 animate-fade-in">
            <div className="px-4 py-4 space-y-2">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={`/category/${cat.name.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors"
                >
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-sm font-medium">{cat.name}</span>
                </Link>
              ))}
              <Link to="/login" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors">
                <LogIn className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Login / Sign Up</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
      <CartDrawer />
    </>
  );
}
