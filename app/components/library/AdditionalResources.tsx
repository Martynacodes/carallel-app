import Link from "next/link";
import ResourcesCard from "./ResourcesCard";

import { additionalResources } from "@/app/mockData";

const AdditionalResources = () => {
  return (
    <section className="w-full mt-10 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className=" font-playfair w-fit inline-block text-2xl md:text-4xl text-dark dark:text-light">
          Additional Resources
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {additionalResources.map((resource) => {
          return (
            <ResourcesCard key={resource.id} AdditionalResources={resource} />
          );
        })}
      </div>
    </section>
  );
};

export default AdditionalResources;
