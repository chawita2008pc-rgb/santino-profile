import { motion } from 'motion/react';
import { Flame, ShieldCheck, Sun, Leaf, Zap, Wand2, Crown, ShoppingBag, Coffee, Plane, Smartphone, Wifi, Building2, Award, Landmark, Wallet, Droplet } from 'lucide-react';

const colorsData = [
  {
    id: 'red',
    name: 'Red',
    hex: '#ef4444',
    bgClass: 'bg-red-500',
    textClass: 'text-red-500',
    borderClass: 'border-red-500',
    emotions: ['Passion', 'Energy', 'Urgency', 'Appetite'],
    brand: 'Mostaza',
    brandDesc: 'Argentine fast-food chain. Uses red to stimulate appetite, convey fast service, and project high energy.',
    icon: Flame
  },
  {
    id: 'blue',
    name: 'Blue',
    hex: '#3b82f6',
    bgClass: 'bg-blue-500',
    textClass: 'text-blue-500',
    borderClass: 'border-blue-500',
    emotions: ['Trust', 'Security', 'Calm', 'Professionalism'],
    brand: 'YPF',
    brandDesc: 'National energy company. Blue represents corporate trust, stability, and institutional weight across the country.',
    icon: ShieldCheck
  },
  {
    id: 'yellow',
    name: 'Yellow',
    hex: '#eab308',
    bgClass: 'bg-yellow-500',
    textClass: 'text-yellow-500',
    borderClass: 'border-yellow-500',
    emotions: ['Optimism', 'Warmth', 'Clarity', 'Innovation'],
    brand: 'Mercado Libre',
    brandDesc: 'E-commerce giant. Yellow transmits optimism, speed, and a friendly, accessible user experience.',
    icon: Sun
  },
  {
    id: 'green',
    name: 'Green',
    hex: '#22c55e',
    bgClass: 'bg-green-500',
    textClass: 'text-green-500',
    borderClass: 'border-green-500',
    emotions: ['Growth', 'Health', 'Nature', 'Freshness'],
    brand: 'Globant',
    brandDesc: 'IT and software development company. Green signifies continuous growth, fresh ideas, and tech innovation.',
    icon: Leaf
  },
  {
    id: 'orange',
    name: 'Orange',
    hex: '#f97316',
    bgClass: 'bg-orange-500',
    textClass: 'text-orange-500',
    borderClass: 'border-orange-500',
    emotions: ['Enthusiasm', 'Friendliness', 'Action', 'Confidence'],
    brand: 'Naranja X',
    brandDesc: 'Fintech company. The color literally names the brand, projecting extreme friendliness and approachability.',
    icon: Zap
  },
  {
    id: 'purple',
    name: 'Purple',
    hex: '#a855f7',
    bgClass: 'bg-purple-500',
    textClass: 'text-purple-500',
    borderClass: 'border-purple-500',
    emotions: ['Creativity', 'Luxury', 'Wisdom', 'Magic'],
    brand: 'Mimo & Co',
    brandDesc: 'Children\'s clothing brand. Purple is used to evoke imagination, creativity, and a playful yet premium feel.',
    icon: Wand2
  },
  {
    id: 'black',
    name: 'Black',
    hex: '#171717',
    bgClass: 'bg-neutral-900',
    textClass: 'text-neutral-900',
    borderClass: 'border-neutral-900',
    emotions: ['Elegance', 'Power', 'Sophistication', 'Mystery'],
    brand: 'La Dolfina',
    brandDesc: 'High-end polo lifestyle brand. Black is used to project exclusivity, luxury, and timeless elegance.',
    icon: Crown
  },
  {
    id: 'pink',
    name: 'Pink',
    hex: '#ec4899',
    bgClass: 'bg-pink-500',
    textClass: 'text-pink-500',
    borderClass: 'border-pink-500',
    emotions: ['Playful', 'Sweet', 'Youthful', 'Feminine'],
    brand: 'Todo Moda',
    brandDesc: 'Accessories and lifestyle brand. Pink appeals to a young, energetic demographic looking for fun and trendy products.',
    icon: ShoppingBag
  },
  {
    id: 'brown',
    name: 'Brown',
    hex: '#92400e',
    bgClass: 'bg-amber-800',
    textClass: 'text-amber-800',
    borderClass: 'border-amber-800',
    emotions: ['Tradition', 'Comfort', 'Reliability', 'Earthy'],
    brand: 'Havanna',
    brandDesc: 'Iconic alfajor and coffee brand. Brown evokes the rich taste of chocolate and dulce de leche, paired with deep-rooted tradition.',
    icon: Coffee
  },
  {
    id: 'lightblue',
    name: 'Light Blue',
    hex: '#38bdf8',
    bgClass: 'bg-sky-400',
    textClass: 'text-sky-500',
    borderClass: 'border-sky-400',
    emotions: ['Patriotism', 'Freedom', 'Tranquility', 'Openness'],
    brand: 'Aerolíneas Argentinas',
    brandDesc: 'The national flag carrier. Light blue directly connects to the Argentine flag, evoking national pride and the open sky.',
    icon: Plane
  },
  {
    id: 'magenta',
    name: 'Magenta',
    hex: '#d946ef',
    bgClass: 'bg-fuchsia-500',
    textClass: 'text-fuchsia-500',
    borderClass: 'border-fuchsia-500',
    emotions: ['Disruptive', 'Vibrant', 'Modern', 'Bold'],
    brand: 'Ualá',
    brandDesc: 'Personal financial management app. Magenta stands out in the traditional banking sector, signaling a modern, disruptive, and digital-first approach.',
    icon: Smartphone
  },
  {
    id: 'teal',
    name: 'Teal',
    hex: '#14b8a6',
    bgClass: 'bg-teal-500',
    textClass: 'text-teal-500',
    borderClass: 'border-teal-500',
    emotions: ['Dynamic', 'Connectivity', 'Refreshing', 'Tech-forward'],
    brand: 'Personal',
    brandDesc: 'Telecommunications company. Teal represents a blend of technology and fluid connectivity in the modern digital age.',
    icon: Wifi
  },
  {
    id: 'gray',
    name: 'Gray',
    hex: '#64748b',
    bgClass: 'bg-slate-500',
    textClass: 'text-slate-500',
    borderClass: 'border-slate-500',
    emotions: ['Industrial', 'Sleek', 'Professional', 'Neutral'],
    brand: 'Techint',
    brandDesc: 'Multinational conglomerate. Gray projects industrial strength, engineering precision, and corporate seriousness.',
    icon: Building2
  },
  {
    id: 'gold',
    name: 'Gold',
    hex: '#fbbf24',
    bgClass: 'bg-amber-400',
    textClass: 'text-amber-600',
    borderClass: 'border-amber-400',
    emotions: ['Prestige', 'Quality', 'Wealth', 'Classic'],
    brand: 'Felfort',
    brandDesc: 'Historic chocolate manufacturer. Gold packaging and branding communicate premium quality, prestige, and a golden standard in confectionery.',
    icon: Award
  },
  {
    id: 'navy',
    name: 'Navy',
    hex: '#312e81',
    bgClass: 'bg-indigo-900',
    textClass: 'text-indigo-900',
    borderClass: 'border-indigo-900',
    emotions: ['Authority', 'Trust', 'Corporate', 'Stability'],
    brand: 'Banco Macro',
    brandDesc: 'One of the largest private banks. Navy blue provides a sense of deep financial stability, institutional authority, and unwavering trust.',
    icon: Landmark
  },
  {
    id: 'lime',
    name: 'Lime',
    hex: '#a3e635',
    bgClass: 'bg-lime-400',
    textClass: 'text-lime-600',
    borderClass: 'border-lime-400',
    emotions: ['Crypto', 'Youth', 'Energy', 'Innovation'],
    brand: 'Lemon Cash',
    brandDesc: 'Crypto exchange and digital wallet. Lime green breaks away from traditional finance, appealing to Gen Z with high energy and tech-savvy vibes.',
    icon: Wallet
  },
  {
    id: 'white',
    name: 'White',
    hex: '#ffffff',
    bgClass: 'bg-neutral-300',
    textClass: 'text-neutral-600',
    borderClass: 'border-neutral-300',
    emotions: ['Purity', 'Health', 'Simplicity', 'Honesty'],
    brand: 'La Serenísima',
    brandDesc: 'Leading dairy company. White is the literal color of milk, universally symbolizing purity, health, and uncompromised quality.',
    icon: Droplet
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-neutral-950 mb-6">
            Color Psychology
          </h1>
          <p className="text-xl md:text-2xl text-neutral-500 font-light leading-relaxed">
            How colors transmit emotions and shape brand identity, featuring iconic examples from Argentina.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colorsData.map((color, index) => {
            const Icon = color.icon;
            return (
              <motion.div
                key={color.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 overflow-hidden flex flex-col h-full"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-2 ${color.bgClass}`} />
                
                {/* Header: Icon & Name */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${color.bgClass}/10 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${color.textClass}`} />
                    </div>
                    <h2 className="font-display text-3xl font-bold tracking-tight">
                      {color.name}
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-neutral-400 font-medium tracking-wider uppercase">
                    {color.hex}
                  </span>
                </div>

                {/* Emotions */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                    Emotions Transmitted
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {color.emotions.map((emotion) => (
                      <span 
                        key={emotion}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${color.bgClass}/10 ${color.textClass}`}
                      >
                        {emotion}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Brand Example */}
                <div className="mt-auto pt-6 border-t border-neutral-100">
                  <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                    Argentine Brand Example
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${color.bgClass}`} />
                    <span className="font-display font-bold text-xl text-neutral-900">
                      {color.brand}
                    </span>
                  </div>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {color.brandDesc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 text-center border-t border-neutral-200 pt-8"
        >
          <p className="text-neutral-400 text-sm">
            Designed to illustrate the power of color in branding and marketing.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
