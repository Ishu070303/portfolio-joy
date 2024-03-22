"use client";

import Image from "next/image";
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
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <Link key={link.title} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
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
