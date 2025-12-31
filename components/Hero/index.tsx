"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Extend the Navigator interface to include the connection property
interface NavigatorConnection {
  effectiveType: string;
}
interface ExtendedNavigator extends Navigator {
  connection?: NavigatorConnection;
}

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("video/0331.mp4"); // Default to desktop video

  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      const connection = (navigator as ExtendedNavigator).connection;

      if (connection) {
        // Check the effective connection type
        const effectiveType = connection.effectiveType;

        if (effectiveType === "slow-2g" || effectiveType === "2g" || effectiveType === "3g") {
          setVideoSrc("video/video-low.mp4"); // Serve low-quality video for slow connections
        } else if (effectiveType === "4g") {
          setVideoSrc("video/video-mid.mp4"); // Serve medium-quality video for fast mobile
        } else {
          setVideoSrc("video/video-high.mp4"); // Serve high-quality video for fast Wi-Fi
        }
      }
    }
  }, []);

  return (
    <>
      <section className="relative overflow-hidden md:pt-40 xl:pb-25 xl:pt-46 min-h-screen">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover min-h-screen"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center p-6 rounded-lg absolute bottom-10 md:bottom-auto md:static">
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
