import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function TrendingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, visible } = useScrollAnimation();

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  const trending = products.filter(p => p.badge);

  return (
    <section ref={ref} className={`py-16 md:py-24 animate-in-view ${visible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Trending Now</h2>
            <p className="text-muted-foreground">What everyone's adding to cart this week</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll(1)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4">
          {trending.map((product, i) => (
            <div key={product.id} className="min-w-[260px] md:min-w-[280px] snap-start">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
