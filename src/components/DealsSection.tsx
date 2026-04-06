import { useState, useEffect } from 'react';
import { products } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Flame } from 'lucide-react';

function CountdownTimer({ targetHours }: { targetHours: number }) {
  const [time, setTime] = useState(targetHours * 3600);

  useEffect(() => {
    const id = setInterval(() => setTime(t => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;

  return (
    <div className="flex gap-2">
      {[
        { val: h, label: 'hrs' },
        { val: m, label: 'min' },
        { val: s, label: 'sec' },
      ].map(({ val, label }) => (
        <div key={label} className="flex flex-col items-center">
          <span className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center text-lg font-bold">
            {String(val).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function DealsSection() {
  const { ref, visible } = useScrollAnimation();
  const deals = products.filter(p => p.originalPrice);

  return (
    <section ref={ref} className={`py-16 md:py-24 bg-muted/30 animate-in-view ${visible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Top Deals</h2>
            </div>
            <p className="text-muted-foreground">Limited time offers — grab them before they're gone</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Ends in</span>
            <CountdownTimer targetHours={8} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {deals.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
