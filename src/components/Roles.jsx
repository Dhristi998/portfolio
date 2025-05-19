import React from "react";
import { motion } from "framer-motion";

const Internships = () => {
const containerVariants = {
hidden: { opacity: 0, y: 40 },
visible: {
    opacity: 1,
    y: 0,
    transition: {
    duration: 0.7,
    ease: "easeOut",
    staggerChildren: 0.3,
    },
},
};

const itemVariants = {
hidden: { opacity: 0, y: 20 },
visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
},
};

const roles = [
{
    title: "Live Productions Intern",
    company: "The Habitat Studios",
    duration: "June 2024 – December 2024",
    description:
    "Gained hands-on experience in live event production at The Habitat Studios, a leading creative and performance venue. Supported the technical team in managing audio-visual setups and equipment handling during live shows like India's Got Latent, Relationshit and others.",
    reference: "LOR from Mr. Balraj Ghai, Owner of The Habitat Studios",
},
{
    title: "Technical Intern",
    company: "MTO37",
    duration: "January 2025 – May 2025",
    description:
    "Currently working as the primary digital designer and technical coordinator for MTO37, a multidisciplinary creative space. Managed and maintained the official website, coordinated CRM tools for audience engagement, and oversaw all digital platforms to ensure smooth day-to-day operations. Responsibilities included updating content, monitoring site performance, integrating third-party tools, and ensuring cohesive branding across all online touchpoints.",
    reference: "LOR from Omkar Borkar, Co-Founder of MTO37",
},
];

return (
<section
    id="internships"
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
        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-16 text-[#927340]"
        variants={itemVariants}
    >
        Internships
    </motion.h1>

    <motion.div
        className="flex flex-col space-y-16"
        variants={containerVariants}
    >
        {roles.map(({ title, company, duration, description, reference }, idx) => (
        <motion.div key={idx} variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-[#927340] mb-2">
            {title} – <span className="italic font-normal">{company}</span>
            </h2>
            <p className="text-sm text-[#927340] mb-4 font-semibold">{duration}</p>
            <p className="text-lg text-[#927340] leading-relaxed">{description}</p>
            {reference && (
            <p className="text-sm italic text-[#927340] mt-3">{reference}</p>
            )}
        </motion.div>
        ))}
    </motion.div>
    </motion.div>
</section>
);
};

export default Internships;
