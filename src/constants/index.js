export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
  },
];

const courses = [
  {
    id: 1,
    courseName: "Computer Science in the 21st century",
    description: "Introductory java programming course",
    languages_frameworks: ["Java"],
    instituion: ["South Brunswick High School"],
    icon: "sbhs_logo.png",
    skills_icons: ["icons/Java-Dark.svg"],
  },
  {
    id: 2,
    courseName: "AP Computer Science A",
    description: "College Board's AP Computer Science A course",
    languages_frameworks: ["Java"],
    instituion: ["South Brunswick High School"],
    icon: "sbhs_logo.png",
    skills_icons: ["icons/Java-Dark.svg"],
  },
  {
    id: 3,
    courseName: "Mobile Application Development",
    description:
      "Android app development using Java and Android Studio. Firebase, Google Maps API, and other libraries are also used.",
    languages_frameworks: ["Java", "Android Studio", "IntelliJ", "Gradle"],
    instituion: ["South Brunswick High School", "Ramapo College of New Jersey"],
    icon: "sbhs_logo.png",
    skills_icons: ["icons/Java-Dark.svg", "icons/AndroidStudio-Dark.svg"],
  },
  {
    id: 4,
    courseName: "Virtual Reality & Game Design",
    description:
      "Unity 2D and 3D games, cross-platform games, physics, animation, and networking rooted in C#",
    languages_frameworks: ["C#", "Unity"],
    instituion: ["South Brunswick High School"],
    icon: "sbhs_logo.png",
    skills_icons: ["icons/CS.svg", "icons/Unity-Dark.svg"],
  },
  {
    id: 5,
    courseName: "Data Structures",
    description:
      "Formal and more in-depth study of algorithms, data structures, and data abstraction",
    languages_frameworks: ["Java"],
    instituion: ["South Brunswick High School"],
    icon: "sbhs_logo.png",
    skills_icons: ["icons/Java-Dark.svg"],
  },
  {
    id: 6,
    courseName: "Computer Science Capstone",
    description:
      "An exploration of current technology trends and essential internship skills, covering topics from virtualization to web development",
    languages_frameworks: [
      "Java",
      "Python",
      "VMs",
      "Git",
      "Github",
      "C++",
      "Linux",
    ],
    institution: ["South Brunswick High School"],
    icon: "sbhs_logo.png",
    skills_icons: [
      "icons/Java-Dark.svg",
      "icons/Python-Dark.svg",
      "icons/Git.svg",
      "icons/Github-Dark.svg",
      "icons/CPP.svg",
      "icons/Linux-Dark.svg",
    ],
  },
];

const experiences = [
  {
    title: "Web Developer & Summer Analyst",
    company_name: "Lightpost Energy",
    icon: "LightPostLogo.png",
    iconBg: "#f5f5f5",
    date: "June 2024 - September 2024",
    points: [
      "Developed  ‘Go-To-Market’ analysis and fast tracked the implementation of the consumer-solar business segment offerings",
      "Supported with the business planning activities including SWOT analysis, market segmentation and competitor analysis",
      "Designed and developed new intuitive consumer website aligned with the company’s mission, vision and values https://www.lightpostsolar.com/",
      "Assessed, programed and implemented new estimating software models for the solar installation",
      "Presented solar proposals to residential homeowners articulating the key value proposition of our offering",
      "Held private consultations and presented solar solutions totaling over $110k to several clients",
    ],
  },
  {
    title: "Theoretical Computer Science Research Intern",
    company_name: "Jesse Stern - Uchicago",
    icon: "Uchicago.png",
    iconBg: "#f5f5f5",
    date: "September 2022 - September 2023",
    points: [
      "Conducted research on “The computational complexity of Fischer Random chess”  under the mentorship of  Jesse Stern, a doctoral candidate at the University of Chicago in the field of theoretical computer science",
      "Studied limitations on our ability to write algorithms from a computational complexity perspective",
      "Research paper was accepted for the publication in the University of California, Irvine Journal",
      "In the process of publishing the research paper in arXiv.",
    ],
  },
  {
    title: "Vex Robotics Team, South Brunswick High School",
    company_name: "750Royals - South Brunswick High School",
    icon: "750R.png",
    iconBg: "#858585",
    date: "September 2022 - September 2023",
    points: [
      "Conducted research on “The computational complexity of Fischer Random chess”  under the mentorship of  Jesse Stern, a doctoral candidate at the University of Chicago in the field of theoretical computer science",
      "Studied limitations on our ability to write algorithms from a computational complexity perspective",
      "Research paper was accepted for the publication in the University of California, Irvine Journal",
      "In the process of publishing the research paper in arXiv.",
    ],
  },
  {
    title: "Volunteer Teacher",
    company_name: "Sevalaya",
    icon: "src/assets/Sevalaya.png", //TODO: Add the icon
    iconBg: "#f5f5f5", //TODO: Add the icon
    date: "September 2021 - June 2023",
    points: [
      "Volunteered over 80 hours leading classes for underprivileged children in Tamil Nadu, India",
      "Taught English leveraging fluency in my mother tongue: Tamil",
      "Worked towards creating access to education in rural areas",
    ],
  },
  {
    title: "C Curriculum developer and Volunteer Teacher",
    company_name: "Code 4 Tomorrow",
    icon: "src/assets/Code4Tomorrow.png",
    iconBg: "#f5f5f5",
    date: "Sep 2022 - Dec 2023",
    points: [
      "Volunteered over 80 hours leading lectures",
      "Instructed students ranging from elementary school to high school",
      "Independently created lesson plans and delivered lectures to the students",
      "Taught multiple topics including Python, Java, Algorithms and Data",
    ],
  },
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
  },
];

const socials = [
  {
    name: "LinkedIn",
    icon: "icons/linkedincolor.svg",
    link: "https://www.linkedin.com/in/vignesh-saravanakumar-435378240/",
  },
  {
    name: "GitHub",
    icon: "icons/githublogo.svg",
    link: "https://github.com/vigneshsaravanakumar404",
  },
  {
    name: "Email",
    icon: "icons/emailcolor.svg",
    link: "mailto:vignesh.saravanakumar.vs@gmail.com",
  },
  {
    name: "Chess",
    icon: "icons/chess-com.svg",
    link: "https://www.chess.com/member/vigneshsaravanakumar",
  },
  {
    name: "Instagram",
    icon: "icons/instagramcolor.svg",
    link: "https://www.instagram.com/saravanakumarvignesh/",
  },
];

const description = `I'm a high school student from New Jersey.
                     I'm passionate about programming and I love to learn new things. 
                     In my free time I love to play Chess and video games.
                     I mostly code in Python and Java but I'm always open to learning new languages. 
                     This website is my attempt at learning React and Three.js.`;

const resumePath = "/assets/[Vignesh] Resume.pdf";
const PDFViewerURL = "/resume/Resume.pdf";
const taglines = { one: "I'm an aspiring programmer", two: "from New Jersey." };
const copyright = `Copyright © Vignesh Saravanakumar ${new Date().getFullYear()}`;

export {
  courses,
  experiences,
  projects,
  socials,
  description,
  resumePath,
  PDFViewerURL,
  taglines,
  copyright,
};
