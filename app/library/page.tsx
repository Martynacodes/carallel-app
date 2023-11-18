import "@/app/globals.css";
import Container from "../components/reusable/Container";
import RecommendedArticles from "../components/library/RecommendedArticles";

export default async function Library() {
  // const data = await getData();

  return (
    <Container>
      <RecommendedArticles />
    </Container>
  );
}
