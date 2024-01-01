import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { courses } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


// CourseCard Component
const CourseCard = ({ index, courseName, description, icon, skills_icons }) => (
  <Tilt className='w-1/3 px-2 my-2'>
    <motion.div
      variants={fadeIn("up", "easeInOut", index * 0.3, 1)}
      className='w-full bg-[#012F2D] p-[2px] rounded-[15px] shadow-lg'
    >
      <div className='bg-[#004D40] rounded-[15px] py-6 px-8 min-h-[320px] flex flex-col justify-between'>
        <div className='flex items-center space-x-4'>
          <img src={icon} alt={courseName} className='w-12 h-12 object-contain' />
          <h3 className='text-[#01FF70] text-[22px] font-semibold'>{courseName}</h3>
        </div>
        <p className='text-white text-[16px] mt-4'>{description}</p>
        <div className='flex space-x-2 mt-4'>
          {skills_icons.map((skillIcon, i) => (
            <img key={i} src={skillIcon} alt="Skill Icon" className='w-6 h-6 object-contain' />
          ))}
        </div>
      </div>
    </motion.div>
  </Tilt>
);


// About Section
const About = () => {
  return (
    <>
      {/* Header */}  
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who I am</p>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>

      {/* Description */}  
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a high school student from New Jersey. I'm passionate about programming and I love to learn new things.
        I mostly code in Python and Java but I'm always open to learning new languages. This website is my attempt at
        learning React and Three.js.
      </motion.p>

      {/* Courses */}
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionHeadText}>Courses</h3>
      </motion.div>
      <div className='flex flex-wrap justify-center mt-20'>
        {courses.map((course, index) => (
          <CourseCard
            key={course.id}
            index={index}
            courseName={course.courseName}
            description={course.description}
            icon={course.icon}
            skills_icons={course.skills_icons}
          />
        ))}
      </div>

      {/* Skills */}
      <motion.div variants={textVariant()}>
        <h6 className={styles.sectionHeadText}>Skills</h6>
      </motion.div>
        

      {/* Tools & Frameworks */}
      <motion.div variants={textVariant()}>
        <h6 className={styles.sectionHeadText}>Tools & Frameworks</h6>
      </motion.div>

    </>
  );
};

export default SectionWrapper(About, "about");
