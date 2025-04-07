"use client";

import Brands from "../Brands";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Brands Section */}
          <div className="footer-brands py-7">
            <Brands isFooter={true} /> {/* Pass isFooter as true */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
