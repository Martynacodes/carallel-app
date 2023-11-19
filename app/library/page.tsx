import "@/app/globals.css";

import Navbar from "../components/navbar/Navbar";
import BottomNav from "../components/library/BottomNav";
import Container from "../components/reusable/Container";
import Categories from "../components/library/Categories";
import RecommendedArticles from "../components/library/RecommendedArticles";
import MyFamilySection from "../components/library/MyFamilySection";
import AdditionalResources from "../components/library/AdditionalResources";
import MaxWidthWrapper from "../components/library/MaxWidthWrapper";

export default function LibraryPage() {
  return (
    <>
      <MaxWidthWrapper>
        <Navbar />
        <Categories />
        <RecommendedArticles />
        <MyFamilySection />
        <AdditionalResources />
      </MaxWidthWrapper>
      <BottomNav />
    </>
  );
}
