import React from "react";
import profileImg from "../assets/portfolio_picture.jpg";

const Contact = () => {
return (
<section
    className="min-h-screen flex items-center bg-black px-12 py-12 font-face"
    style={{ color: "#927340" }}
>
    {/* Left side text */}
    <div
    className="flex flex-col justify-center flex-1 max-w-lg"
    style={{ marginLeft: "15%" }}
    >
    <p className="text-3xl mb-10 opacity-100 font-face">I will see you around!</p>
    <h1 className="text-white text-4xl font-semibold mb-5 font-face">
        Contact Me for fun work stuff.<br />
    </h1>
    <div className="flex space-x-12 text-sm font-normal">
        <a
        href="mailto:dhristipalresha998@gmail.com"
        className="underline"
        style={{ color: "#927340" }}
        >
        Gmail
        </a>
        <a
        href="https://linkedin.com/in/dhristi-palresha-a7b92720b/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
        style={{ color: "#927340" }}
        >
        LinkedIn
        </a>
    </div>
    </div>

    {/* Right side image */}
    <div className="flex-1 flex justify-end">
    <img
        src={profileImg}
        alt="Profile"
        className="max-w-md object-cover"
        style={{ maxHeight: "90vh" }}
    />
    </div>
</section> 
);
};

export default Contact;
