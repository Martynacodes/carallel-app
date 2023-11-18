"use client";

import { useState } from "react";
import { categories } from "@/app/mockData";

type Category = {
  id: number;
  title: string;
};

const Categories = () => {
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
      {categories.map((category: Category) => (
        <button
          key={category.id}
          onClick={() => setSelected(category.id)}
          className={`
    font-bold
     py-4 
     px-12
      rounded-full
    inline-block  
    sm:py-3 
    sm:px-10 hover:shadow-lg transition-all ease duration-400  
    sm:text-base
   
    ${
      selected === category.id
        ? "bg-green-700 text-white"
        : "bg-white text-green"
    }
      `}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default Categories;
