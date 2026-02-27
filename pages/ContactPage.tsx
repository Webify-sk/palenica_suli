import React, { useEffect } from 'react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20 mt-10">
          <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Kontakt</span>
          <h1 className="text-5xl md:text-6xl text-stone-900 font-serif mb-6">
            Tešíme sa na <span className="text-copper italic">vašu návštevu</span>
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Nájdete nás v srdci trenčianskeho kraja. Či už nesiete kvas, alebo sa chcete len poradiť, 
            naše dvere sú pre milovníkov poctivého remesla vždy otvorené.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Contact Info & Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif text-stone-900 mb-8">Napíšte nám</h2>
            
            <form className="space-y-6 mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-500 mb-2 uppercase tracking-widest">Meno</label>
                  <input type="text" placeholder="Vaše meno" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-copper/20" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-500 mb-2 uppercase tracking-widest">Email</label>
                  <input type="email" placeholder="vas@email.com" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-copper/20" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-500 mb-2 uppercase tracking-widest">Predmet</label>
                <input type="text" placeholder="O čo ide?" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-copper/20" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-500 mb-2 uppercase tracking-widest">Správa</label>
                <textarea placeholder="Vaša správa..." rows={5} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-copper/20"></textarea>
              </div>
              <button className="bg-copper text-white w-full py-5 rounded-xl font-bold hover:bg-amber-700 transition-all shadow-lg shadow-copper/20 text-lg">Odoslať správu</button>
            </form>

            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-stone-100">
              <div>
                <h4 className="font-bold text-stone-900 mb-3 flex items-center gap-2 text-copper">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Zavolajte nám
                </h4>
                <p className="text-stone-600 text-lg">+421 905 123 456</p>
                <p className="text-stone-400 text-sm">Po - Pi: 08:00 - 17:00</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 mb-3 flex items-center gap-2 text-copper">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Napíšte email
                </h4>
                <p className="text-stone-600 text-lg">info@palenicatradicia.sk</p>
                <p className="text-stone-400 text-sm">Odpovieme do 24 hodín</p>
              </div>
            </div>
          </div>

          {/* Map & Location */}
          <div className="sticky top-28 space-y-8">
            <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41885.6433580554!2d18.0179929!3d48.8911295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714d2466f2864eb%3A0xa624b45781a5390c!2zVHJlbsSNw61u!5e0!3m2!1ssk!2ssk!4v1700000000000!5m2!1ssk!2ssk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Mapa Pálenica Tradícia"
                className="grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
            <div className="bg-stone-900 text-white rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Pálenica Tradícia</h3>
                <p className="text-stone-400">Slobody 123, 911 01 Trenčín</p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-copper hover:bg-amber-700 text-white px-8 py-3 rounded-xl transition-all font-bold whitespace-nowrap"
              >
                Navigovať k nám
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
