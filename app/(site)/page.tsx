import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Instagram from "@/components/Instagram";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Normiss Fitness",
  description: "Normiss Fitness"
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Contact />
      {/* <Pricing /> */}
      <Instagram />
      {/* <Testimonial /> */}
    </main>
  );
}
