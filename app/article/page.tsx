import "@/app/globals.css";
import Container from "../components/reusable/Container";
import ArticleContent from "../components/article/ArticleLayout";
import TitleCard from "../components/article/TitleCard";
import BookmarkButton from "../components/article/BookmarkButton";

export default async function ArticlePage() {
  return (
    <Container>
      <TitleCard />
      <BookmarkButton />
    </Container>
  );
}
