
import React from 'react';
import { Link } from 'react-router-dom';

const CustomDistillation: React.FC = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-stone-900 group">
            {/* Background with parallax-like effect */}
            <div className="absolute inset-0">
                <img
                    src="/closeup-shot-bottles-tequila-black-background.jpg"
                    alt="Pálenka na kľúč"
                    className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/60 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="max-w-2xl">
                    <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Prémiová služba</span>
                    <h2 className="text-4xl md:text-6xl text-white mb-8 leading-tight font-serif">
                        Pálenka <span className="text-copper italic">na kľúč</span>
                    </h2>
                    <p className="text-stone-300 text-xl mb-10 leading-relaxed font-light">
                        Kompletné zabezpečenie od výberu prvotriedneho ovocia, cez riadené kvasenie až po samotnú destiláciu. Radi sa postaráme o celý proces za vás.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/kontakt" className="bg-copper hover:bg-amber-700 text-white px-10 py-4 rounded-full text-lg transition-all shadow-lg font-medium inline-block">
                            Mám záujem
                        </Link>
                        <div className="flex items-center gap-6 px-4">
                            <div className="text-white/80">
                                <p className="text-2xl font-serif">Kvalita</p>
                                <p className="text-[10px] uppercase tracking-widest opacity-60">Bez kompromisov</p>
                            </div>
                            <div className="w-[1px] h-10 bg-white/20"></div>
                            <div className="text-white/80">
                                <p className="text-2xl font-serif">Tradícia</p>
                                <p className="text-[10px] uppercase tracking-widest opacity-60">S moderným prístupom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle decorative element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-copper/5 skew-x-12 translate-x-1/2 blur-3xl"></div>
        </section>
    );
};

export default CustomDistillation;
