import React from "react";
import { motion } from "framer-motion";

const roles = [
{
id: 1,
title: "Lead Developer",
description: "Led a team of developers in building a scalable web application.",
imageUrl: "/images/lead-developer.jpg",
tools: ["/images/react.png", "/images/nodejs.png"],
link: "https://yourproject.com",
},
{
id: 2,
title: "Community Manager",
description: "Managed an online tech community with 10,000+ members.",
imageUrl: "/images/community-manager.jpg",
tools: ["/images/slack.png", "/images/discord.png"],
link: "https://yourcommunity.com",
},
];

const Roles = () => {
const containerVariants = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
},
};

const itemVariants = {
hidden: { opacity: 0, y: 50 },
visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

return (
<motion.div
    id="roles"
    className="min-h-screen flex flex-col justify-center items-center px-4 pt-8 pb-12 lg:pb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
>
    {/* Section Heading */}
    <motion.h1
    className="text-4xl sm:text-6xl md:text-8xl text-center font-bold mb-12"
    variants={itemVariants}
    style={{ color: "#327309" }}
    >
    Roles of Responsibility
    </motion.h1>

    {/* Roles Grid */}
    <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl"
    variants={containerVariants}
    >
    {roles.map((role) => (
        <motion.div
        key={role.id}
        className="flex flex-col w-full border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white"
        variants={itemVariants}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
        {/* Role Image */}
        <div className="relative w-full aspect-video overflow-hidden">
            <motion.img
            src={role.imageUrl}
            alt={role.title}
            className="absolute inset-0 object-cover w-full h-full rounded-t-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            />
        </div>

        {/* Role Details */}
        <div className="p-6 flex flex-col space-y-4">
            <motion.h2 className="text-xl font-semibold" variants={itemVariants}>
            {role.title}
            </motion.h2>
            <motion.p className="text-sm text-gray-700" variants={itemVariants}>
            {role.description}
            </motion.p>

            {/* Tech Stack Icons */}
            {role.tools.length > 0 && (
            <motion.div className="flex space-x-3" variants={itemVariants}>
                {role.tools.map((tool, index) => (
                <motion.img
                    key={index}
                    src={tool}
                    alt={`Tool ${index + 1}`}
                    className="w-8 h-8"
                />
                ))}
            </motion.div>
            )}

            {/* View Role Button */}
            {role.link && (
            <motion.a
                href={role.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#327309] text-white py-2 px-4 rounded-full shadow-md text-sm w-32 text-center hover:bg-green-700 transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
                View Roles
            </motion.a>
            )}
        </div>
        </motion.div>
    ))}
    </motion.div>
</motion.div>
);
};

export default Roles;
