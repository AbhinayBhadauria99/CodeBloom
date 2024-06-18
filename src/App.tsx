import React from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import About from './components/About'

const App: React.FC = () => {
  return (
    <div className='w-full  text-white min-h-screen bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
    </div>
  );
}

export default App;
