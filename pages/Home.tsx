import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import ReservationForm from '../components/ReservationForm';
import CustomDistillation from '../components/CustomDistillation';
import Reviews from '../components/Reviews';
import MapSection from '../components/MapSection';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <main>
        <About />

        <section className="py-20 bg-stone-100 border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-copper rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-copper/20 transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Moderná technológia</h4>
              <p className="text-stone-500 text-sm">Medené kotly s najmodernejším riadením teploty.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-copper rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-copper/20 transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Absolútna čistota</h4>
              <p className="text-stone-500 text-sm">Dôraz na hygienu a precízne oddelenie hlavy a chvosta.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-copper rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-copper/20 transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Poctivé remeslo</h4>
              <p className="text-stone-500 text-sm">Sto rokov tradície v každom jednom litri.</p>
            </div>
          </div>
        </section>

        <Services />
        <CustomDistillation />
        <Process />
        <Reviews />
        <Pricing />

        <section id="rezervacia" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Rezervácia</span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-serif">Zabezpečte si svoj termín včas</h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                Hlavná sezóna pálenia prebieha od augusta do decembra. Odporúčame rezerváciu aspoň 2 týždne vopred, najmä pri väčších množstvách kvasu. Rezervácie prijímame výhradne telefonicky pre najrýchlejšie zladenie termínov.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-stone-700">
                  <div className="w-8 h-8 bg-copper/10 rounded-full flex items-center justify-center text-copper">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span>Garantovaný termín po potvrdení</span>
                </div>
                <div className="flex items-center gap-4 text-stone-700">
                  <div className="w-8 h-8 bg-copper/10 rounded-full flex items-center justify-center text-copper">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span>Možnosť zapožičania nádob na kvas</span>
                </div>
                <div className="flex items-center gap-4 text-stone-700">
                  <div className="w-8 h-8 bg-copper/10 rounded-full flex items-center justify-center text-copper">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span>Bezplatná konzultácia kvality kvasu</span>
                </div>
              </div>
            </div>
            <ReservationForm />
          </div>
        </section>

        <FAQ />
        <MapSection />
      </main>
    </>
  );
};

export default Home;
