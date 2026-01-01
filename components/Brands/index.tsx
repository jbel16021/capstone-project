"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = ({ isFooter = false }: { isFooter?: boolean }) => {
  return (
    <>
      <section
        className={`${
          isFooter
            ? "" // No background or border for footer
            : "border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black"
        }`}
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {!isFooter && (
            <div className="w-full text-center mb-4">
              <span className="mb-5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Sígueme en mis redes.
              </span>
            </div>
          )}

          <div
            className={`flex flex-wrap justify-center items-center ${
              isFooter ? "gap-4" : "gap-7.5 md:gap-12.5 xl:gap-29"
            }`}
          >
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
