"use client";
import { useState } from "react";

const BookmarkButton = () => {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleClick}
        className={`
        ml-0
        mt-0
        m-4
        flex
        select-none
        items-center
        gap-3 
        rounded-3xl  
        py-2 
        px-3.5
        text-center
        align-middle 
        font-sans
        text-xs
        font-bold
        transition-all
        hover:bg-green-400
        focus:opacity-[0.85]
        focus:shadow-none
       ease duration-400
        ${selected ? "bg-green-700 text-white" : "bg-slate-200 text-green-700"}
        `}
        type="button"
        data-ripple-light="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          ></path>
        </svg>
        Bookmark
      </button>
    </div>
  );
};

export default BookmarkButton;
