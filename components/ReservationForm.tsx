import React from 'react';

const ReservationForm: React.FC = () => {
  // Pre Formspree nepotrebujeme useState, formulár sa odošle sám cez natívny HTML submit

  return (
    <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 shadow-xl">
      <h3 className="text-2xl font-serif mb-6 text-stone-900">Formulár rezervácie</h3>
      {/* 
        TODO: Zameň 'TVOJE_FORMSPREE_ID' za tvoje skutočné ID z formspree.io
      */}
      <form action="https://formspree.io/f/TVOJE_FORMSPREE_ID" method="POST" className="space-y-4">
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Meno a priezvisko</label>
          <input
            type="text"
            name="Meno"
            required
            className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-copper/20"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Telefón</label>
            <input
              type="tel"
              name="Telefon"
              required
              className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-copper/20"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Druh ovocia</label>
            <select
              name="Ovocie"
              className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-copper/20"
            >
              <option value="slivky">Slivky</option>
              <option value="hrusky">Hrušky</option>
              <option value="jablka">Jablká</option>
              <option value="marhule">Marhule</option>
              <option value="ine">Iné / Mix</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Množstvo (kg/l)</label>
            <input
              type="number"
              name="Mnozstvo"
              placeholder="napr. 200"
              className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-copper/20"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Preferovaný termín</label>
            <input
              type="date"
              name="Termin"
              className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-copper/20"
            />
          </div>
        </div>

        {/* Formspree špeciálne polia pre predmet emailu a podobne */}
        <input type="hidden" name="_subject" value="Nová rezervácia z webu!" />
        <input type="hidden" name="_captcha" value="false" />

        <button
          type="submit"
          className="w-full bg-copper hover:bg-amber-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-copper/20 mt-4"
        >
          Odoslať žiadosť o termín
        </button>
        <p className="text-[10px] text-stone-400 text-center italic mt-2">
          Odoslaním súhlasíte so spracovaním osobných údajov pre účely rezervácie.
        </p>
      </form>
    </div>
  );
};

export default ReservationForm;
