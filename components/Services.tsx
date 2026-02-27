
import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Pestovateľské pálenie',
    description: 'Spracovanie vášho vlastného kvasu v našich tradičných medených kotloch pod dohľadom skúseného majstra destilatéra. Garantujeme najvyššiu kvalitu a výťažnosť.',
    imageUrl: '/plums-36418301920.jpg'
  }
];

const Services: React.FC = () => {
  return (
    <section id="služby" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Naša Služba</span>
          <h2 className="text-4xl md:text-5xl font-serif">Tradičné pálenie</h2>
        </div>

        <div className="flex justify-center">
          {SERVICES.map((s) => (
            <div key={s.id} className="group relative overflow-hidden rounded-3xl h-[600px] w-full max-w-2xl shadow-2xl">
              <img
                src={s.imageUrl}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent flex flex-col justify-end p-12">
                <h3 className="text-4xl md:text-5xl mb-6 text-amber-50 font-serif leading-tight">{s.title}</h3>
                <p className="text-stone-300 text-lg leading-relaxed mb-8">
                  {s.description}
                </p>
                <Link to="/#rezervacia" className="bg-copper hover:bg-amber-700 text-white px-10 py-4 rounded-full text-lg transition-all shadow-lg font-medium w-fit">
                  Rezervovať termín
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
