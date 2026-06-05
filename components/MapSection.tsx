
import React from 'react';

const MapSection: React.FC = () => {
    return (
        <section id="mapa" className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-1">
                        <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Lokalita</span>
                        <h2 className="text-3xl md:text-4xl mb-6 font-serif leading-tight">Kde nás <span className="text-copper italic">nájdete</span></h2>
                        <p className="text-stone-600 mb-8 leading-relaxed">
                            Naša pálenica sa nachádza v tichom prostredí obce Kamenný Most, s výbornou dostupnosťou a možnosťou parkovania priamo v areáli.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-copper/10 rounded-full flex items-center justify-center text-copper shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-stone-900">Adresa</p>
                                    <p className="text-stone-600">Kamenný Most čd56, 943 58</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-copper/10 rounded-full flex items-center justify-center text-copper shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-stone-900">Otváracie hodiny</p>
                                    <p className="text-stone-600">Po - Pi: 08:00 - 17:00</p>
                                    <p className="text-stone-600">So: 08:00 - 12:00 (sezónne)</p>
                                </div>
                            </div>
                        </div>
                        <a
                            href="https://maps.google.com/maps?q=Kamenný%20Most%2056,%20943%2058,%20Slovensko"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-10 inline-flex items-center gap-2 text-copper font-bold hover:gap-4 transition-all"
                        >
                            Navigovať k nám
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                    </div>

                    <div className="md:col-span-2 h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
                        {/* Embedded Google Map */}
                        <iframe
                            src="https://maps.google.com/maps?q=Kamenný%20Most%2056,%20943%2058,%20Slovensko&t=&z=14&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa Pálenica Tradícia"
                            className="grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
