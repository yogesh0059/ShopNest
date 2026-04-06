import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold">S</div>
              <span className="text-lg font-bold">Shop<span className="gradient-text">Nest</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Premium shopping experience with curated products for modern living.</p>
          </div>
          {[
            { title: 'Shop', links: ['New Arrivals', 'Trending', 'Best Sellers', 'Sale'] },
            { title: 'Help', links: ['Contact Us', 'Shipping', 'Returns', 'FAQ'] },
            { title: 'Company', links: ['About', 'Careers', 'Press', 'Blog'] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">© 2026 ShopNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
