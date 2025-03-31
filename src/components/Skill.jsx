import { motion } from "framer-motion";

const skills = [
{ name: "React", imgSrc: "/images/react.png" },
{ name: "JavaScript", imgSrc: "/images/javascript.png" },
{ name: "Node.js", imgSrc: "/images/nodejs.png" },
{ name: "Tailwind CSS", imgSrc: "/images/tailwind.png" },
{ name: "Git", imgSrc: "/images/git.png" },
{ name: "Firebase", imgSrc: "/images/firebase.png" },
{ name: "MongoDB", imgSrc: "/images/mongodb.png" },
{ name: "Next.js", imgSrc: "/images/nextjs.png" },
{ name: "TypeScript", imgSrc: "/images/typescript.png" },
{ name: "GraphQL", imgSrc: "/images/graphql.png" },
];

const Skill = () => {
const containerVariants = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, duration: 0.8, ease: "easeOut" },
},
};

const itemVariants = {
hidden: { opacity: 0, y: 30 },
visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

return (
<section
    id="skill"
    className="flex flex-col min-h-screen items-center justify-center px-6 py-12"
>
    <div className="mx-auto w-full max-w-6xl">
    {/* Section Title */}
    <motion.h2
        className="text-4xl sm:text-6xl md:text-8xl text-center font-bold mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ color: "#327029" }}
    >
        My Skills
    </motion.h2>

    {/* Skills Grid */}
    <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >
        {skills.map((skill, index) => (
        <motion.div
            key={index}
            className="flex flex-col items-center justify-center text-center rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
        >
            {/* Skill Icon */}
            <motion.img
            src={skill.imgSrc}
            alt={skill.name}
            className="h-14 w-14 sm:h-16 sm:w-16 rounded-lg mb-2 shadow-md"
            variants={itemVariants}
            />

            {/* Skill Name */}
            <motion.p className="text-sm md:text-base text-gray-700 font-medium" variants={itemVariants}>
            {skill.name}
            </motion.p>
        </motion.div>
        ))}
    </motion.div>
    </div>
</section>
);
};

export default Skill;
