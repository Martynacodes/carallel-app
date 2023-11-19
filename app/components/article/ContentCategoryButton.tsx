"use client";

import { useState } from "react";
import { contentCategories } from "@/app/mockData";

type ContentCategory = {
  id: number;
  title: string;
};

const ContentCategoryButton = () => {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
  };

  const buttonData = [
    { id: 1, text: "New to Caregiving", categoryPage: "/" },
    { id: 2, text: "What to Expect", categoryPage: "/" },
  ];

  return (
    <div className="flex items-center gap-4">
      {buttonData.map((button) => (
        <button
          key={button.id}
          onClick={handleClick}
          className={`
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
            hover:bg-yellow-400
            transition-all
            ease
            duration-400  
            whitespace-nowrap
            ${
              selected ? "bg-yellow-400 text-white" : "bg-yellow-600 text-white"
            }
          `}
          type="button"
          data-ripple-light="true"
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default ContentCategoryButton;
