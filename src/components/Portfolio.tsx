import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'The Ben Cafe',
    category: 'Cafe Website',
    description: 'Premium dark theme website for an upscale cafe with menu showcase, online booking, and gallery. Modern design with smooth animations and excellent user experience.',
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Crypto Connect Trading',
    category: 'Trading Platform',
    description: 'Professional cryptocurrency trading platform with dark premium UI/UX design. Features real-time data, secure authentication, and responsive dashboard for traders.',
    image: 'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'StyleHub Boutique',
    category: 'E-commerce Store',
    description: 'Full-featured online fashion store with premium dark theme design, payment gateway integration, and beautiful product showcase with smooth interactions.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Our Portfolio
        </h2>
        <p className="text-center text-blue-300 mb-16 text-lg">
          Recent projects we're proud of
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/50"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all">
                    View Project <ExternalLink size={18} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-blue-400 font-semibold text-sm">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
