import React from "react";
import DropText from "./DropText";

const Hero = ( {title, subtitle} ) => {
  return (

    <section
      className="opacity-0 transition-opacity duration-1000 ease-in-out relative h-screen flex items-center justify-center text-white text-center px-6"
      style={{
        backgroundImage: "url('/src/assets/slide-image1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Keeps the image fixed while scrolling
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl">
        <DropText text={title} />
        <p className="text-lg md:text-xl mb-6">
          {subtitle}
        </p>
        <a
          href="mailto:"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
        >
          GET STARTED
        </a>
      </div>
    </section>
  );
};

export default Hero;
