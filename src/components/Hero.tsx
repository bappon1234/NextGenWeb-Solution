import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = "917896511004";
  const whatsappMessage = "Hi, I'd like to get a free consultation for my website project.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white pt-40 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Premium Web Solutions
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
          We Build High-Converting<br />Websites for Your Business
        </h1>
        <p className="text-xl md:text-2xl text-blue-300 mb-4 font-semibold">
          Affordable • Fast Delivery • Mobile Responsive
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform your business with premium, professional websites that drive real results
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl hover:shadow-green-500/50"
        >
          <MessageCircle size={24} />
          Get Free Consultation
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
