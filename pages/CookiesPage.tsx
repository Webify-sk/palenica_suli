import React, { useEffect } from 'react';

const CookiesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif text-stone-900 mb-8">Zásady používania súborov cookies</h1>
        <div className="prose prose-stone max-w-none text-stone-600 space-y-6">
          <p>
            Naša webová stránka používa súbory cookies, aby sme vám poskytli čo najlepšiu používateľskú skúsenosť. 
            Súbory cookies sú malé textové súbory, ktoré sa ukladajú vo vašom prehliadači.
          </p>
          <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-4">Aké cookies používame?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Nevyhnutné cookies:</strong> Tieto cookies sú potrebné pre základné fungovanie stránky.</li>
            <li><strong>Analytické cookies:</strong> Pomáhajú nám pochopiť, ako návštevníci používajú našu stránku.</li>
            <li><strong>Marketingové cookies:</strong> Používajú sa na sledovanie návštevníkov naprieč webovými stránkami.</li>
          </ul>
          <p className="mt-8">
            Svoj súhlas s používaním cookies môžete kedykoľvek zmeniť v nastaveniach svojho prehliadača.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
