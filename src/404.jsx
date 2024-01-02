import React, { useEffect } from 'react';
import "./index.css";
import { Navbar } from "./components";
//TODO: replace navbar so it actually works

const NotFound = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`fourofourcenter`}>
        404 - page not found...
        <p style={{ fontSize: "2.61vw" }}>try again?</p>
      </div>
    </section>
  );
};


const Fourofour = () => {
  useEffect(() => {
    document.title = "Vignesh | 404";
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <NotFound />
      </div>
    </div>
  );
};

export default Fourofour;