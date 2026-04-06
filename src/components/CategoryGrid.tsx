import { Link } from 'react-router-dom';
import { categories } from '@/lib/products';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function CategoryGrid() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section ref={ref} className={`py-16 md:py-24 animate-in-view ${visible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Shop by Category</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Explore curated collections across every style</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              to={`/category/${cat.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-2xl aspect-square card-lift"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span className="text-3xl mb-1 block group-hover:scale-125 transition-transform duration-300">{cat.icon}</span>
                <span className="text-sm font-semibold text-white">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
