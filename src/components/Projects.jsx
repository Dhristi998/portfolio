import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
const containerVariants = {
hidden: { opacity: 0, y: 50 },
visible: {
    opacity: 1,
    y: 0,
    transition: {
    duration: 0.8,
    ease: "easeOut",
    staggerChildren: 0.3,
    },
},
};

const itemVariants = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const projects = [
{
    id: 1,
    title: "Online Fraud Detection Using SMOTE and Machine Learning ",
    description:
    "Developed a fraud detection system leveraging imbalanced classification techniques, particularly SMOTE (Synthetic Minority Over-sampling Technique), to improve the identification of rare fraudulent transactions.",
    imageUrl:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Dhristi998/Online-Fraud-Detection-Using-Smote-Analysis-Machine-Learning",
},
{
    id: 2,
    title: "UniFlix – Intelligent Movie Recommendation Platform ",
    description:
    "Designed and built a full-stack web app using HTML, CSS, JavaScript (frontend), and Flask + MySQL (backend). Integrated facial emotion recognition with OpenCV via webcam to analyze users’ real-time expressions while watching trailers.",
    imageUrl:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Dhristi998/Movie-Recommendations-based-on-facial-expressions-using-Machine-Learning",
},
{
    id: 3,
    title: "Automated Email Summarization and Classification using UiPath + Python LLM ",
    description:
    "Developed an intelligent email automation bot using UiPath, capable of reading Gmail messages, extracting key content, and summarizing information using Python-based LLMs (LangChain with Gemini/GPT models).",
    imageUrl:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Dhristi998/Email-Automation-Using-UIPATH",
},
{
    id: 4,
    title: "Research on Carbon-MOFs for Environmental Applications ",
    description:
    "Authored a research paper under mentorship of Dr. Pravin Patil, focusing on advances in synthesis and environmental applications of carbonous metal-organic frameworks (Carbon-MOFs), reviewing novel synthesis methods like solvothermal and green chemistry approaches.",
    imageUrl:
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
    link: "#",
},
];

return (
<section
    id="work"
    className="relative flex flex-col min-h-screen items-start justify-center px-6 md:px-12 py-12 ml-[12vw] bg-black font-face"
>
    <motion.div
    className="relative z-10 w-[70vw] max-w-full"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    >
    {/* Section Heading */}
    <motion.h1
        className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12 text-[#927340] custom-font"
        variants={itemVariants}
    >
        My Projects
    </motion.h1>

    {/* Projects Grid */}
    <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
    >
        {projects.map((project) => (
        <motion.div
            key={project.id}
            className="max-w-sm flex flex-col border border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-black"
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden">
            <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 object-cover w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
            </div>

            {/* Details */}
            <div className="p-4 space-y-3">
            <motion.h2
                className="text-lg font-semibold text-[#927340] custom-font"
                variants={itemVariants}
            >
                {project.title}
            </motion.h2>

            <motion.p
                className="text-xs text-[#927340] custom-font"
                variants={itemVariants}
            >
                {project.description}
            </motion.p>

            {/* Button */}
            <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#927340] text-black py-1 px-3 rounded-full shadow-sm text-xs text-center hover:bg-black transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
            >
                View Project
            </motion.a>
            </div>
        </motion.div>
        ))}
    </motion.div>
    </motion.div>
</section>
);
};

export default Projects;
