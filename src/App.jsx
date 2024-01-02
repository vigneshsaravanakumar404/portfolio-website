import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas, Footer } from "./components";
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
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
  );
}

export default App;