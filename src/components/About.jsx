import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { courses, description } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

//TODO: Tooltips for skills, tools, instiutions, etc.
//TODO: Improve color scheme for Course Cards

/**
 * Represents a Course Card component.
 *
 * @component
 * @param {Object} props - The properties of the CourseCard component.
 * @param {number} props.index - The index of the course card.
 * @param {string} props.courseName - The name of the course.
 * @param {string} props.description - The description of the course.
 * @param {string} props.icon - The URL of the course icon.
 * @param {string[]} props.skills_icons - An array of URLs for skill icons related to the course.
 * @returns {JSX.Element} The CourseCard component.
 */
const CourseCard = ({ index, courseName, description, icon, skills_icons }) => (
  <Tilt className="lg:w-1/3 md:w-1/2 sm:w-full px-2 my-2">
    <motion.div
      variants={fadeIn("up", "easeInOut", index * 0.3, 1)}
      className="p-[2px] rounded-[15px] shadow-lg"
      style={{
        background: "linear-gradient(135deg, #0F9B0F 0%, #1D1836 100%)",
      }}
    >
      <div className="bg-[#1D1836] rounded-[15px] py-6 px-8 min-h-[350px] flex flex-col justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={icon}
            alt={courseName}
            className="w-12 h-12 object-contain"
          />
          <h3 className="text-[#01FF70] text-[22px] font-semibold">
            {courseName}
          </h3>
        </div>
        <p className="text-[#DAF7A6] text-[16px] mt-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {skills_icons.map((skillIcon, i) => (
            <img
              key={i}
              src={skillIcon}
              alt="Skill Icon"
              className="w-12 h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

/**
 * Renders the About component.
 * @returns {JSX.Element} The rendered About component.
 */
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
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {description}
      </motion.p>

      {/* Courses */}
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionHeadText}>Courses</h3>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Here are the courses I have taken in a formal, academic enviornment.{" "}
        </p>
      </motion.div>
      <div className="flex flex-wrap justify-center mt-5">
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

      {/* //TODO: Skills */}
      <motion.div variants={textVariant()}>
        <h6 className={styles.sectionHeadText}>Skills</h6>
      </motion.div>

      {/* //TODO: Awards */}
      <motion.div variants={textVariant()}>
        <h6 className={styles.sectionHeadText}>Awards</h6>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
