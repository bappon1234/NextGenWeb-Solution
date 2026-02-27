import { Zap, DollarSign, Search, Smartphone, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Project-Based Timeline',
    detail: 'Quick turnaround with delivery time based on project requirements and complexity.'
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Best Value',
    detail: 'Premium quality at competitive prices'
  },
  {
    icon: Search,
    title: 'SEO Friendly',
    description: 'Google Ready',
    detail: 'Optimized for search engines from day one'
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'All Devices',
    detail: 'Perfect experience on every screen size'
  },
  {
    icon: HeadphonesIcon,
    title: '1 Month Free Support',
    description: 'We Got You',
    detail: 'Dedicated support after project delivery'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Why Choose Us
        </h2>
        <p className="text-center text-blue-200 mb-16 text-lg">
          We deliver excellence in every project
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-blue-300 font-semibold mb-2">{feature.description}</p>
              <p className="text-sm text-gray-300">{feature.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
