"use client";
import Link from "next/link";
import { Menu, X, TreeDeciduous } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="fixed w-full top-0 flex justify-between px-[65px] py-4 z-20 max-md:px-4">
      <div className="flex font-bold text-white items-center z-20">
        <TreeDeciduous color="white" fill="#ffffff" />
        <h1 className="pointer-events-none">TREEZY</h1>
      </div>
      <div className="flex gap-4 max-md:hidden items-center z-20">
        <Link
          href="/home"
          className="text-white hover:text-white/70 hover:scale-110 duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-white/70 hover:scale-110 duration-300"
        >
          About
        </Link>
        <Link
          href="/services"
          className="text-white hover:text-white/70 hover:scale-110 duration-300"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="text-white hover:text-white/70 hover:scale-110 duration-300"
        >
          Contact
        </Link>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      {!nav ? (
        <Menu
          className="z-50 md:hidden"
          onClick={() => setNav(!nav)}
          color="white"
        />
      ) : (
        <X
          className="z-50 md:hidden"
          onClick={() => setNav(!nav)}
          color="white"
        />
      )}

      {/* Mobile */}
      <div
        className={`absolute w-3/4 h-screen bg-black/30 backdrop-blur-sm top-0 right-0 flex flex-col gap-4 p-4 transition-all duration-300 pt-20 pl-10 max-md:text-xl
      ${nav ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"} z-10`}
      >
        <Link
          href="/home"
          className="text-white hover:text-black hover:pl-5 duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-black hover:pl-5 duration-300"
        >
          About
        </Link>
        <Link
          href="/services"
          className="text-white hover:text-black hover:pl-5 duration-300"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="text-white hover:text-black hover:pl-5 duration-300"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
