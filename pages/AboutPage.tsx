import React, { useEffect } from 'react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Sekcia */}
        <div className="text-center mb-20 mt-10">
          <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">O Nás</span>
          <h1 className="text-5xl md:text-6xl text-stone-900 font-serif mb-6">
            Tradícia, ktorú <span className="text-copper italic">cítiť v každej kvapke</span>
          </h1>
          <p className="text-stone-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Sme rodinná pálenica s viac ako storočnou históriou. Naším poslaním je uchovávať poctivé remeslo našich predkov 
            a spájať ho s najmodernejšími technológiami pre dosiahnutie dokonalej čistoty a chuti.
          </p>
        </div>

        {/* História a Príbeh */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <img
              src="/73NJY1QsQxnfAceWdA6qRg.jpg"
              alt="História pálenice"
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-copper/10 rounded-full blur-3xl"></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Náš Príbeh</h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Všetko to začalo v roku 1923, keď môj pradedo postavil prvý malý medený kotol v našej záhrade. 
                Vtedy to nebolo o biznise, ale o radosti z úrody a o tom, ako ju uchovať v tej najlepšej podobe na zimu.
              </p>
              <p>
                Za tie roky sa zmenilo veľa – prešli sme od ohrevu drevom k presnej plynovej regulácii, staré drevené sudy 
                doplnili nerezové tanky, ale jedna vec zostala nemenná: náš rešpekt k ovociu. Veríme, že len trpezlivosť 
                a dôsledné dodržiavanie technologických postupov dokáže z kvasu vytiahnuť to najlepšie.
              </p>
              <div className="bg-copper/5 border-l-4 border-copper p-6 italic text-stone-700">
                "Dobrá pálenka nezačína v kotle, ale v sade. Aké ovocie do pálenice donesiete, takú radosť si z nej odnesiete."
              </div>
            </div>
          </div>
        </div>

        {/* Naša Technológia */}
        <div className="bg-stone-900 rounded-3xl p-10 md:p-20 text-white mb-24 relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Technológia</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Medené kotly a moderné riadenie</h2>
              <p className="text-stone-300 mb-8 leading-relaxed">
                Využívame modernú trojetážovú destilačnú kolónu vyrobenú z prémiovej medi. Meď je v procese destilácie 
                nenahraditeľná, pretože viaže nežiaduce zlúčeniny síry a pomáha formovať jemnú, ovocnú arómu.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-copper/20 rounded-full flex items-center justify-center text-copper shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Precízna kontrola teploty</h4>
                    <p className="text-stone-400 text-sm">Digitálne sledovanie každej fázy pálenia.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-copper/20 rounded-full flex items-center justify-center text-copper shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Vysoká čistota destilátu</h4>
                    <p className="text-stone-400 text-sm">Dokonalé oddelenie nežiaducich zložiek.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-copper/10 rounded-full flex items-center justify-center border border-copper/30">
                <div className="text-center p-8">
                  <p className="text-7xl font-serif text-copper mb-2">91°</p>
                  <p className="text-stone-400 uppercase tracking-widest text-xs">Maximálna čistota</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-copper/20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-copper/20 blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Náš Tím */}
        <div className="text-center mb-24">
          <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Ľudia za pálenou</span>
          <h2 className="text-4xl font-serif text-stone-900 mb-16">Naši Majstri</h2>
          <div className="grid md:grid-cols-1 gap-12 max-w-sm mx-auto">

            <div className="group">
              <div className="relative overflow-hidden rounded-3xl mb-6">
                <img src="/portrait-senior-man-holding-crate-full-apples-fruit-orchard.jpg" alt="Peter Kováč" className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <h3 className="text-2xl font-serif text-stone-900">Peter Kováč</h3>
              <p className="text-copper font-medium">Manažér výroby</p>
              <p className="text-stone-500 mt-4 text-sm px-6">
                Zabezpečuje plynulý chod prevádzky a komunikáciu so zákazníkmi, pričom sa učí tajomstvám remesla.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
