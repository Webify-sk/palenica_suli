import React, { useState, useEffect } from 'react';

const FAQPage: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const categories = [
    {
      name: 'Príprava kvasu',
      items: [
        { q: 'Aké ovocie je najvhodnejšie na pálenie?', a: 'Najlepšie výsledky dosiahnete s ovocím, ktoré je plne dozreté, čisté a bez hniloby. Najčastejšie sa pália slivky, jablká, hrušky, marhule a čerešne.' },
        { q: 'Koľko cukru môžem pridať do kvasu?', a: 'V zmysle zákona o pestovateľskom pálení sa kvas nesmie prisladzovať repným cukrom ani inými náhradami. Kvalitný destilát vzniká len z prirodzených cukrov obsiahnutých v ovocí.' },
        { q: 'Ako spoznám, že kvas je už vykvasený?', a: 'Vykvasený kvas prestáva šumieť, "deka" (ovocný koláč na vrchu) klesá ku dnu a šťava má čistú, nesladkú chuť. Odporúčame premerať cukornatosť refraktometrom u nás.' }
      ]
    },
    {
      name: 'Proces pálenia',
      items: [
        { q: 'Koľko ovocia treba na 1 liter pálenky?', a: 'Závisí to od cukornatosti ovocia. Priemerne však na 1 liter 50% destilátu potrebujete 8-12 kg ovocia (napríklad pri slivkách).' },
        { q: 'Ako dlho trvá samotné pálenie?', a: 'Proces v jednom kotli (cca 250-300 litrov kvasu) trvá približne 2,5 až 3 hodiny. Výsledkom je hotový destilát pripravený na riedenie.' },
        { q: 'Môžem byť prítomný pri pálení?', a: 'Áno, naši zákazníci sú vítaní a môžu sledovať celý proces destilácie svojho kvasu priamo v prevádzke.' }
      ]
    },
    {
      name: 'Legislatíva a Dane',
      items: [
        { q: 'Aký je limit na pálenie pre jednu domácnosť?', a: 'Limit pre zníženú sadzbu spotrebnej dane je 43 litrov čistého (100%) alkoholu na jednu domácnosť a jedno výrobné obdobie.' },
        { q: 'Musím niekde pálenie nahlasovať?', a: 'Nie, všetky administratívne záležitosti a odvod dane štátu vybavíme za vás priamo v pálenici.' }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20 mt-10">
          <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Pomoc a informácie</span>
          <h1 className="text-5xl md:text-6xl text-stone-900 font-serif mb-6">
            Často kladené <span className="text-copper italic">otázky</span>
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Pripravili sme pre vás odpovede na najčastejšie otázky ohľadom prípravy kvasu, procesu pálenia 
            aj platnej legislatívy. Ak tu nenájdete čo hľadáte, neváhajte nás kontaktovať.
          </p>
        </div>

        {/* Categories and FAQs */}
        <div className="space-y-16">
          {categories.map((cat, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-2xl font-serif text-stone-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-copper"></span>
                {cat.name}
              </h2>
              <div className="space-y-4">
                {cat.items.map((faq, i) => {
                  const globalIdx = catIdx * 100 + i;
                  return (
                    <div key={i} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                      <button 
                        onClick={() => setOpen(open === globalIdx ? null : globalIdx)}
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-stone-50 transition-colors"
                      >
                        <span className="font-bold text-stone-800 pr-8">{faq.q}</span>
                        <svg className={`w-5 h-5 text-copper transition-transform shrink-0 ${open === globalIdx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {open === globalIdx && (
                        <div className="p-6 pt-0 text-stone-600 border-t border-stone-50 leading-relaxed bg-stone-50/30">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQPage;
