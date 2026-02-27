import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Sekcia */}
        <div className="text-center mb-20 mt-10">
          <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Naše služby</span>
          <h1 className="text-5xl md:text-6xl text-stone-900 font-serif mb-6">
            Z vášho kvasu <span className="text-copper italic">to najlepšie</span>
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Ponúkame tradičné pestovateľské pálenie a prémiovú službu pálenia na kľúč pre tých najnáročnejších. 
            Spojenie dlhoročných skúseností a modernej technológie zaisťuje výnimočný výsledok v každom poháriku.
          </p>
        </div>

        {/* 1. Služba: Pestovateľské pálenie */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-16 flex flex-col md:flex-row">
          <div className="md:w-1/2 relative min-h-[400px]">
            <img 
              src="/plums-36418301920.jpg" 
              alt="Pestovateľské pálenie" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Pestovateľské pálenie</h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Prineste nám svoj kvas a my z neho urobíme prvotriedny destilát. Naša technológia medených kotlov so 
              starostlivou kontrolou teploty zaisťuje tú najčistejšiu vôňu a chuť vášho ovocia.
              Každému kvasu venujeme individuálny prístup od plnenia až po stáčanie.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-copper/10 rounded-full flex items-center justify-center text-copper shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-stone-700">Minimálne množstvo kvasu už od 100 litrov</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-copper/10 rounded-full flex items-center justify-center text-copper shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-stone-700">Frakčná destilácia s presným oddelením rôznych častí destilátu</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-copper/10 rounded-full flex items-center justify-center text-copper shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-stone-700">Riedenie destilátu pramenitou vodou na Vami požadovanú stupňovitosť</span>
              </li>
            </ul>
            <Link to="/#cenník" className="text-copper font-medium hover:text-amber-700 transition flex items-center gap-2">
              Pozrieť cenník
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>

        {/* 2. Služba: Pálenka na kľúč */}
        <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-2xl mb-16 flex flex-col md:flex-row-reverse text-white">
          <div className="md:w-1/2 relative min-h-[400px]">
            <img 
              src="/closeup-shot-bottles-tequila-black-background.jpg" 
              alt="Pálenka na kľúč" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-3 block">Prémiová služba</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Pálenka na kľúč</h2>
            <p className="text-stone-300 mb-8 leading-relaxed">
              Nemáte vlastné ovocie, ale túžite po kvalitnom destiláte s etiketou vášho mena, pre vašu firmu alebo na rodinnú 
              oslavu či svadbu? Náš majster destilatér zabezpečí a spracuje prvotriedne ovocie a dodá vám hotový produkt.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <h4 className="text-xl font-serif text-copper mb-2">Výber ovocia</h4>
                <p className="text-stone-400 text-sm">Lokálne ovocie tej najvyššej kvality</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <h4 className="text-xl font-serif text-copper mb-2">Celý proces</h4>
                <p className="text-stone-400 text-sm">Zakvasenie, destilácia a odležanie</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <h4 className="text-xl font-serif text-copper mb-2">Fľašovanie</h4>
                <p className="text-stone-400 text-sm">Stočenie do vybraných prémiových fliaš</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <h4 className="text-xl font-serif text-copper mb-2">Vaša etiketa</h4>
                <p className="text-stone-400 text-sm">Návrh a tlač personalizovanej etikety</p>
              </div>
            </div>
            <Link to="/#kontakt" className="bg-copper hover:bg-amber-700 text-white px-8 py-3 rounded-full text-base transition-all shadow-lg font-medium w-fit">
              Dohodnúť konzultáciu
            </Link>
          </div>
        </div>

        {/* Zabezpečte si svoj termín */}
        <div className="text-center bg-copper/5 rounded-3xl p-12 md:p-20 border border-copper/20">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Ste pripravení na pálenie?</h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Hľadáte voľný termín alebo sa potrebujete poradiť o príprave vášho kvasu? 
            Vyplňte náš rezervačný formulár a postaráme sa o vás.
          </p>
          <Link to="/#rezervacia" className="bg-stone-900 hover:bg-stone-800 text-white px-10 py-4 rounded-full text-lg transition-all shadow-lg font-medium inline-block">
            Prejsť na rezerváciu
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
