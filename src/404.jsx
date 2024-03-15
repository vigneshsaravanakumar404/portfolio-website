import React, { useEffect } from "react";
import "./index.css";
import { HomeNavbar, Footer } from "./components";

//TODO: replace navbar so it actually works

const NotFound = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`fourofourcenter`} style={{ color: "white" }}>
        404 - page not found...
        <p style={{ fontSize: "2.61vw" }}>try again?</p>
      </div>
    </section>
  );
};

/**
 * Renders the 404 page component.
 * @returns {JSX.Element} The 404 page component.
 */
const Fourofour = () => {
  useEffect(() => {
    document.title = "Vignesh | 404";
  }, []);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-cover bg-no-repeat bg-center">
        <HomeNavbar />
        <NotFound />
      </div>
      <Footer />
    </div>
  );
};

export default Fourofour;
