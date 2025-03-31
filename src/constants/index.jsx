
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import javaImg from "../assets/java.png";
import javascriptImg from "../assets/javascript.png";
import cppImg from "../assets/cpp.png";
import sqlImg from "../assets/sql.png";
import reactImg from "../assets/react.png";
import tailwindImg from "../assets/tailwind.png";
import pythonImg from "../assets/python.png";
import figmaImg from "../assets/figma.png";
import framerImg from "../assets/framer.png";
import coming from "C:/portfolio/coming soon.png";
import uniflixImg from "C:/portfolio/uniflix.png"; 

// Navigation items
export const navItems = [
  { label: "Home", section: "hero"},
  { label: "About", section: "about" },
  { label: "Skills", section: "skill" },
  { label: "Projects", section: "Projects" },
  { label: "Roles Of Responsibility", section: "Roles Of Responsibility" },
  { label: "Contact", section: "contact" },
];

// Skills data
export const skills = [
  { name: "HTML", imgSrc: htmlImg },
  { name: "CSS", imgSrc: cssImg },
  { name: "JavaScript", imgSrc: javascriptImg },
  { name: "React", imgSrc: reactImg },
  { name: "Tailwind CSS", imgSrc: tailwindImg },
  { name: "Framer Motion", imgSrc: framerImg },
  { name: "Python", imgSrc: pythonImg },
  { name: "Java", imgSrc: javaImg },
  { name: "SQL", imgSrc: sqlImg },
  { name: "C++", imgSrc: cppImg },
];

// Projects data
export const projects = [
  {
    title: "Uniflix",
    description: "Developed using Machine Learning to detect facial expressions and suggest movies on HTML base files using JavaScript.",
    imageUrl: uniflixImg,
    link: "https://github.com/Dhristi998/Movie-Recommendations-based-on-facial-expressions-using-Machine-Learning",
    tools: [htmlImg, cssImg, javascriptImg],
  },
  {
    title: "Coming Soon!",
    description: "",
    imageUrl: coming,
    link: " ",
    tools: [],
  },

];
