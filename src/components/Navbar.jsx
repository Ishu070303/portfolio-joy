"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { link: "/", title: "Home" },
  { link: "/about", title: "About" },
  { link: "/contact", title: "Contact" },
  { link: "/portfolio", title: "Portfolio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },

    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },

    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },

    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href={"/"}
          className="text-sm font-semibold bg-black rounded-md p-1 flex items-center justify-center"
        >
          <span className="text-white mr-1">Eshika</span>
          <span className="w-12 h-8 bg-white text-black rounded flex items-center justify-center">
            .Dev
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 w-1/3">
        <Link href={"/"}>
          <Image src="/insta.png" alt="Instgram" width={24} height={24} />
        </Link>

        <Link href={"/"}>
          <Image src="/git.png" alt="Github" width={24} height={24} />
        </Link>

        <Link href={"/"}>
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        </Link>

        <Link href={"/"}>
          <Image src="/linkedin.png" alt="Github" width={24} height={24} />
        </Link>

        <Link href={"/"}>
          <Image src="/pinterest.png" alt="Pinterest" width={24} height={24} />
        </Link>
      </div>

      {/* RESPONSIVE BUTTON */}
      <div className="md:hidden">
        {/* MENU */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 rounded bg-black origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 rounded bg-black"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 rounded bg-black origin-left"
          ></motion.div>
        </button>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-[125%] bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div key={link.title} variants={listItemVariants}>
                <Link href={link.link}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
