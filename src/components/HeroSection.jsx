import { motion } from "framer-motion";

const HeroSection = () => {
  // Smooth scroll function
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="flex flex-col min-h-screen items-start justify-center px-6 md:px-12"
    >
      {/* Heading with Animation */}
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-8xl text-left tracking-wide font-bold leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I am<br />
        <span className="text-[#327039]">Dhristi Palresha</span>
        <br />
        speaks easy
      </motion.h1>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        {/* Download Resume Button */}
        <motion.a
          href="/CV.docx" // Ensure file is in public/ folder
          download="Dhristi_Palresha_Resume.pdf"
          className="bg-[#228b22] py-3 px-6 rounded-full text-white text-sm sm:text-base shadow-md border border-transparent transition-all duration-300 hover:bg-green-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Download Resume"
        >
          Download Resume
        </motion.a>

        {/* Contact Me Button */}
        <motion.button
          onClick={() => smoothScrollTo("contact")}
          className="py-3 px-6 rounded-full border border-gray-400 text-sm sm:text-base text-white bg-transparent transition-all duration-300 hover:bg-gray-800"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contact Me"
        >
          Contact Me
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
