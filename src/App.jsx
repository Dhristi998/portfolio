import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skill from "./components/Skill";
import RolesOfResponsibilities from "./components/Roles";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <main>
        <HeroSection />
        <About />
        <Skill />
        <RolesOfResponsibilities />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
