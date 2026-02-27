
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src="/interior-store-selling-iron-items.jpg"
          alt="Pálenica Tradícia - interiér"
          className="w-full h-full object-cover opacity-60"
          style={{
            animation: 'subtle-zoom 40s infinite alternate ease-in-out'
          }}
          onError={(e) => {
            // Fallback image in case of load error
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1516535794938-6063878f08cc?auto=format&fit=crop&q=80&w=2000";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/40 to-stone-950"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="inline-block mb-4">
          <span className="text-copper font-medium tracking-[0.4em] uppercase text-sm border-b border-copper/30 pb-2">Založené 1924</span>
        </div>
        <h1 className="text-5xl md:text-8xl text-white mb-6 leading-[1.1] drop-shadow-2xl">
          Umenie, ktoré <br /> <span className="text-copper italic">preteká</span> generáciami
        </h1>
        <p className="text-stone-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          Tradičné ovocné destiláty z regiónu Trenčín. Spájame storočnú receptúru s modernou precíznosťou v každej kvapke.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link to="/#rezervacia" className="bg-copper hover:bg-amber-700 text-white px-10 py-4 rounded-full text-lg transition-all shadow-[0_10px_30px_-10px_rgba(184,115,51,0.5)] font-medium">
            Rezervovať termín
          </Link>
          <Link to="/o-nas" className="bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white px-10 py-4 rounded-full text-lg transition-all">
            Viac o nás
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <div className="w-[1px] h-16 bg-gradient-to-b from-copper to-transparent"></div>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
