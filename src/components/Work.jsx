import React from "react";
import { motion } from "framer-motion";

const projects = [
{
id: 1,
title: "Portfolio Website",
description: "A personal portfolio built with React and Tailwind CSS.",
imageUrl: "/images/portfolio.jpg",
tools: ["/images/react.png", "/images/tailwind.png"],
link: "https://yourportfolio.com",
},
{
id: 2,
title: "E-commerce Store",
description: "An e-commerce platform with Stripe payments.",
imageUrl: "/images/ecommerce.jpg",
tools: ["/images/nextjs.png", "/images/stripe.png"],
link: "https://yourecommerce.com",
},
];

const Work = () => {
const containerVariants = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
},
};

const itemVariants = {
hidden: { opacity: 0, y: 50 },
visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

return (
<motion.div
    id="work"
    className="min-h-screen flex flex-col justify-center items-center px-6 py-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
>
    {/* Section Title */}
    <motion.h1
    className="text-4xl sm:text-6xl md:text-8xl text-center font-bold mb-12"
    variants={itemVariants}
    style={{ color: "#efefd3" }}
    >
    My Work
    </motion.h1>

    {/* Projects Grid */}
    <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center w-full max-w-6xl"
    variants={containerVariants}
    >
    {projects.map((project) => (
        <motion.div
        key={project.id}
        className="relative flex flex-col w-full border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
        variants={itemVariants}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
        {/* Project Image */}
        <div className="relative w-full aspect-video overflow-hidden">
            <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            />
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col justify-between">
            <motion.h2 className="text-xl font-semibold" variants={itemVariants}>
            {project.title}
            </motion.h2>
            <motion.p className="text-sm mt-2 text-gray-700" variants={itemVariants}>
            {project.description}
            </motion.p>

            {/* Tools Used */}
            <motion.div className="flex space-x-2 mt-4" variants={itemVariants}>
            {project.tools.map((tool, index) => (
                <motion.img
                key={index}
                src={tool}
                alt={`Tool ${index + 1}`}
                className="w-8 h-8"
                />
            ))}
            </motion.div>

            {/* View Project Button */}
            <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-gradient-to-r from-yellow-400 to-cyan-400 text-white py-2 px-3 rounded-full shadow-md text-sm w-32 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
            View Project
            </motion.a>
        </div>
        </motion.div>
    ))}
    </motion.div>
</motion.div>
);
};

export default Work;
