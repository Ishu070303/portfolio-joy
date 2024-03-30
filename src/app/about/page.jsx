"use client";

import { motion } from "framer-motion";
import { skills } from "../../../data";

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
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
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
                d="M12 2C16.9639 2 21.112 6.18483 21.112 11.0407C21.112 15.8965 16.9639 22 12 22C7.03607 22 2.888 15.8965 2.888 11.0407C2.888 6.18483 7.03607 2 12 2Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
            </svg>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>

            <div className="flex gap-4 flex-wrap">
              { skills.map((skill) => (
                <div key={skill.id} className="rounded p-2 bg-black cursor-pointer text-white hover:bg-white hover:text-black">{skill.skill}</div>
              ))}
            </div>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M12 2C16.9639 2 21.112 6.18483 21.112 11.0407C21.112 15.8965 16.9639 22 12 22C7.03607 22 2.888 15.8965 2.888 11.0407C2.888 6.18483 7.03607 2 12 2Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
            </svg>

          {/* Experience */}
          <div className="">Experience</div>
        </div>

        {/* Svg Container */}
        <div className="hidden"></div>
      </div>
      </div>
    </motion.div>
  );
};

export default Aboutpage;
