
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
    skills_icons: ["icons/Java-Dark.svg"]
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

const experiences = [
  {
    title: "Intern",
    company_name: "Tesla",
    icon: "icons/CSS.svg",
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
        icon: "icons/React-Dark.svg",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
        icon: "icons/MongoDB-Dark.svg",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
        icon: "icons/Tailwind-Dark.svg",
      },
    ],
    image: "icons/CSS.svg",
    source_code_link: "https://github.com/",
  }
];

const socials = [
  { name: "Instagram", icon: "icons/instagramlogo.svg", link: "https://www.instagram.com/saravanakumarvignesh/" }, 
  { name: "LinkedIn", icon: "icons/linkedinlogo.svg", link: "https://www.linkedin.com/in/vignesh-saravanakumar-435378240/" }, 
  { name: "GitHub", icon: "icons/githublogo.svg", link: "https://github.com/vigneshsaravanakumar404" }, 
  { name: "Email", icon: "icons/email.svg", link: "mailto: vignesh.saravanakumar.vs@gmail.com" }
];


export { courses, experiences, projects, socials };
