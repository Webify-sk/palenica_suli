
import React from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 'slivovica',
    name: 'Slivovica 52%',
    description: 'Tradičný destilát z neskorých odrôd sliviek s jemnou mandľovou dochuťou.',
    image: 'https://images.unsplash.com/photo-1596701062351-8a299373fefb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hruskovica',
    name: 'Hruškovica 45%',
    description: 'Vyrobená z odrody Williams, vyznačuje sa intenzívnou vôňou zrelých hrušiek.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'marhulovica',
    name: 'Marhuľovica 45%',
    description: 'Sladká vôňa marhuľového sadu uzavretá v každom poháriku.',
    image: 'https://images.unsplash.com/photo-1621272036047-bb0f76bbc1ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'borovicka',
    name: 'Borovička 40%',
    description: 'Náš národný poklad s výraznou arómou borievok z horských oblastí.',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=800'
  }
];

const ProductGallery: React.FC = () => {
  return (
    <section id="destiláty" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Naša Kolekcia</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Umenie uzavreté vo fľaši</h2>
            <p className="mt-4 text-stone-600 text-lg">
              Každý náš destilát prechádza trojstupňovou destiláciou a minimálne ročným odpočinkom v nerezových tankoch alebo dubových sudoch.
            </p>
          </div>
          <Link to="/kontakt" className="text-copper font-medium tracking-widest uppercase border-b-2 border-copper/30 pb-2 hover:border-copper transition-all">
            Celý cenník
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-8 transform transition-transform duration-500">
                <div className="w-12 h-[2px] bg-copper mb-4 transform origin-left transition-transform duration-500 scale-x-50 group-hover:scale-x-100"></div>
                <h3 className="text-2xl text-white font-serif mb-2">{product.name}</h3>
                <p className="text-stone-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {product.description}
                </p>
                <button className="mt-6 text-xs uppercase tracking-[0.2em] text-copper font-bold flex items-center gap-2">
                  Detaily produktu
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Distillery Vibe Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1516535794938-6063878f08cc?auto=format&fit=crop&q=80&w=1200" alt="Distillery environment" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center p-8 border border-white/20 backdrop-blur-sm bg-white/5 rounded-2xl">
                        <h4 className="text-white text-3xl font-serif mb-2">Srdce našej pálenice</h4>
                        <p className="text-white/80 uppercase tracking-widest text-xs">Moderná technológia v tradičnom šate</p>
                    </div>
                </div>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1594235212503-4f51e018693c?auto=format&fit=crop&q=80&w=800" alt="Plums" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-copper/40 to-stone-900/60 mix-blend-multiply"></div>
                <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-4xl font-serif mb-1 italic">Iba zrelé ovocie</p>
                    <p className="text-xs uppercase tracking-widest opacity-70">Základ každej poctivej fľaše</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
