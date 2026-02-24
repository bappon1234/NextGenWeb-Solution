import { Check, MessageCircle } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '4,999',
    description: 'Perfect for startups and small businesses',
    features: [
      'Up to 5 Pages',
      'Mobile Responsive',
      'Basic SEO Setup',
      'Contact Form',
      'Social Media Links',
      '1 Month Support'
    ],
    popular: false
  },
  {
    name: 'Standard',
    price: '9,999',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 10 Pages',
      'Mobile Responsive',
      'Advanced SEO',
      'Contact & Booking Forms',
      'Google Analytics',
      'CMS Integration',
      '1 Month Support'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: '14,999+',
    description: 'Complete solution for established businesses',
    features: [
      'Unlimited Pages',
      'E-commerce Ready',
      'Premium SEO Package',
      'Payment Gateway',
      'Custom Features',
      'Priority Support',
      '3 Months Support'
    ],
    popular: false
  }
];

export default function Pricing() {
  const whatsappNumber = "917896511004";

  const getWhatsappUrl = (plan: string) => {
    const message = `Hi, I'm interested in the ${plan} plan. Please provide more details.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Transparent Pricing
        </h2>
        <p className="text-center text-blue-300 mb-16 text-lg">
          Choose the perfect plan for your business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                plan.popular
                  ? 'ring-4 ring-blue-500 scale-105 border-blue-500/50'
                  : 'border-blue-500/20 hover:border-blue-500/50'
              }`}
            >
              {plan.popular && (
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-3xl font-bold text-white mt-4 mb-2">{plan.name}</h3>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">₹{plan.price}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={16} className="text-green-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsappUrl(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/50'
                    : 'bg-slate-700 text-white hover:bg-slate-600 border border-blue-500/30'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
