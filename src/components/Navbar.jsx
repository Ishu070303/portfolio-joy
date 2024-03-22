"use client";


import Link from "next/link";
import { useState } from "react";

const links = [
  { link: "/", title: "Home" },
  { link: "/about", title: "About" },
  { link: "/contact", title: "Contact" },
  { link: "/portfolio", title: "Portfolio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LOGO */}
      <div className="">
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

      {/* RESPONSIVE BUTTON */}
      <div className="">
        {/* MENU */}
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen(prev => !prev)}>
          <div className="w-10 h-1 rounded bg-black"></div>
          <div className="w-10 h-1 rounded bg-black"></div>
          <div className="w-10 h-1 rounded bg-black"></div>
        </button>

        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.link} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
