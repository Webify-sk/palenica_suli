import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import CookiesPage from './pages/CookiesPage';
import GDPRPage from './pages/GDPRPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sluzby" element={<ServicesPage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/proces" element={<ProcessPage />} />
          <Route path="/cennik" element={<PricingPage />} />
          <Route path="/otazky" element={<FAQPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/gdpr" element={<GDPRPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
