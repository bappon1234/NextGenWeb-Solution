import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Abhijit Das',
    role: 'CEO, Crypto Connect Trading',
    content: 'NextGen Web Solutions delivered an exceptional website for our trading platform. The dark theme design is premium and professional. Our clients are impressed by the UI/UX, and we\'ve seen significant increase in sign-ups. Highly recommended!',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Owner, The Ben Cafe',
    content: 'The Ben Cafe website created by NextGen Web Solutions is absolutely stunning! The dark premium aesthetic perfectly matches our brand identity. Their team was professional, timely, and understood our vision completely. Best investment for our business!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  },
  {
    name: 'Bappon Das',
    role: 'Founder, StyleHub Boutique',
    content: 'I needed an e-commerce website on a tight budget and timeline. NextGen delivered a beautiful, fast site with amazing dark theme design. My customers love shopping on it, and sales have doubled since launch!',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-blue-300 mb-16 text-lg">
          Real feedback from real businesses
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-blue-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
