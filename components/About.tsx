
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="o-nás" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-copper/5 rounded-full blur-3xl"></div>
            <img
              src="/portrait-senior-man-holding-crate-full-apples-fruit-orchard.jpg"
              alt="Majster destilatér s jablkami"
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-copper text-white p-8 rounded-2xl z-20 shadow-xl hidden lg:block">
              <p className="text-4xl font-serif mb-1">100+</p>
              <p className="text-xs uppercase tracking-widest opacity-80">Rokov skúseností</p>
            </div>
          </div>

          <div>
            <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">História a Tradícia</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Viac ako len pálenica, sme strážcami remesla</h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                Naša cesta sa začala v srdci slovenských ovocných sadov. Odjakživa sme verili, že kvalitný destilát nie je výsledkom náhody, ale trpezlivosti a porozumenia prírode.
              </p>
              <p>
                Používame tradičné medené dvojplášťové kotly, ktoré umožňujú ovociu odovzdať svoju najčistejšiu esenciu. Každý krok procesu, od výberu zrelého ovocia až po finálnu destiláciu, podlieha prísnemu dozoru nášho majstra.
              </p>
              <div className="pt-4 flex items-center gap-6">
                <div>
                  <p className="font-serif text-2xl text-stone-900">Milan Kováč</p>
                  <p className="text-sm text-stone-500 italic">Hlavný destilatér</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
