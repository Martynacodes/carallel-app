"use client";

import Link from "next/link";
import { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { LuCheckCircle } from "react-icons/lu";
import { AiOutlineTool } from "react-icons/ai";
import { FcOnlineSupport } from "react-icons/fc";

import useNavigation from "@/app/hooks/useNavigation";
import useScrollingEffect from "@/app/hooks/useScroll";

const BottomNav = () => {
  const scrollDirection = useScrollingEffect(); // Use the custom hook
  const navClass = scrollDirection === "up" ? "" : "opacity-25 duration-500";

  const [activeLink, setActiveLink] = useState("");
  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div
      className={`fixed bottom-0 w-full py-4 z-10 bg-orange-50 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg sm:hidden ${navClass}`}
    >
      <div className="flex flex-row justify-around items-center bg-transparent w-full mb-3">
        <Link href="#">
          <BiHomeAlt
            onClick={() => handleClick("home")}
            className={`
            flex
            items-center
            relative
            ${activeLink === "home" ? "text-green-700" : "text-slate-500"}
            `}
            size="1.5rem"
          />
        </Link>
        <Link href="#" className="flex items-center">
          <FiBook
            onClick={() => handleClick("library")}
            className={`
          flex
          items-center
          relative
          ${activeLink === "library" ? "text-green-700" : "text-slate-500"}
          `}
            size="1.5rem"
          />
        </Link>
        <Link href="#" className="flex items-center">
          <LuCheckCircle
            onClick={() => handleClick("plan")}
            className={`
          flex
          items-center
          relative
          ${activeLink === "plan" ? "text-green-700" : "text-slate-500"}
          `}
            size="1.5rem"
          />
        </Link>
        <Link href="#" className="flex items-center">
          <AiOutlineTool
            onClick={() => handleClick("tools")}
            className={`
          flex
          items-center
          relative
          ${activeLink === "tools" ? "text-green-700" : "text-slate-500"}
          `}
            size="1.5rem"
          />
        </Link>
        <Link href="#" className="flex items-center">
          <FcOnlineSupport
            onClick={() => handleClick("support")}
            className={`
          flex
          items-center
          relative
          ${activeLink === "support" ? "text-green-700" : "text-slate-500"}
          `}
            size="1.5rem"
          />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
