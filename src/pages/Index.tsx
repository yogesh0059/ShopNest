import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { CategoryGrid } from '@/components/CategoryGrid';
import { TrendingSection } from '@/components/TrendingSection';
import { DealsSection } from '@/components/DealsSection';
import { RecommendedSection } from '@/components/RecommendedSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoryGrid />
      <TrendingSection />
      <DealsSection />
      <RecommendedSection />
      <Footer />
    </div>
  );
};

export default Index;
