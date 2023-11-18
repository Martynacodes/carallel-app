import "@/app/globals.css";

import { articles } from "@/app/mockData";
import EmptyState from "@/app/components/reusable/EmptyState";
import Container from "@/app/components/reusable/Container";

type ArticleProps = {
  id: string;
};

export default async function Article({ id }: ArticleProps) {
  // Find the article with the matching id
  const article = articles.find((a) => a.id === parseInt(id as string, 10));

  if (!article) {
    return <EmptyState />;
  }
  return (
    <Container>
      <h1>{article.title}</h1>
      <h2>{article.subtitle}</h2>
      <p>{article.content}</p>
      <p>{article.category}</p>
    </Container>
  );
}
