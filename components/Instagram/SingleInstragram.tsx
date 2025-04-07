"use client";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

import React, { useEffect } from "react";
import { motion } from "framer-motion";

const SingleInstagram = ({
  feature: { title, description, embed_code },
}: {
  feature: { title: string; description: string; embed_code: string };
}) => {
  useEffect(() => {
    // Ensure Instagram embeds are reloaded on the client
    if (typeof window !== "undefined" && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -10,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
    >
      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
        {title}
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
      <div
        className="instagram-embed-container"
        dangerouslySetInnerHTML={{ __html: embed_code }}
      />
    </motion.div>
  );
};

export default SingleInstagram;
