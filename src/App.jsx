import { About, Experience, Hero, Navbar, Works, StarsCanvas, Footer, EarthCanvas } from "./components";
import React, { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    document.title = "Vignesh | Portfolio";
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Works />
      <div className='relative z-0'>
        <StarsCanvas />
      </div>
      <div>
      <EarthCanvas />
      </div>
      <Footer />
    </div>
  );
}

export default App;