import Link from "next/link";
import ArticleCard from "./ArticleCard";

import { articles } from "@/app/mockData";

const RecommendedArticles = () => {
  return (
    <section className="mx-auto flex flex-col justify-center max-w-sm px-5 mt-6  md:max-w-full lg:max-w-full lg:px-12 xl:px-16">
      <div className="">
        <h2 className=" font-playfair text-left text-2xl ">Recommended</h2>
      </div>
      <div className=" flex flex-row gap-4 overflow-y-auto mt-8 lg:grid lg:grid-cols-3 xl:grid-cols-3 lg:overflow-visible">
        {articles.map((article) => {
          return (
            <article
              key={article.id}
              className="min-w-[200px] sm:min-w-0 sm:w-full"
            >
              <ArticleCard article={article} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecommendedArticles;
