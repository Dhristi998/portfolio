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
            className="relative flex flex-col min-h-screen items-start justify-center px-6 md:px-12 py-12 bg-black font-face"
        >
            <motion.div
                className="relative z-10 text-left ml-[12vw] w-[70vw] max-w-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-[#927340]"
                    variants={textVariants}
                >
                    About Me
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[#927340]"
                    variants={textVariants}
                >
                    I am <span className="font-semibold">Dhristi Palresha</span>, a dedicated B.Tech student in 
                    Information Technology, projected to graduate in 2026. My academic focus lies predominantly in 
                    Machine Learning, complemented by a keen interest in Bioinformatics.  
                    With aspirations to become a Research Analyst, I aim to leverage cutting-edge technologies to 
                    address complex challenges and contribute meaningfully to societal progress and the betterment 
                    of humanity.
                    <br /><br />

                    Apart from my academic aspirations, I have a profound passion for literature and art, which deeply inspire my creative expression. My appreciation for classical art—both in design and language—fuels my exploration of beauty and meaning across mediums. I also enjoy{' '}
                    <a
                        href="https://in.pinterest.com/dhriii/shutter-soul/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#927340]"
                        aria-label="Photography"
                    >
                        photography
                    </a>
                    , which allows me to capture moments that reflect this artistic sensibility. Additionally, my love for languages and design enriches my understanding of culture and communication, further shaping my unique perspective.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default About;
