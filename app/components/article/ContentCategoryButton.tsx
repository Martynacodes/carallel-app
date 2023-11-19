"use client";

import { useState } from "react";
import { contentCategories } from "@/app/mockData";

type ContentCategory = {
  id: number;
  title: string;
};

const ContentCategoryButton = () => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div
      className="flex 
flex-wrap
items-center 
justify-center 
gap-2
p-3
border-b-2
transition
cursor-pointer
"
    >
      <button
        onClick={() => setSelected(1)}
        className={`
    font-bold
    py-4 
    px-12
    rounded-full
    inline-block  
    sm:py-3 
    sm:px-10
    hover:shadow-lg
    transition-all
    ease
    duration-400  
    sm:text-base
   
    ${selected === 1 ? "bg-yellow-400 text-white" : "bg-yellow-600 text-white"}
      `}
      >
        New to Caregiving
      </button>

      <button
        onClick={() => setSelected(2)}
        className={`
    font-bold
    py-4 
    px-12
    rounded-full
    inline-block  
    sm:py-3 
    sm:px-10 hover:shadow-lg transition-all ease duration-400  
    sm:text-base
   
    ${selected === 2 ? "bg-yellow-400 text-white" : "bg-yellow-600 text-white"}
      `}
      >
        What to Expect
      </button>
    </div>
  );
};

export default ContentCategoryButton;
