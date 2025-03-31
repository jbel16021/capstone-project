"use client";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="video/squat-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center bg-white/70 dark:bg-black/70 p-6 rounded-lg">
            <h1 className="text-4xl font-bold text-black dark:text-white xl:text-6xl leading-tight">
              <span className="block">Normiss</span>
              <span
                className="text-5xl xl:text-7xl font-bold tracking-wide"
                style={{ letterSpacing: "0.1em" }}
              >
                Fitness
              </span>
            </h1>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </section>
    </>
  );
};

export default Hero;
