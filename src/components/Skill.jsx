import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
const containerVariants = {
hidden: { opacity: 0, y: 40 },
visible: {
    opacity: 1,
    y: 0,
    transition: {
    duration: 0.7,
    ease: "easeOut",
    staggerChildren: 0.2,
    },
},
};

const itemVariants = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const skillCategories = [
{
    category: "Programming Languages",
    skills: ["Python", "NodeJS", "ReactJS", "JavaScript", "HTML", "CSS", "SQL"],
},
{
    category: "Data Science & ML Libraries",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "PyTorch"],
},
{
    category: "Visualization Tools",
    skills: ["Microsoft Power BI", "Tableau"],
},
{
    category: "Graphic Design & Editing",
    skills: [
    "AutoCAD",
    "Android Studio",
    "Figma",
    "Canva",
    ],
},
{
    category: "Other Technical Skills",
    skills: ["UI/UX Design", "Robotic Process Automation (RPA) "],
},
];

return (
<section
    id="skills"
    className="relative flex flex-col min-h-screen items-start justify-center px-6 md:px-12 py-12 ml-[12vw] bg-black font-face"
>
    <motion.div
    className="relative z-10 w-[70vw] max-w-full"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    >
    <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-16 text-[#927340] font-face"
        variants={itemVariants}
    >
        My Skills
    </motion.h1>

    <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10"
        variants={containerVariants}
    >
        {skillCategories.map(({ category, skills }, idx) => (
        <motion.div key={idx} variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-5 text-[#927340] custom-font">
            {category}
            </h2>
            <ul className="list-disc list-inside text-[#927340] text-lg custom-font space-y-2">
            {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
            ))}
            </ul>
        </motion.div>
        ))}
    </motion.div>
    </motion.div>
</section>
);
};

export default Skills;
