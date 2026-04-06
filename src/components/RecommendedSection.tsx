import { products } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Sparkles } from 'lucide-react';

export function RecommendedSection() {
  const { ref, visible } = useScrollAnimation();
  const recommended = products.slice(0, 8);

  return (
    <section ref={ref} className={`py-16 md:py-24 animate-in-view ${visible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Recommended for You</h2>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">Curated picks based on trending styles</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {recommended.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
