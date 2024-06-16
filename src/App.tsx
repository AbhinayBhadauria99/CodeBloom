import React from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className='w-full h-screen text-white'>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
