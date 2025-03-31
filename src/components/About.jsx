import { motion } from "framer-motion";

const About = () => {
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

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section
            id="about"
            className="flex flex-col min-h-screen items-center justify-center px-6 md:px-12 py-12"
        >
            <motion.div
                className="max-w-4xl mx-auto w-full text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6"
                    variants={textVariants}
                    style={{ color: "#327039" }}
                >
                    About Me
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700"
                    variants={textVariants}
                >
                    I am <span className="font-semibold">Dhristi Palresha</span>, a dedicated B.Tech student in 
                    Information Technology, projected to graduate in 2026. My academic focus lies predominantly in 
                    <span className="font-semibold text-green-700"> machine learning</span>, complemented by a keen 
                    interest in <span className="font-semibold text-green-700">bioinformatics</span>.  
                    With aspirations to become a research analyst, I aim to leverage cutting-edge technologies to 
                    address complex challenges and contribute meaningfully to societal progress and the betterment 
                    of humanity.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default About;
