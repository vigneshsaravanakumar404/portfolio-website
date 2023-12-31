import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { styles } from "./styles"
import { Navbar } from "./components";
//TODO: replace navbar so it actually works

const NotFound = () => {
  return (
      <section className={`relative w-full h-screen mx-auto`}>
          <div
              className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
          >
              <p className={`${styles.heroHeadText} mt-2 text-cyan-600`}> 404 </p>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}> oopsie you made a whoopsie </p>
              
          </div>
      </section>
  );
};


const Fourofour = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <NotFound />
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Fourofour />
  </React.StrictMode>
);