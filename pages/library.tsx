import { useEffect, useState } from "react";

import Navbar from "../app/components/navbar/Navbar";
import CategoriesFilter from "@/app/components/library/CategoriesFilter";
import ArticleCard from "@/app/components/library/ArticleCard";
import CircleCard from "@/app/components/library/CircleCard";
import ResourceCard from "@/app/components/library/ResourceCard";

type Article = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  category: string;
};

const Library = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("/api/library")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const filteredArticles = articles.filter(
    (article) => category === "All" || article.category === category
  );

  return (
    <div>
      <Navbar />
      <CategoriesFilter category={category} setCategory={setCategory} />
      <h2>Recommended</h2>
      <div className="flex overflow-x-scroll">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>

      <h2>Circle Cards</h2>
      <div className="flex overflow-x-scroll">
        {filteredArticles.map((article) => (
          <CircleCard key={article.id} {...article} />
        ))}
      </div>

      <h2>Additional Resources</h2>
      <hr />
      <div className="flex overflow-x-scroll">
        {filteredArticles.map((article) => (
          <ResourceCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Library;
