// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Navbar from "../app/components/navbar/Navbar";

// type Article = {
//   id: number;
//   title: string;
//   subtitle: string;
//   content: string;
//   category: string;
// };

// const ArticlePage = () => {
//   const [article, setArticle] = useState<Article | null>(null);
//   const router = useRouter();
//   const { id } = router.query;

//   useEffect(() => {
//     if (id) {
//       fetch(`/api/articles/${id}`)
//         .then((response) => response.json())
//         .then((data) => setArticle(data));
//     }
//   }, [id]);

//   if (!article) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <h1>{article.title}</h1>
//       <h2>{article.subtitle}</h2>
//       <p>{article.content}</p>
//     </div>
//   );
// };

// export default ArticlePage;
