
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="kontakt" className="bg-stone-950 text-stone-400 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img src="/Logo.png" alt="Pálenica Tradícia" className="h-12 w-auto" />
          </Link>
          <p className="max-w-md mb-8 leading-relaxed">
            Sme rodinná pálenica s hlbokými koreňmi v slovenskej zemi. Naším poslaním je uchovávať tradičné metódy destilácie a prinášať radosť z poctivého tekutého ovocia.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-copper hover:text-white transition-all hover:border-copper">
              FB
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-copper hover:text-white transition-all hover:border-copper">
              IG
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-white font-medium uppercase tracking-widest mb-6">Navigácia</h5>
          <ul className="space-y-4 text-sm">
            <li><Link to="/o-nas" className="hover:text-copper transition-colors">O nás</Link></li>
            <li><Link to="/sluzby" className="hover:text-copper transition-colors">Služby</Link></li>
            <li><Link to="/proces" className="hover:text-copper transition-colors">Proces</Link></li>
            <li><Link to="/cennik" className="hover:text-copper transition-colors">Cenník</Link></li>
            <li><Link to="/faq" className="hover:text-copper transition-colors">FAQ</Link></li>
            <li><Link to="/kontakt" className="hover:text-copper transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-medium uppercase tracking-widest mb-6">Kontakt</h5>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <svg className="w-5 h-5 text-copper shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Slobody 123, 911 01 Trenčín
            </li>
            <li className="flex gap-3">
              <svg className="w-5 h-5 text-copper shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +421 905 123 456
            </li>
            <li className="flex gap-3">
              <svg className="w-5 h-5 text-copper shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              info@palenicatradicia.sk
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-stone-900 mt-16 pt-8 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Pálenica Tradícia. Všetky práva vyhradené. Created by Webify</p>
        <div className="flex gap-6">
          <Link to="/cookies" className="hover:text-copper transition-colors">Cookies policy</Link>
          <Link to="/gdpr" className="hover:text-copper transition-colors">GDPR</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
