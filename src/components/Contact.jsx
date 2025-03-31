import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger animation for child elements
            delayChildren: 0.1,  // Slight delay before starting animations
        },
    },
};

const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 0.3, // Trigger when 30% of the section is visible
        triggerOnce: true, // Animation will only trigger once
    });

    return (
        <motion.div
            id="contact"
            ref={ref}
            className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 text-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
        >
            <div className="w-full max-w-4xl">
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8"
                    variants={fadeInVariant}
                    style={{ color: "#327039" }}
                >
                    Contact
                </motion.h2>

                {/* Email */}
                <motion.p className="mb-8" variants={fadeInVariant}>
                    <a
                        href="mailto:dhristipalresha998@gmail.com"
                        className="text-3xl sm:text-5xl font-medium inline-block transition-all duration-300 hover:scale-105 hover:text-black"
                        style={{ color: "#327039" }}
                    >
                        dhristipalresha998@gmail.com
                    </a>
                </motion.p>

                {/* Social Links */}
                <motion.div className="flex flex-col space-y-6">
                    {[
                        { name: "LinkedIn", url: "https://linkedin.com/in/dhristi-palresha-a7b92720b/" },
                        { name: "GitHub", url: "https://github.com/Dhristi998" },
                    ].map((link, index) => (
                        <motion.p key={index} variants={fadeInVariant}>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl sm:text-5xl font-medium inline-block transition-all duration-300 hover:scale-105 hover:text-black"
                                style={{ color: "#327039" }}
                            >
                                {link.name}
                            </a>
                        </motion.p>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;
