import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CourseCard = ({ index, courseName, description, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("up", "easeInOut", index * 0.3, 1)}
      className='w-full bg-[#012F2D] p-[2px] rounded-[15px] shadow-lg'
    >
      <div
        className='bg-[#004D40] rounded-[15px] py-6 px-8 min-h-[320px] flex flex-col justify-between'
      >
        <div className='flex items-center space-x-4'>
          <img
            src={icon}
            alt={courseName}
            className='w-12 h-12 object-contain'
          />
          <h3 className='text-[#01FF70] text-[22px] font-semibold'>
            {courseName}
          </h3>
        </div>
        <p className='text-white text-[16px] mt-4'>
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who I am</p>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a high school student from New Jersey. I'm passionate about programming and I love to learn new things.
        I mostly code in Python and Java but I'm always open to learning new languages. This website is my attempt at
        learning React and Three.js.
      </motion.p>

      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionHeadText}>Courses</h3>
      </motion.div>

      <motion.div variants={textVariant()}>
        <h6 className={styles.sectionHeadText}>Skills</h6>
      </motion.div>

      <motion.div variants={textVariant()}>
        <h6 className={styles.sectionHeadText}>Tools & Frameworks</h6>
        {/* Tools/Frameworks content */}
      </motion.div>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
