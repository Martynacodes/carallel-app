import "@/app/globals.css";
import Container from "../components/reusable/Container";
import Categories from "../components/library/Categories";
import RecommendedArticles from "../components/library/RecommendedArticles";
import MyFamilySection from "../components/library/MyFamilySection";
import AdditionalResources from "../components/library/AdditionalResources";

export default async function LibraryPage() {
  return (
    <Container>
      <Categories />
      <RecommendedArticles />
      <MyFamilySection />
      <AdditionalResources />
    </Container>
  );
}
