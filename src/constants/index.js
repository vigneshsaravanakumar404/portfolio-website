export const navLinks = [
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
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
    iconBg: "#020303",
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
    icon: "Sevalaya.png",
    iconBg: "#5CA137",
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
    icon: "c4t.png",
    iconBg: "#37DCE6",
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
      "This is my personal portfolio website housing projects, experience and skills. I built this website using React and Tailwind CSS. I also used Three.js for the 3D animations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
        icon: "icons/React-Dark.svg",
      },
      {
        name: "css",
        color: "green-text-gradient",
        icon: "icons/MongoDB-Dark.svg",
      },
      {
        name: "js",
        color: "pink-text-gradient",
        icon: "icons/Tailwind-Dark.svg",
      },
      {
        name: "react",
        color: "blue-text-gradient",
        icon: "icons/Three-Dark.svg",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
        icon: "icons/Three-Dark.svg",
      },
    ],
    image: "portfolioWebsiteProject.png",
    source_code_link:
      "https://www.google.com/url?q=https://github.com/vigneshsaravanakumar404/portfolio-website&sa=D&source=docs&ust=1710470873541583&usg=AOvVaw3Fx1eeX9QvR-10vinpvVXJ",
  },
  {
    name: "Image To Equations",
    description:
      "Converts an image into a set of equations using Python, Edge Detection AI and Desmos API. The user can then visualize the equations on Desmos. 2k + views on YouTube.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
        icon: "icons/Python-Dark.svg",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
        icon: "icons/SVG-Dark.svg",
      },
      {
        name: "svg",
        color: "green-text-gradient",
        icon: "icons/SVG-Dark.svg",
      },
    ],
    image: "DesmosProject.png",
    source_code_link:
      "https://github.com/vigneshsaravanakumar404/ImageToEquations",
  },
  {
    name: "Broke Me Not",
    description:
      "Worlds Oldest Colligiate Hackathon Winner (Upenn - PennApps) in the web dev category out of 300+ participants. Created a college financial literacy app.", // Leaving description blank as requested
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
        icon: "icons/HTML-Dark.svg",
      },
      {
        name: "css",
        color: "green-text-gradient",
        icon: "icons/CSS-Dark.svg",
      },
      {
        name: "js",
        color: "pink-text-gradient",
        icon: "icons/JS-Dark.svg",
      },
      {
        name: "python",
        color: "blue-text-gradient",
        icon: "icons/Python-Dark.svg",
      },
    ],
    image: "PennAppsProject.png",
    source_code_link: "https://github.com/vigneshsaravanakumar404/PennApps",
  },
  {
    name: "Uber Global Hackathon",
    description:
      "Reached Global Finals out of 700+ participants. Optimized traffic for a hypothetical city using Algorithms",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
        icon: "icons/C#-Dark.svg",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
        icon: "icons/Flask-Dark.svg",
      },
      {
        name: "python",
        color: "pink-text-gradient",
        icon: "icons/Python-Dark.svg",
      },
    ],
    image: "UberProject.png",
    source_code_link:
      "https://github.com/vigneshsaravanakumar404/Uber-Hackathon?tab=readme-ov-file",
  },
  {
    name: "Pong",
    description:
      "Recreation of Atari's Pong game using Java and Android Studios. Tilt your phone to move the paddle.",
    tags: [
      {
        name: "Android Studios",
        color: "blue-text-gradient",
        icon: "icons/Android-Dark.svg",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
        icon: "icons/Java-Dark.svg",
      },
    ],
    image: "PongProject.png",
    source_code_link: "https://github.com/vigneshsaravanakumar404/Pong",
  },
  {
    name: "Enviornmental Chemistry",
    description:
      "Won 3rd place a NJIT's Chemistry Olympics. Created an enviornmental chemistry website using HTML, CSS and JS.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
        icon: "icons/HTML-Dark.svg",
      },
      {
        name: "css",
        color: "green-text-gradient",
        icon: "icons/CSS-Dark.svg",
      },
      {
        name: "js",
        color: "pink-text-gradient",
        icon: "icons/JS-Dark.svg",
      },
    ],
    image: "ChemistryOlympicsProject.png",
    source_code_link:
      "https://github.com/vigneshsaravanakumar404/Chemistry-Olympics-Website",
  },
  {
    name: "Text Messaging App",
    description:
      "Chat with GPT-3 using textmessage on android. Created using Java and Android Studios.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
        icon: "icons/Java-Dark.svg",
      },
      {
        name: "Android Studios",
        color: "pink-text-gradient",
        icon: "icons/Android-Dark.svg",
      },
    ],
    image: "TextMessagingAppProject.png",
    source_code_link:
      "https://github.com/vigneshsaravanakumar404/Text-Messaging-App",
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
