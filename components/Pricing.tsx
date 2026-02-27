
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
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-6 text-stone-400 uppercase text-xs tracking-widest">Služba</th>
                <th className="p-6 text-stone-400 uppercase text-xs tracking-widest text-right">Cena</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="p-6">Pálenie (liter 50% destilátu) <br/><span className="text-xs text-stone-500">Vrátane spotrebnej dane a DPH</span></td>
                <td className="p-6 text-right font-serif text-2xl text-copper">9.50 €</td>
              </tr>
              <tr>
                <td className="p-6">Príprava kvasu (drvenie/odkôstkovanie)</td>
                <td className="p-6 text-right font-serif text-xl">1.20 € / 100kg</td>
              </tr>
              <tr>
                <td className="p-6">Uskladnenie v našich tankoch (1 mesiac)</td>
                <td className="p-6 text-right font-serif text-xl">ZADARMO</td>
              </tr>
              <tr>
                <td className="p-6">Riedenie a čistenie destilátu</td>
                <td className="p-6 text-right font-serif text-xl">V CENE</td>
              </tr>
            </tbody>
          </table>
          <div className="p-8 bg-copper/10 border-t border-white/10">
            <p className="text-sm text-stone-300 italic">
              * Minimálne množstvo na jeden kotol je 150 litrov kvasu. Pri menšom množstve sa účtuje individuálny doplatok.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
