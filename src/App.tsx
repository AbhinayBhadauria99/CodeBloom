import React from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import About from './components/About'
import Eyes from './components/Eyes';
import Cards from './components/Cards';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='w-full  text-white min-h-screen bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
