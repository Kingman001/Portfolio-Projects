
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Team from './pages/Team';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfTrade from './pages/TermsOfTrade';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle page change scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'team':
        return <Team />;
      case 'services':
        return <Services />;
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfTrade />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />
      <ChatBot />
    </div>
  );
};

export default App;
