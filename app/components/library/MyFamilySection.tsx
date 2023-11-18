import Link from "next/link";

import { myFamilySectionOptions } from "@/app/mockData";
import CircleCard from "./CircleCard";

const MyFamilySection = () => {
  return (
    <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {myFamilySectionOptions.map((option) => {
          return (
            <article key={option.id} className="col-span-1 row-span-1 relative">
              <CircleCard familySectionOptions={option} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MyFamilySection;
