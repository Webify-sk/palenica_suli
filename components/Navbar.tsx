import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const menuItems = [
    { label: 'O nás', href: '/o-nas' },
    { label: 'Služby', href: '/sluzby' },
    { label: 'Proces', href: '/proces' },
    { label: 'Cenník', href: '/cennik' },
    { label: 'Časté otázky', href: '/otazky' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || !isHomePage ? 'bg-stone-900/95 py-3 shadow-xl backdrop-blur-md' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group z-50">
            <img
              src="/Logo.png"
              alt="Pálenica Tradícia"
              className={`h-10 md:h-12 w-auto transition-all duration-300 ${isMenuOpen ? 'brightness-100' : ''}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-[11px] uppercase tracking-widest hover:text-copper transition-colors font-medium ${isScrolled || !isHomePage ? 'text-stone-300' : 'text-white/80'}`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/#rezervacia" className="bg-copper hover:bg-amber-700 text-white px-8 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-lg hover:shadow-copper/30">
              Rezervovať
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden z-50 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-8 flex flex-col items-end gap-1.5">
              <span className={`h-[2px] bg-copper transition-all duration-300 ${isMenuOpen ? 'w-8 rotate-45 translate-y-[8px]' : 'w-8'}`}></span>
              <span className={`h-[2px] bg-copper transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
              <span className={`h-[2px] bg-copper transition-all duration-300 ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-[8px]' : 'w-3'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-stone-950 transition-all duration-700 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col justify-center items-center px-6 relative overflow-hidden">
          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square rounded-full border border-copper/5 -z-10 animate-pulse"></div>
          
          <div className="flex flex-col items-center gap-8 text-center mt-12">
            {menuItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-3xl font-serif text-white hover:text-copper transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
            
            <Link 
              to="/#rezervacia" 
              className={`mt-4 bg-copper text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
              style={{ transitionDelay: '600ms' }}
            >
              Rezervovať termín
            </Link>
          </div>

          <div className="absolute bottom-12 w-full px-6 flex flex-col items-center gap-6">
            <div className="h-[1px] w-12 bg-copper/30"></div>
            <div className="flex gap-8 text-stone-400 text-xs tracking-widest uppercase">
              <a href="#" className="hover:text-copper transition-colors">Instagram</a>
              <a href="#" className="hover:text-copper transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
