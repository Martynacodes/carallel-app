import "@/app/globals.css";
import Container from "../components/reusable/Container";
import ArticleContent from "../components/article/ArticleLayout";
import TitleCard from "../components/article/TitleCard";
import BookmarkButton from "../components/article/BookmarkButton";
import VideoCard from "../components/article/VideoCard";
import AudioCard from "../components/article/AudioCard";
import ContentCategoryButton from "../components/article/ContentCategoryButton";
import { Content } from "next/font/google";
import ThumbsUpDown from "../components/article/ThumbsUpDown";
import RelatedResources from "../components/article/RelatedResources";

export default async function ArticlePage() {
  return (
    <Container>
      <TitleCard />
      <BookmarkButton />
      <VideoCard />
      <AudioCard />
      <ContentCategoryButton />
      <ThumbsUpDown />
      <RelatedResources />
    </Container>
  );
}
