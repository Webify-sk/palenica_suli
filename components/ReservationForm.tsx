import React from 'react';

const ReservationForm: React.FC = () => {
  return (
    <div className="bg-stone-900 text-white p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-copper/10 blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
      
      <h3 className="text-2xl font-serif mb-6 text-copper relative z-10">Rezervácia termínu</h3>
      
      <p className="text-stone-300 text-sm mb-8 leading-relaxed relative z-10">
        Rezervácie na pálenie a bezplatné konzultácie ohľadom kvasu prijímame <strong>výhradne telefonicky</strong>. Vzhľadom na vyťaženosť a potrebu presného naplánovania tak vieme okamžite dohodnúť vyhovujúci čas.
      </p>

      <div className="space-y-4 relative z-10">
        <a 
          href="tel:0908054439" 
          className="flex items-center gap-4 bg-white/5 hover:bg-copper/20 border border-white/10 hover:border-copper/40 p-5 rounded-2xl transition-all group/item"
        >
          <div className="w-12 h-12 bg-copper/20 rounded-xl flex items-center justify-center text-copper group-hover/item:bg-copper group-hover/item:text-white transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-400">Kontakt 1</p>
            <p className="text-xl font-bold font-serif text-white mt-0.5">0908 05 44 39</p>
          </div>
        </a>

        <a 
          href="tel:0908661160" 
          className="flex items-center gap-4 bg-white/5 hover:bg-copper/20 border border-white/10 hover:border-copper/40 p-5 rounded-2xl transition-all group/item"
        >
          <div className="w-12 h-12 bg-copper/20 rounded-xl flex items-center justify-center text-copper group-hover/item:bg-copper group-hover/item:text-white transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-400">Kontakt 2</p>
            <p className="text-xl font-bold font-serif text-white mt-0.5">0908 66 11 60</p>
          </div>
        </a>
      </div>

      <p className="text-[11px] text-stone-400 text-center italic mt-6 relative z-10">
        Volajte v pracovné dni od 08:00 do 17:00.
      </p>
    </div>
  );
};

export default ReservationForm;
