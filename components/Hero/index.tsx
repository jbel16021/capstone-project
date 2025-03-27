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


        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 z-10">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2 bg-white/70 dark:bg-black/70 p-6 rounded-lg">
              {/* <img
                src="images/brand/normiss-fitness-logo-svg.svg"
                alt="Dotted"
                className=""
              /> */}
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Stay Inspired and Informed{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                </span>
              </h1>
            </div>
          </div>
        </div>


        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </section>

    </>
  );
};

export default Hero;
