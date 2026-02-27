
import React, { useState } from 'react';

const FAQS = [
  { q: 'Koľko ovocia treba na 1 liter pálenky?', a: 'Závisí to od cukornatosti ovocia. Priemerne však na 1 liter 50% destilátu potrebujete 8-12 kg ovocia.' },
  { q: 'Môžem priniesť len kvas?', a: 'Áno, prijímame hotové kvasy, ale ponúkame aj možnosť spracovania vášho čerstvého ovocia u nás.' },
  { q: 'Kedy prebieha hlavná sezóna pálenia?', a: 'Sezóna začína v auguste (marhule, skoré slivky) a trvá až do decembra alebo januára (neskoré jablká a hrušky).' },
  { q: 'Ako dlho trvá proces pálenia?', a: 'Samotná destilácia jedného kotla trvá približne 2.5 až 3 hodiny v závislosti od typu ovocia.' }
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-stone-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Často kladené otázky</h2>
          <p className="text-stone-500">Všetko, čo potrebujete vedieť pred vašou návštevou.</p>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-stone-50 transition-colors"
              >
                <span className="font-bold text-stone-800">{faq.q}</span>
                <svg className={`w-5 h-5 text-copper transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="p-6 pt-0 text-stone-600 border-t border-stone-50 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
