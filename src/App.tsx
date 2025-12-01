import React, { useState } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ChatBot from './components/ChatBot';
import Diary from './components/Diary';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'chat' | 'diary'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      
      <main>
        {currentPage === 'home' && <Hero />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'chat' && <ChatBot />}
        {currentPage === 'diary' && <Diary />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
