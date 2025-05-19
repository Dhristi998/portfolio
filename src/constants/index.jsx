import coming from "C:/portfolio/coming soon.png";
import uniflixImg from "C:/portfolio/uniflix.png"; 

// Navigation items
export const navItems = [
  { label: "Home", section: "hero" },
  { label: "About", section: "about" },
  { label: "Skills", section: "skill" },
  { label: "Projects", section: "Projects" },
  { label: "Internships", section: "roles" }, // ✅ Updated
  { label: "Contact", section: "contact" },
];

// ✅ Skills section removed

// Projects data
export const projects = [
  {
    title: "Uniflix",
    description:
      "Developed using Machine Learning to detect facial expressions and suggest movies on HTML base files using JavaScript.",
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
