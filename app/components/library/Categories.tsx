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
      className="
      flex 
      flex-wrap
      items-center 
      justify-center 
      gap-2
      p-3
      transition
      cursor-pointer
      md:pt-0
      pt-20
      md:mt-4
      lg:mt-4
  xl:mt-6
      "
    >
      {categories.map((category: Category) => (
        <button
          key={category.id}
          onClick={() => setSelected(category.id)}
          className={`
        font-bold
        py-3
        px-5
        text-sm
        rounded-full
        inline-block
        hover:shadow-lg
        transition-all
        ease
        duration-400
        sm:py-3
        sm:px-10
        sm:text-base
        text-green-700
   
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
