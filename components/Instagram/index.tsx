"use client";
import React from "react";
import instagramData from "./instagramData";
import SingleInstagram from "./SingleInstragram";
import SectionHeader from "../Common/SectionHeader";

const Instagram = () => {
  return (
    <>
      <section id="instagram" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "Sign up For My Coaching",
              subtitle: "what is your primary fitness goal?",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.`,
            }}
          />

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">

            {instagramData.map((feature, key) => (
              <SingleInstagram feature={feature} key={key} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Instagram;
