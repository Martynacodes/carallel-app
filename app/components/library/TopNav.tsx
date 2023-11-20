"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const TopNav = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div className="fixed top-0 w-full py-4 z-10 bg-orange-50 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg sm:hidden">
      <div className="flex flex-row justify-around items-center bg-transparent w-full mb-3">
        <Link href="#">
          <IoSettingsOutline
            onClick={() => handleClick("settings")}
            className={`
        flex
        items-center
        relative
        ${activeLink === "settings" ? "text-green-700" : "text-slate-500"}
        `}
            size="1.5rem"
          />
        </Link>
        <h2 className="font-playfair font-xl flex items-center relative">
          Library
        </h2>
        <Link href="#" className="flex items-center">
          <IoMdNotificationsOutline
            onClick={() => handleClick("notifications")}
            className={`
          flex
          items-center
          relative
          ${
            activeLink === "notifications" ? "text-green-700" : "text-slate-500"
          }
          `}
            size="1.5rem"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
