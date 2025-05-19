import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", section: "hero" },
  { label: "About", section: "about" },
  { label: "My Skills", section: "skills" },
  { label: "Internships", section: "roles" }, // Updated label here
  { label: "Projects", section: "work" },
  { label: "Contact", section: "contact" }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(navItems[0].section);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -10;
      const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
      setTimeout(() => setActiveSection(sectionId), 300);
    }
    setIsMenuOpen(false);
  };

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
      { rootMargin: "-30% 0px -40% 0px", threshold: 0.4 }
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => sections.forEach((section) => section && observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 left-0 h-full w-[15vw] bg-black z-50 shadow-lg">
      <div className="flex flex-col items-center justify-start px-4 py-6 font-[Roman]">
        {/* Logo */}
        <div className="flex items-center mb-6 w-full justify-between">
          <img src={Logo} alt="Logo" className="h-6 w-auto" />
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-col w-full">
          <ul className="space-y-3 w-full">
            {navItems.map((item) => (
              <li key={item.section}>
                <button
                  onClick={() => scrollToSection(item.section)}
                  className={`w-full px-3 py-2 text-sm text-center rounded-md transition-all duration-300
                    ${
                      activeSection === item.section
                        ? "bg-[#927340] text-white"
                        : "text-white"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 w-full">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.section}>
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="w-full px-3 py-2 text-sm text-center text-white rounded-md"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
