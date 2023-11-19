"use client";

import Link from "next/link";
import useState from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { LuCheckCircle } from "react-icons/lu";
import { AiOutlineTool } from "react-icons/ai";

import useNavigation from "@/app/hooks/useNavigation";
import useScrollingEffect from "@/app/hooks/useScroll";

const BottomNav = () => {
  const scrollDirection = useScrollingEffect(); // Use the custom hook
  const navClass = scrollDirection === "up" ? "" : " duration-500";

  const { isHomeActive, isLibraryActive, isPlanActive, isToolsActive } =
    useNavigation();

  return (
    <div
      className={`fixed bottom-0 w-full py-4 z-10 bg-zinc-100 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg sm:hidden ${navClass}`}
    >
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        <Link href="#" className="flex items-center relative">
          {isHomeActive ? (
            <BiHomeAlt icon="mingcute:home-5-fill" width="32" height="32" />
          ) : (
            <BiHomeAlt icon="mingcute:home-5-line" width="32" height="32" />
          )}
          {/* <span className="h-2 w-2 rounded-full bg-sky-500 absolute -top-0.5 right-[3px]"></span> */}
        </Link>
        <Link href="#" className="flex items-center">
          {isLibraryActive ? (
            <FiBook
              icon="uil:search"
              width="32"
              height="32"
              className="stroke-current stroke-5"
            />
          ) : (
            <FiBook icon="uil:search" width="32" height="32" />
          )}
        </Link>
        <Link href="#" className="flex items-center">
          {isPlanActive ? (
            <LuCheckCircle
              icon="mingcute:notification-fill"
              width="32"
              height="32"
            />
          ) : (
            <LuCheckCircle
              icon="mingcute:notification-line"
              width="32"
              height="32"
            />
          )}
        </Link>
        <Link href="#" className="flex items-center">
          {isToolsActive ? (
            <AiOutlineTool icon="ic:baseline-email" width="32" height="32" />
          ) : (
            <AiOutlineTool icon="ic:outline-email" width="32" height="32" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
