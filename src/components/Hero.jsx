import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { taglines } from "../constants";

/**
 * Renders the Hero section of the website.
 * @returns {JSX.Element} The Hero component.
 */
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#01FF70]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#01FF70]">Vignesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {taglines.one} <br className="sm:block hidden" />
            {taglines.two} <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
