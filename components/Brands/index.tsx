"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
  <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
    <div className="flex flex-wrap justify-center items-center gap-7.5 md:gap-12.5 xl:gap-29">
      {brandData.map((brand, key) => (
        <SingleBrand brand={brand} key={key} />
      ))}
    </div>
  </div>
</section>
    </>
  );
};

export default Brands;
