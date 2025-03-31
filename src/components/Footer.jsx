import React from "react";
import ReactLogo from "../assets/react.png";
import TailwindLogo from "../assets/tailwind.png";
import FramerLogo from "../assets/framer.png";
import VercelLogo from "../assets/vercel.png";

const technologies = [
    { name: "React", logo: ReactLogo, alt: "React.js - Built with React.js" },
    { name: "Tailwind CSS", logo: TailwindLogo, alt: "Tailwind CSS - Styled with Tailwind" },
    { name: "Framer Motion", logo: FramerLogo, alt: "Framer Motion - Animations powered by Framer Motion" },
    { name: "Vercel", logo: VercelLogo, alt: "Vercel - Hosted on Vercel" },
];

const Footer = () => {
    return (
        <footer className="mt-10 border-t border-neutral-700 text-neutral-300 text-sm py-6 px-4">
            <div className="flex flex-col items-center justify-center gap-6">
                {/* Copyright Text */}
                <p className="text-center text-xs sm:text-sm">
                    © 2024 <span className="font-semibold">Dhristi Palresha</span>. All rights reserved.
                </p>

                {/* Technology Stack */}
                <div className="text-center text-xs sm:text-sm text-neutral-400 flex flex-col items-center gap-4">
                    <span>Developed using:</span>

                    {/* Tech Logos Container */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-4">
                        {technologies.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <img src={tech.logo} alt={tech.alt} className="h-6 w-auto" />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
