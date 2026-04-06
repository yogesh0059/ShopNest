import { Product } from './store';

export const products: Product[] = [
  {
    id: '1', name: 'Premium Leather Jacket', price: 15499, originalPrice: 20999,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    category: 'Clothing', rating: 4.8, reviews: 234, badge: 'Bestseller',
    colors: ['#1a1a1a', '#8B4513', '#2F4F4F'], sizes: ['S', 'M', 'L', 'XL'],
    description: 'Handcrafted from genuine Italian leather with premium stitching and modern silhouette.',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&q=80',
      'https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600&q=80',
    ],
  },
  {
    id: '2', name: 'Wireless Noise-Cancelling Headphones', price: 24999, originalPrice: 34999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    category: 'Electronics', rating: 4.9, reviews: 1089, badge: 'Top Rated',
    colors: ['#1a1a1a', '#F5F5DC', '#4169E1'],
    description: 'Immersive sound with adaptive noise cancellation and 40-hour battery life.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80',
    ],
  },
  {
    id: '3', name: 'Minimalist Running Shoes', price: 8999, originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    category: 'Shoes', rating: 4.7, reviews: 567, badge: 'New',
    colors: ['#FF6347', '#1a1a1a', '#F5F5DC'], sizes: ['7', '8', '9', '10', '11'],
    description: 'Ultra-lightweight with responsive cushioning and breathable knit upper.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80',
    ],
  },
  {
    id: '4', name: 'Smart Watch Pro', price: 28999, originalPrice: 37999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    category: 'Electronics', rating: 4.6, reviews: 891, badge: 'Hot Deal',
    colors: ['#1a1a1a', '#C0C0C0', '#DAA520'],
    description: 'Advanced health tracking, GPS, and always-on display with titanium case.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
      'https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600&q=80',
    ],
  },
  {
    id: '5', name: 'Designer Sunglasses', price: 12999,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
    category: 'Accessories', rating: 4.5, reviews: 312,
    colors: ['#1a1a1a', '#8B4513', '#FFD700'],
    description: 'Polarized lenses with hand-polished acetate frames and UV400 protection.',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
    ],
  },
  {
    id: '6', name: 'Canvas Backpack', price: 5999, originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    category: 'Accessories', rating: 4.4, reviews: 198, badge: 'Eco-Friendly',
    colors: ['#556B2F', '#DEB887', '#2F4F4F'],
    description: 'Waxed canvas with leather accents, laptop sleeve, and water-resistant coating.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    ],
  },
  {
    id: '7', name: 'Ceramic Coffee Set', price: 3999,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80',
    category: 'Home', rating: 4.8, reviews: 445,
    colors: ['#F5F5DC', '#2F4F4F', '#D2691E'],
    description: 'Hand-thrown stoneware set with 4 mugs and matching pour-over dripper.',
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80',
    ],
  },
  {
    id: '8', name: 'Linen Blend Shirt', price: 4999, originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
    category: 'Clothing', rating: 4.3, reviews: 167,
    colors: ['#F5F5DC', '#87CEEB', '#FFC0CB'], sizes: ['S', 'M', 'L', 'XL'],
    description: 'Relaxed fit linen-cotton blend with mother-of-pearl buttons.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
    ],
  },
  {
    id: '9', name: 'Yoga Mat Premium', price: 6999,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80',
    category: 'Fitness', rating: 4.7, reviews: 623, badge: 'Popular',
    colors: ['#4B0082', '#2E8B57', '#1a1a1a'],
    description: 'Non-slip natural rubber with alignment markings and carrying strap.',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80',
    ],
  },
  {
    id: '10', name: 'Wireless Earbuds', price: 11999, originalPrice: 16999,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=600&q=80',
    category: 'Electronics', rating: 4.6, reviews: 2103, badge: 'Deal of the Day',
    colors: ['#1a1a1a', '#F5F5DC'],
    description: 'True wireless with spatial audio, 8h battery, and wireless charging case.',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=600&q=80',
    ],
  },
  {
    id: '11', name: 'Minimalist Desk Lamp', price: 9999,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&q=80',
    category: 'Home', rating: 4.5, reviews: 89,
    colors: ['#1a1a1a', '#F5F5DC', '#DAA520'],
    description: 'Adjustable LED with wireless charging base and touch dimmer.',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&q=80',
    ],
  },
  {
    id: '12', name: 'Vintage Denim Jacket', price: 8999, originalPrice: 11999,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80',
    category: 'Clothing', rating: 4.4, reviews: 321, badge: 'Trending',
    colors: ['#4682B4', '#1a1a1a'], sizes: ['S', 'M', 'L', 'XL'],
    description: 'Authentic stonewash with brass hardware and sherpa lining.',
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80',
    ],
  },
];

export const categories = [
  { name: 'Clothing', icon: '👕', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80' },
  { name: 'Electronics', icon: '🎧', image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&q=80' },
  { name: 'Shoes', icon: '👟', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&q=80' },
  { name: 'Accessories', icon: '🕶', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&q=80' },
  { name: 'Home', icon: '🏡', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80' },
  { name: 'Fitness', icon: '💪', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
];

export const banners = [
  {
    title: 'Spring Collection',
    subtitle: 'Up to 40% off on premium styles',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80',
    cta: 'Shop Now',
  },
  {
    title: 'Tech Essentials',
    subtitle: 'Latest gadgets at unbeatable prices',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    cta: 'Explore',
  },
  {
    title: 'New Arrivals',
    subtitle: 'Be the first to discover fresh drops',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80',
    cta: 'Discover',
  },
];

export function formatPrice(price: number): string {
  return '₹' + price.toLocaleString('en-IN');
}
