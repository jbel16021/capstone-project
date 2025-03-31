"use client";
import { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="relative overflow-hidden  md:pt-40 xl:pb-25 xl:pt-46 min-h-screen">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover min-h-screen"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="video/0331.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10 mt-50 mb-50">
          <div className="text-center p-6 rounded-lg">
            <Image
              src="/images/brand/normiss-fitness-logo-svg.svg" // Correct path for files in the public folder
              alt="Normiss Fitness Logo"
              width={400} // Adjust width as needed
              height={400} // Adjust height as needed
              className="mx-auto"
            />
            {/* <h1 className="text-4xl font-bold text-black dark:text-white xl:text-6xl leading-tight">
              <span className="block">Normiss</span>
              <span
                className="text-5xl xl:text-7xl font-bold tracking-wide"
                style={{ letterSpacing: "0.1em" }}
              >
                Fitness
              </span>
            </h1> */}
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </section>
    </>
  );
};

export default Hero;
