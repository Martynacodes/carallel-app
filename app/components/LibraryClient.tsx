"use client";

import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Container from "@/app/components/reusable/Container";
import CategoriesFilter from "@/app/components/library/CategoriesFilter";
import ArticleCard from "@/app/components/library/ArticleCard";
import CircleCard from "@/app/components/library/CircleCard";
import ResourceCard from "@/app/components/library/ResourceCard";
import {
  articles,
  articleCategories,
  additionalResources,
} from "@/app/mockData";

interface ArticleClientProps {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  category: string;
}
const LibraryClient: React.FC<ArticleClientProps> = ({
  id,
  title,
  subtitle,
  content,
  category: initialCategory,
}) => {
  const router = useRouter();
  const [category, setCategory] = useState<string>(initialCategory);

  // axios.get("/api/library").catch(() => {
  //   toast.error("Something went wrong :(");
  // });

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <CategoriesFilter category={category} setCategory={setCategory} />
        <h2>Recommended</h2>
        <div className="flex overflow-x-scroll">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>

        <h2>Circle Cards</h2>
        <div className="flex overflow-x-scroll">
          {articleCategories.map((category) => (
            <CircleCard key={category.id} {...category} />
          ))}
        </div>

        <h2>Additional Resources</h2>
        <hr />
        <div className="flex overflow-x-scroll">
          {additionalResources.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LibraryClient;
