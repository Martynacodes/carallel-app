import { GetServerSideProps } from "next";

import "@/app/globals.css";
import Container from "../reusable/Container";
import TitleCard from "./TitleCard";
import EmptyState from "../reusable/EmptyState";
import { articles as mockArticles } from "@/app/mockData";

interface Article {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  category: string;
  url: string;
}

interface ArticleContentProps {
  article: Article | null;
}

export const getServerSideProps: GetServerSideProps<
  ArticleContentProps
> = async () => {
  const article =
    mockArticles.find((mockArticle) => mockArticle.id === 1) || null;

  return {
    props: {
      article,
    },
  };
};

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  if (!article) {
    return <EmptyState />;
  }

  return (
    <Container>
      <TitleCard key={article.id} article={article} />
    </Container>
  );
};

export default ArticleContent;
