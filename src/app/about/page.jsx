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
<<<<<<< HEAD
            <h1 className="font-bold text-2xl">BIOGRAPGY</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              esse impedit, eum aliquid, itaque doloribus, animi dignissimos
              velit dolorem debitis ipsa harum sed ipsum. Minima veritatis
              explicabo hic nihil magni, consectetur odit quas ipsum consequatur
              libero tenetur facilis molestias veniam id sapiente modi
              repudiandae optio dolorum? Maiores exercitationem non commodi
              officiis, veniam quaerat tenetur.
            </p>
            <span className="italic">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente?
            </span>
            <div className="self-end"></div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M12 2C17.5229 2 22 9.37156 22 12C22 14.6284 17.5229 22 12 22C6.47715 22 2 14.6284 2 12C2 9.37156 6.47715 2 12 2Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
            </svg>
=======
            <h1>BIOGRAPGY</h1>
            <p></p>
>>>>>>> c937e28a0609c17daa0aa4136722ec559aa86e8c
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
