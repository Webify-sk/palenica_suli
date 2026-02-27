
import React from 'react';
import { Link } from 'react-router-dom';

const STEPS = [
  { num: '01', title: 'Dovoz ovocia', desc: 'Doveziete vaše zrelé ovocie alebo vopred pripravený kvas priamo k nám.' },
  { num: '02', title: 'Kontrola kvality', desc: 'Naši odborníci skontrolujú cukornatosť a kvalitu kvasu pre optimálny výsledok.' },
  { num: '03', title: 'Termín pálenia', desc: 'Dohodneme si presný čas, kedy bude váš kvas putovať do kotla.' },
  { num: '04', title: 'Destilácia', desc: 'Pomalé párenie s precíznym oddelením jadra od nežiaducich frakcií.' },
  { num: '05', title: 'Zlatý mok', desc: 'Odnášate si hotový, jemný destilát s nezameniteľnou vôňou.' }
];

const Process: React.FC = () => {
  return (
    <section id="proces" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Ako to prebieha</span>
          <h2 className="text-4xl md:text-5xl font-serif">Cesta od ovocia k destilátu</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-0 w-full h-[2px] bg-stone-100 -z-10"></div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="w-24 h-24 bg-white border border-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm relative z-10">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-copper text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">1</span>
                <svg className="w-10 h-10 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">Dovoz ovocia</h3>
              <p className="text-stone-500 text-sm leading-relaxed px-2">Doveziete vaše zrelé ovocie alebo vopred pripravený kvas priamo k nám.</p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="w-24 h-24 bg-white border border-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm relative z-10">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-copper text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">2</span>
                <svg className="w-10 h-10 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">Kontrola kvality</h3>
              <p className="text-stone-500 text-sm leading-relaxed px-2">Naši odborníci skontrolujú cukornatosť a kvalitu kvasu.</p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="w-24 h-24 bg-white border border-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm relative z-10">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-copper text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">3</span>
                <svg className="w-10 h-10 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">Termín pálenia</h3>
              <p className="text-stone-500 text-sm leading-relaxed px-2">Dohodneme si presný čas, kedy budeme destilovať.</p>
            </div>

            {/* Step 4 */}
            <div className="relative text-center">
              <div className="w-24 h-24 bg-white border border-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm relative z-10">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-copper text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">4</span>
                <svg className="w-10 h-10 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14h2" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">Destilácia</h3>
              <p className="text-stone-500 text-sm leading-relaxed px-2">Pomalé párenie s precíznym oddelením jadra.</p>
            </div>

            {/* Step 5 */}
            <div className="relative text-center">
              <div className="w-24 h-24 bg-white border border-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm relative z-10">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-copper text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">5</span>
                <svg className="w-10 h-10 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">Zlatý mok</h3>
              <p className="text-stone-500 text-sm leading-relaxed px-2">Odnášate si hotový, jemný destilát s nezameniteľnou vôňou.</p>
            </div>

          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/#rezervacia" className="inline-flex items-center gap-2 text-copper font-medium hover:text-amber-700 transition-colors border-b border-copper hover:border-amber-700 pb-1">
            Rezervovať termín pálenia
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Process;
