import { motion } from "framer-motion";

const HeroSection = () => {
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="flex flex-col min-h-screen items-start justify-center px-[15%] font-face"
    >
      {/* Heading with Animation */}
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-8xl text-left tracking-wide font-bold leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi,<br />
        I like art & books
        <br />
        <span className="text-[#927340]">on purpose.</span>
      </motion.h1>
    </section>
  );
};

export default HeroSection;
