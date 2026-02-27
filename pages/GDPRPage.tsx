import React, { useEffect } from 'react';

const GDPRPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif text-stone-900 mb-8">Ochrana osobných údajov (GDPR)</h1>
        <div className="prose prose-stone max-w-none text-stone-600 space-y-6">
          <p>
            Ochrana vašich osobných údajov je pre nás prioritou. Spracúvame ich v súlade s platnou legislatívou, 
            najmä s nariadením GDPR.
          </p>
          <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-4">Aké údaje spracúvame?</h2>
          <p>
            Spracúvame len údaje, ktoré nám dobrovoľne poskytnete, napríklad prostredníctvom kontaktného 
            alebo rezervačného formulára (meno, email, telefónne číslo).
          </p>
          <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-4">Vaše práva</h2>
          <p>
            Máte právo na prístup k svojim údajom, právo na ich opravu, vymazanie alebo obmedzenie spracúvania. 
            Taktiež máte právo namietať proti spracúvaniu.
          </p>
          <p className="mt-8">
            V prípade otázok nás neváhajte kontaktovať na našej emailovej adrese.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GDPRPage;
