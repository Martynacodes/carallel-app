import Link from "next/link";
import ArticleCard from "../library/ArticleCard";

import { articles } from "@/app/mockData";

const RelatedResources = () => {
  return (
    <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between pl-5 sm:pl-10 md:pl-24 sxl:pl-32">
        <h2 className="font-playfair w-fit inline-block sm:mb-8 text-2xl md:text-4xl text-dark dark:text-light mb-4">
          Related Resources
        </h2>
      </div>

      <div className="flex overflow-x-auto space-x-4 pl-5 sm:pl-10 md:pl-24 sxl:pl-32">
        {articles.map((article) => {
          return (
            <article key={article.id} className="w-56 flex-shrink-0 font-sans">
              <ArticleCard article={article} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedResources;
