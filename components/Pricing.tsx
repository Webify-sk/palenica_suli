
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="cenník" className="py-24 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Transparentnosť</span>
          <h2 className="text-4xl md:text-5xl font-serif">Cenník služieb</h2>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="hidden sm:grid grid-cols-[1fr_auto] border-b border-white/10 bg-white/5">
            <div className="p-6 text-stone-400 uppercase text-xs tracking-widest">Služba</div>
            <div className="p-6 text-stone-400 uppercase text-xs tracking-widest text-right">Cena</div>
          </div>
          
          <div className="divide-y divide-white/5">
            <div className="p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div>
                <p className="text-white font-medium">Pálenie (liter 50% destilátu)</p>
                <p className="text-xs text-stone-500">Vrátane spotrebnej dane a DPH</p>
              </div>
              <div className="text-copper font-serif text-2xl">9.50 €</div>
            </div>
            
            <div className="p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <p className="text-white font-medium">Príprava kvasu <span className="block text-xs font-normal text-stone-500 mt-1">(drvenie/odkôstkovanie)</span></p>
              <div className="font-serif text-xl">1.20 € <span className="text-sm font-sans text-stone-400">/ 100kg</span></div>
            </div>
            
            <div className="p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <p className="text-white font-medium">Uskladnenie v našich tankoch <span className="block text-xs font-normal text-stone-500 mt-1">(1 mesiac)</span></p>
              <div className="font-serif text-xl">ZADARMO</div>
            </div>
            
            <div className="p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <p className="text-white font-medium">Riedenie a čistenie destilátu</p>
              <div className="font-serif text-xl">V CENE</div>
            </div>
          </div>

          <div className="p-8 bg-copper/5 border-t border-white/10">
            <p className="text-sm text-stone-400 italic leading-relaxed">
              * Minimálne množstvo na jeden kotol je 150 litrov kvasu. Pri menšom množstve sa účtuje individuálny doplatok.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
