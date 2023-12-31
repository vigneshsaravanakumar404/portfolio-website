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
      <div className={`text-white content-center`}>TEST</div>
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