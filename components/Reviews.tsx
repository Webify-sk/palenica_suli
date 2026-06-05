
import React from 'react';

const reviews = [
    {
        name: "Marek H.",
        rating: 5,
        text: "Pálim tu už piaty rok a kvalita je vždy rovnaká - vynikajúca. Majstrov prístup je neoceniteľný, poradil mi aj s kvasom.",
        date: "Október 2024"
    },
    {
        name: "Zuzana P.",
        rating: 5,
        text: "Pálenka na kľúč bola skvelá voľba. Ovocie sme len odovzdali a o celý proces kvasenia a destilácie sa postarali u nich. My sme si už len prevzali hotový čistý destilát. Skvelý darček pre otca.",
        date: "Január 2025"
    },
    {
        name: "Ján K.",
        rating: 5,
        text: "Najlepšia pálenica v celom okolí. Čistota, moderná technológia a hlavne poctivá chuť. Odporúčam každému záhradkárovi.",
        date: "November 2024"
    }
];

const Reviews: React.FC = () => {
    return (
        <section id="recenzie" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Recenzie</span>
                    <h2 className="text-4xl md:text-5xl font-serif">Čo o nás hovoria naši zákazníci</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex text-amber-500 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-stone-700 italic mb-8 leading-relaxed">
                                "{review.text}"
                            </p>
                            <div className="flex items-center justify-between border-t border-stone-200 pt-6">
                                <p className="font-bold text-stone-900">{review.name}</p>
                                <p className="text-sm text-stone-500">{review.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-stone-400 text-sm">Pridajte sa k stovkám spokojných zákazníkov</p>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
