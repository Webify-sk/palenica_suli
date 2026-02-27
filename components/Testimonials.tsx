
import React from 'react';
import { Review } from '../types';

const REVIEWS: Review[] = [
  { id: 1, author: 'Peter Havran', rating: 5, text: 'Najlepšia slivovica široko-ďaleko. Čistá vôňa a neskutočná jemnosť. Vždy sa sem rád vraciam so svojím ovocím.', date: 'Október 2023' },
  { id: 2, author: 'Zuzana Marková', rating: 5, text: 'Vybavenie pálenice je na vysokej úrovni. Prístup majiteľa je profesionálny a ochotne poradia s prípravou kvasu.', date: 'September 2023' },
  { id: 3, author: 'Michal B.', rating: 4, text: 'Vynikajúce prostredie pre degustácie. Organizovali sme tu firemný teambuilding a všetci boli nadšení.', date: 'August 2023' },
];

const Testimonials: React.FC = () => {
  return (
    <section id="recenzie" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Spokojnosť</span>
          <h2 className="text-4xl md:text-5xl font-serif">Povedali o nás</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((r) => (
            <div key={r.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-stone-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < r.rating ? 'text-amber-500 fill-current' : 'text-stone-300'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-600 italic mb-6 leading-relaxed">"{r.text}"</p>
              <div className="flex justify-between items-center border-t border-stone-100 pt-4">
                <span className="font-medium text-stone-900">{r.author}</span>
                <span className="text-xs text-stone-400">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
