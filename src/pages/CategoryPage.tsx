import { useParams } from 'react-router-dom';
import { products, categories } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const CategoryPage = () => {
  const { name } = useParams();
  const categoryName = name ? name.charAt(0).toUpperCase() + name.slice(1) : '';
  const category = categories.find(c => c.name.toLowerCase() === name);
  const filtered = products.filter(p => p.category.toLowerCase() === name);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              {category && <span className="text-4xl">{category.icon}</span>}
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">{categoryName}</h1>
            </div>
            <p className="text-muted-foreground">{filtered.length} products found</p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <p className="text-lg font-semibold text-foreground mb-1">No products yet</p>
              <p className="text-sm text-muted-foreground">Check back soon for new arrivals</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
