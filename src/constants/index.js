import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const courses = [
  {
    id: 1,
    courseName: "Computer Science in the 21st century",
    description: "Introductory java programming course",
    languages_frameworks: ["Java"],
    instituion: ["South Brunswick High School"],
    icon: "src/assets/sbhs_logo.png",
    skills_icons: ["icons/Java-Dark.svg" ]
  },
  {
    id: 2,
    courseName: "AP Computer Science A",
    description: "College Board's AP Computer Science A course",
    languages_frameworks: ["Java"],
    instituion: ["South Brunswick High School"],
    icon: "src/assets/sbhs_logo.png",
    skills_icons: ["icons/Java-Dark.svg"]

  },
  {
    id: 3, 
    courseName: "Mobile Application Development",
    description: "Android app development using Java and Android Studio. Firebase, Google Maps API, and other libraries are also used.",
    languages_frameworks: ["Java", "Android Studio", "IntelliJ", "Gradle"],
    instituion: ["South Brunswick High School", "Ramapo College of New Jersey"],
    icon: "src/assets/sbhs_logo.png",
    skills_icons: ["icons/Java-Dark.svg", "icons/AndroidStudio-Dark.svg"]
  }, 
  {
    id: 4, 
    courseName: "Virtual Reality & Game Design",
    description: "Unity 2D and 3D games, cross-platform games, physics, animation, and networking rooted in C#",
    languages_frameworks: ["C#", "Unity"],
    instituion: ["South Brunswick High School"],
    icon: "src/assets/sbhs_logo.png",
    skills_icons: ["icons/CS.svg", "icons/Unity-Dark.svg"]
  }, 
  {
    id: 5,
    courseName: "Data Structures",
    description: "Formal and more in-depth study of algorithms, data structures, and data abstraction",
    languages_frameworks: ["Java"],
    instituion: ["South Brunswick High School"],
    icon: "src/assets/sbhs_logo.png",
    skills_icons: ["icons/Java-Dark.svg"]
  }, 
  {
    id: 6,
    courseName: "Computer Science Capstone",
    description: "An exploration of current technology trends and essential internship skills, covering topics from virtualization to web development",
    languages_frameworks: ["Java", "Python", "VMs", "Git", "Github", "C++", "Linux"],
    institution: ["South Brunswick High School"],
    icon: "src/assets/sbhs_logo.png",
    skills_icons: ["icons/Java-Dark.svg", "icons/Python-Dark.svg", "icons/Git.svg", "icons/Github-Dark.svg", "icons/CPP.svg", "icons/Linux-Dark.svg"]
  }
  
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Starbucks",
    icon: tesla,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    ],
  }
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
        icon: reactjs,
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
        icon: mongodb,
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
        icon: tailwind,
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  }
];

export { courses, technologies, experiences, projects };
