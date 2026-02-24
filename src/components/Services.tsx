import { Globe, ShoppingCart, Briefcase, FileText, RefreshCw, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Business Website',
    description: 'Professional corporate websites that establish credibility and showcase your brand. Perfect for companies looking to build trust and attract customers online.'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Website',
    description: 'Full-featured online stores with secure payment integration and inventory management. Start selling your products online and reach customers worldwide.'
  },
  {
    icon: Briefcase,
    title: 'Portfolio Website',
    description: 'Stunning portfolio sites for creatives and professionals to showcase their work. Stand out from the competition with a unique digital presence.'
  },
  {
    icon: FileText,
    title: 'Landing Page',
    description: 'High-converting landing pages designed to capture leads and drive sales. Optimized for maximum conversion rates and campaign success.'
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description: 'Transform your outdated website into a modern, user-friendly experience. Improve performance, design, and functionality to boost engagement.'
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Get found on Google with our comprehensive SEO services. Increase organic traffic and improve your search engine rankings effectively.'
  }
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Our Services
        </h2>
        <p className="text-center text-blue-300 mb-16 text-lg">
          Comprehensive web solutions tailored to your business needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 border border-blue-500/20 hover:border-blue-500/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
