import Link from "next/link";

import { myFamilySectionOptions } from "@/app/mockData";
import CircleCard from "./CircleCard";

const MyFamilySection = () => {
  return (
    <section className="mx-auto flex flex-col justify-center max-w-sm px-5 mt-8">
      <div className="flex flex-row gap-4 overflow-y-auto">
        {myFamilySectionOptions.map((option) => {
          return (
            <article
              key={option.id}
              className="min-w-[200px] sm:min-w-0 sm:w-full p-4"
            >
              <CircleCard familySectionOptions={option} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MyFamilySection;
