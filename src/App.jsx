import {
  About,
  Experience,
  Hero,
  HomeNavbar,
  Works,
  StarsCanvas,
  Footer,
  EarthCanvas,
} from "./components";
import React, { useEffect } from "react";

/**
 * The main component of the portfolio website.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const App = () => {
  useEffect(() => {
    document.title = "Vignesh | Portfolio";
  }, []);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-cover bg-no-repeat bg-center">
        <HomeNavbar />
        <Hero />
      </div>
      <Experience />
      <Works />
      <About />
      <div className="relative z-0">
        <StarsCanvas />
      </div>
      <div>
        <EarthCanvas />
      </div>
      <Footer />
    </div>
  );
};

export default App;
