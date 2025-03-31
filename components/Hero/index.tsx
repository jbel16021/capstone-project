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
      <section className="relative overflow-hidden md:pt-40 xl:pb-25 xl:pt-46 min-h-screen">
        {/* Background Video for Desktop */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover min-h-screen hidden md:block"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="video/0331.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Background Video for Mobile */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover min-h-screen block md:hidden"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="video/0331-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div
            className="text-center p-6 rounded-lg absolute bottom-10 md:bottom-auto md:static"
          >
            <Image
              src="/images/brand/normiss-fitness-logo-svg.svg"
              alt="Normiss Fitness Logo"
              width={200} // Smaller size for mobile
              height={200}
              className="mx-auto md:w-[500px] md:h-[500px]" // Larger size for desktop
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
