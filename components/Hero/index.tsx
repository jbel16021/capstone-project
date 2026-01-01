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
  const [isMobileView, setIsMobileView] = useState<boolean | null>(null);

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

  // Detect mobile viewport on the client so we only render the appropriate image
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const handle = (e: MediaQueryListEvent | MediaQueryList) => setIsMobileView((e as any).matches ?? mq.matches);
    // Set initial
    setIsMobileView(mq.matches);
    // Add listener (use addEventListener if available)
    if (mq.addEventListener) mq.addEventListener("change", handle as any);
    else mq.addListener(handle as any);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handle as any);
      else mq.removeListener(handle as any);
    };
  }, []);

  return (
    <>
      <section className="relative overflow-hidden pt-12 md:pt-20 xl:pb-25 xl:pt-24 min-h-screen">
        {/* Background Image (offset to sit below fixed header) */}
        <div className="absolute left-0 right-0 top-12 bottom-0 -z-10 md:top-20 xl:top-24">
          {isMobileView === null ? null : isMobileView ? (
            <Image
              src="/images/brand/zoom-enero-2026-mobile.png"
              alt="Hero banner mobile"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          ) : (
            <Image
              src="/images/brand/zoom-enero-2026.jpg"
              alt="Hero banner"
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        {/* Logo positioned bottom-right */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20">
          <Image
            src="/images/brand/normiss-fitness-logo-svg.svg"
            alt="Normiss Fitness Logo"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        {/*
          Original video and centered content preserved below (commented out)
          Uncomment if you want to revert to the video-based hero.

          <div>
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

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center p-6 rounded-lg absolute bottom-10 md:bottom-auto md:static">
                <Image
                  src="/images/brand/normiss-fitness-logo-svg.svg"
                  alt="Normiss Fitness Logo"
                  width={200}
                  height={200}
                  className="mx-auto md:w-[500px] md:h-[500px]"
                />
              </div>
            </div>
          </div>
        */}
      </section>
    </>
  );
};

export default Hero;
