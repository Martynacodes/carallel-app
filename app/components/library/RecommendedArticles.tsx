// import { sortArticles } from "@/app/utils";
import Link from "next/link";
import React from "react";
import ArticleCard from "./ArticleCard";
import { articles } from "@/app/mockData";

const RecommendedArticles = () => {
  //   const sortedArticles = sortArticles(articles);
  return (
    <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex  justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Recommended
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {articles.map((article) => {
          return (
            <article
              key={article.id}
              className="col-span-1 row-span-1 relative"
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