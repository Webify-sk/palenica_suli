import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProcessPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const detailedSteps = [
    {
      num: '01',
      title: 'Zber a príprava ovocia',
      desc: 'Základom kvalitnej pálenky je len zrelé, čisté a zdravé ovocie. Odstráňte stopky, listy a nahnité kusy. Ovocie odporúčame pomlieť alebo rozdrviť, čím urýchlite proces kvasenia.',
      tips: ['Používajte len dozreté ovocie', 'Kôstkoviny netreba odkôstkovať, ale nesmú byť rozbité kôstky']
    },
    {
      num: '02',
      title: 'Vedenie kvasu',
      desc: 'Nádoby na kvas (najlepšie plastové s upraveným vekom) plňte do 4/5 objemu. Kvasenie by malo prebiehať v čistých priestoroch pri stabilnej teplote (ideálne 15-18°C).',
      tips: ['Nádoby poriadne uzavrite, aby nevznikali plesne', 'Nekvaste v kovových nádobách']
    },
    {
      num: '03',
      title: 'Kontrola ukončenia kvasenia',
      desc: 'Proces kvasenia je ukončený, keď kvas prestane bublať, "koláč" na vrchu klesne a vôňa je príjemne alkoholová. Našim zákazníkom ponúkame bezplatné meranie cukornatosti refraktometrom.',
      tips: ['Ak je kvas sladký, kvasenie ešte neskončilo', 'Príliš dlhé čakanie po vykvasení škodí aróme']
    },
    {
      num: '04',
      title: 'Príprava na výpal a doprava',
      desc: 'Vykvasený materiál prepravte v uzatvorených nádobách. Pri manipulácii sa snažte kvas zbytočne neprevzdušňovať. Ak nemáte vlastné nádoby, radi vám ich zapožičiame.',
      tips: ['Garantujeme termín pálenia po nahlásení', 'Pomôžeme vám s vyložením v areáli pálenice']
    },
    {
      num: '05',
      title: 'Destilácia v kolóne',
      desc: 'Kvas sa plní do moderného medeného kotla prepojeného s rektifikačnou kolónou a deflegmátorom. Táto technológia umožňuje destiláciu a čistenie v rámci jedného kontinuálneho cyklu, čím zaručuje vynikajúcu čistotu a zachovanie všetkých aromatických látok.',
      tips: ['Rektifikačná kolóna s deflegmátorom zaručuje čistotu', 'Pomalý ohrev chráni jemnosť arómy']
    },
    {
      num: '06',
      title: 'Oddelenie frakcií',
      desc: 'Počas procesu destilácie náš majster precízne oddeľuje nežiaducu "hlavu" (úkvap) a "chvost" (dokvap) od čistého "jadra" (prekvap). Týmto spôsobom pre vás uchovávame len to najchutnejšie a najbezpečnejšie srdce destilátu.',
      tips: ['Oddelenie riadime senzoricky aj prístrojovo', 'Získavame len to najkvalitnejšie jadro']
    },
    {
      num: '07',
      title: 'Úprava stupňovitosti',
      desc: 'Čerstvý destilát má vysokú stupňovitosť (okolo 65-72%). Na základe vášho želania ho zriedime kvalitnou mäkkou vodou na finálnu hodnotu (najčastejšie 52%).',
      tips: ['Odporúčaná stupňovitosť pre ovocné destiláty je 52%', 'Jemné riedenie zjemňuje chuťový profil']
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20 mt-10">
          <span className="text-copper font-semibold uppercase tracking-widest text-sm mb-4 block">Ako pálime</span>
          <h1 className="text-5xl md:text-6xl text-stone-900 font-serif mb-6">
            Proces vytvorenia <span className="text-copper italic">tekutého pokladu</span>
          </h1>
          <p className="text-stone-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Kvalitná pálenka nevzniká v momente zapálenia ohňa pod kotlom. Je to súhra prírody, vašej starostlivosti o ovocie 
            a nášho remeselného kumštu. Prečítajte si, ako spoločne dosiahneme ten najlepší výsledok.
          </p>
        </div>

        {/* Detailed Vertical Steps */}
        <div className="space-y-12 mb-24">
          {detailedSteps.map((step, index) => (
            <div key={step.num} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 flex flex-col md:flex-row gap-10 items-start">
              <div className="shrink-0 flex items-center justify-center w-20 h-20 bg-copper text-white rounded-2xl text-3xl font-serif">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-serif text-stone-900 mb-4">{step.title}</h3>
                <p className="text-stone-600 text-lg mb-6 leading-relaxed">{step.desc}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {step.tips.map((tip, i) => (
                    <div key={i} className="flex gap-3 items-start bg-stone-50 p-4 rounded-xl border border-stone-100">
                      <svg className="w-5 h-5 text-copper shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-stone-500 text-sm italic">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Príprava kvasu - Checklist Section */}
        <div className="bg-stone-900 rounded-3xl p-10 md:p-20 text-white mb-24 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center text-copper">Zásady pre dokonalý kvas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-copper/20 flex items-center justify-center text-copper text-sm">✓</span>
                  Čistota
                </h4>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Používajte len čisté nádoby. Do ovocia nepatrí hlina, stopky ani tráva. Každá nečistota sa pri destilácii prejaví v chuti.
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-copper/20 flex items-center justify-center text-copper text-sm">✓</span>
                  Teplota
                </h4>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Kvasu nesvedčia teplotné výkyvy. Ideálne je tieň a stabilná teplota okolo 16-20°C. Pri vysokých teplotách hrozí zoctovatenie.
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-copper/20 flex items-center justify-center text-copper text-sm">✓</span>
                  Sledovanie
                </h4>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Pravidelne kontrolujte "ovocný klobúk" na vrchu. Nesmie sčernať alebo chytiť pleseň. Po ukončení kvasenia hneď volajte do pálenice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-copper/5 rounded-3xl p-12 md:p-20 border border-copper/20">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Máte pripravený kvas?</h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Ak si nie ste istí, či je váš kvas už pripravený na pálenie, ozvite sa nám. 
            Môžete sa zastaviť na bezplatné premeranie cukornatosti a konzultáciu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#rezervacia" className="bg-stone-900 hover:bg-stone-800 text-white px-10 py-4 rounded-full text-lg transition-all shadow-lg font-medium">
              Rezervovať termín
            </Link>
            <Link to="/#kontakt" className="bg-white border-2 border-copper text-copper hover:bg-copper hover:text-white px-10 py-4 rounded-full text-lg transition-all font-medium">
              Kontaktujte nás
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProcessPage;
