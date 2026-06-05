
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Spojte sa s nami</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Kde nás nájdete</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Adresa</h4>
                  <p className="text-stone-500">Pálenica Tradícia, Kamenný Most čd56<br/>943 58 Kamenný Most, Slovensko</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Telefón</h4>
                  <p className="text-stone-500">
                    <a href="tel:0908054439" className="hover:text-copper transition-colors">0908 05 44 39</a><br/>
                    <a href="tel:0908661160" className="hover:text-copper transition-colors">0908 66 11 60</a>
                  </p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Meno" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-copper/20" />
                <input type="email" placeholder="Email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-copper/20" />
              </div>
              <textarea placeholder="Vaša správa..." rows={4} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-copper/20"></textarea>
              <button className="bg-copper text-white w-full py-4 rounded-xl font-bold hover:bg-amber-700 transition-colors shadow-lg shadow-copper/20">Odoslať správu</button>
            </form>
          </div>

          <div className="h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://maps.google.com/maps?q=Kamenný%20Most%2056,%20943%2058,%20Slovensko&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
