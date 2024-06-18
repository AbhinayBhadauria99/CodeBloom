import React from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import About from './components/About'
import Eyes from './components/Eyes';


const App: React.FC = () => {
  return (
    <div className='w-full  text-white min-h-screen bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
    </div>
  );
}

export default App;
