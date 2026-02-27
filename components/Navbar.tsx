
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'O nás', href: '/o-nas' },
    { label: 'Služby', href: '/sluzby' },
    { label: 'Proces', href: '/proces' },
    { label: 'Cenník', href: '/cennik' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-stone-900/95 py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/Logo.png"
            alt="Pálenica Tradícia"
            className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-[9px] md:text-[11px] uppercase tracking-widest hover:text-copper transition-colors font-medium ${isScrolled || !isHomePage ? 'text-stone-300' : 'text-white/80'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/#rezervacia" className="bg-copper hover:bg-amber-700 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[9px] md:text-xs uppercase tracking-tighter font-bold transition-all shadow-lg hover:shadow-copper/20">
            Rezervovať
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
