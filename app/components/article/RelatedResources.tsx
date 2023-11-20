import Link from "next/link";
import ArticleCard from "../library/ArticleCard";

import { articles } from "@/app/mockData";

const RecommendedArticles = () => {
  return (
    <section className="mx-auto flex flex-col justify-center max-w-sm mt-6">
      <div className="">
        <h2 className=" font-playfair text-left text-2xl ">Recommended</h2>
      </div>
      <div className=" flex flex-row gap-4 overflow-y-auto mt-8 ">
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
