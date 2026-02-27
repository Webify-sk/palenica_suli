import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const priceItems = [
    {
      category: 'Pestovateľské pálenie',
      items: [
        { name: 'Pálenie (liter 50% destilátu)', price: '8.50 €', note: 'Vrátane spotrebnej dane' },
        { name: 'Riedenie a čistenie', price: 'V cene', note: 'Zahrnuté v základnom poplatku' },
        { name: 'Odber výpalkov', price: 'Zadarmo', note: 'Možnosť vlastného odberu' },
      ]
    },
    {
      category: 'Doplnkové služby',
      items: [
        { name: 'Zapožičanie nádob na kvas (50l / 120l)', price: '2.00 €', note: 'Poplatok za kus na sezónu' },
        { name: 'Mletie / Drvenie ovocia', price: '0.05 € / kg', note: 'Pri dovoze celého ovocia' },
        { name: 'Meranie cukornatosti', price: 'Zadarmo', note: 'Pre našich zákazníkov' },
      ]
    },
    {
      category: 'Pálenka na kľúč',
      items: [
        { name: 'Kompletný servis (liter)', price: 'individuálne', note: 'Závisí od druhu ovocia a fliaš' },
        { name: 'Vlastná etiketa (návrh + tlač)', price: 'od 15.00 €', note: 'Jednorazový poplatok' },
        { name: 'Darčekové balenie', price: 'od 3.00 €', note: 'Podľa vybraného obalu' },
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20 mt-10">
          <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Cenník</span>
          <h1 className="text-5xl md:text-6xl text-stone-900 font-serif mb-6">
            Transparentné ceny <span className="text-copper italic">bez skrytých poplatkov</span>
          </h1>
          <p className="text-stone-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Naším cieľom je poskytovať špičkové služby za férové ceny. Nižšie nájdete prehľad poplatkov za pestovateľské 
            pálenie aj doplnkový servis. Ceny sú konečné vrátane legislatívnych daní.
          </p>
        </div>

        {/* Pricing Tables */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {priceItems.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 flex flex-col h-full">
              <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mb-8 pb-4 border-b border-stone-100">{cat.category}</h2>
              <div className="space-y-6 flex-1">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row justify-between sm:items-end gap-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-stone-900">{item.name}</h4>
                      <p className="text-stone-500 text-sm italic">{item.note}</p>
                    </div>
                    <div className="text-copper font-serif text-2xl whitespace-nowrap">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Special info box */}
          <div className="bg-copper rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col justify-center relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-3xl font-serif mb-6 leading-tight">Máte väčšie množstvo kvasu?</h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Pri objemoch nad 1000 litrov ponúkame individuálne cenové podmienky a prednostné plánovanie termínov. 
                Neváhajte nás kontaktovať pre vypracovanie ponuky na mieru.
              </p>
              <Link to="/#rezervacia" className="bg-white text-copper hover:bg-stone-900 hover:text-white px-8 py-4 rounded-full text-lg transition-all shadow-lg font-medium inline-block">
                Zistiť viac
              </Link>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        </div>

        {/* Legislation info */}
        <div className="bg-stone-100 rounded-3xl p-8 md:p-12 border border-stone-200 mb-20">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-16 h-16 bg-stone-900 text-copper rounded-full flex items-center justify-center shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-stone-900 text-left">Dôležité informácie a dane</h4>
              <p className="text-stone-600 leading-relaxed text-sm">
                V zmysle platnej legislatívy SR je pestovateľ povinný pri výrobe destilátu zaplatiť spotrebnú daň z liehu. 
                Sadzba dane je zákonom stanovená a my ju za vás v plnej výške odvádzame štátu. Maximálny limit pre jedno 
                pestovateľské obdobie a jednu domácnosť je 43 litrov 100% alkoholu (čo zodpovedá 86 litrom 50% destilátu) 
                so zníženou sadzbou dane. Pri prekročení tohto limitu sa uplatňuje plná sadzba spotrebnej dane.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-stone-900 mb-8">Potrebujete presnú kalkuláciu?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#kontakt" className="bg-stone-900 hover:bg-stone-800 text-white px-10 py-4 rounded-full text-lg transition-all shadow-lg font-medium">
              Kontaktovať nás
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PricingPage;
