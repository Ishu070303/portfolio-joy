"use client";

import { motion } from "framer-motion";

const Aboutpage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="">
        {/* Text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* Biograpgy Container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1>BIOGRAPGY</h1>
            <p></p>
          </div>

          {/* Skills */}
          <div className="">Skills</div>

          {/* Experience */}
          <div className="">Experience</div>
        </div>

        {/* Svg Container */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default Aboutpage;
