import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png"; // Adjust path if needed
import { Menu, X } from "lucide-react"; // Import Lucide icons
import { label } from "framer-motion/client";

const navItems = [
  { label: "Home", section: "hero" },
  { label: "About", section: "about" },
  {label: "My Skills ", section : "skills"},
  {label: "Roles", section: "Roles"},
  { label: "Projects", section: "work" },
  { label: "Contact", section: "contact" },
  {label : ""}
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(navItems[0].section);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth Scroll Function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector("nav").offsetHeight; // Adjust for navbar
      const yOffset = -navbarHeight - 10; // Ensures the section isn't hidden under navbar
      const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;
  
      window.scrollTo({ top: yPosition, behavior: "smooth" });
  
      setTimeout(() => setActiveSection(sectionId), 300);
    }
    setIsMenuOpen(false);
  };
  

  // IntersectionObserver for Active Section Highlighting
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.4 } // Adjusted for better accuracy
    );

    sections.forEach((section) => section && observer.observe(section));

    return () => sections.forEach((section) => section && observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#327039] shadow-md z-50">
      <div className="container mx-auto px-6 lg:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="font-semibold text-lg text-white">Brand</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 
            ${isMenuOpen ? "flex flex-col bg-white shadow-md w-full p-4 rounded-md" : "hidden"} 
            absolute lg:relative top-16 lg:top-0 left-0 lg:flex-row lg:bg-transparent lg:shadow-none lg:p-0 transition-all duration-300`}
        >
          {navItems.map((item) => (
            <li key={item.section} className="my-2 lg:my-0">
              <button
                onClick={() => scrollToSection(item.section)}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                  activeSection === item.section
                    ? "bg-green-600 text-white"
                    : "text-gray-800 hover:bg-gray-200"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
