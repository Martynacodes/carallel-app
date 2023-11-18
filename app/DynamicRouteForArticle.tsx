// import { GetServerSideProps } from "next";
// import EmptyState from "@/app/components/reusable/EmptyState";
// import { articles as mockArticles } from "@/app/mockData";

// interface Article {
//     id: number;
//     title: string;
//     subtitle: string;
//     content: string;
//     category: string;
//     url: string;
//   };
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const article = mockArticles.find(
//     (mockArticle: Article) =>
//       mockArticle.url === `/articles/${context.params?.id}`
//   );

//   return {
//     props: {
//       article,
//     },
//   };
// };

// async function getArticle(id: string) {
//   const res = await fetch(`/api/articles/${id}`);
//   const data = await res.json();
//   return data;
// }

// const ArticlePage: React.FC<Article> = ({ article }) => {
//   // const article = await getArticle(params.id);
//   // console.log(article);

//   if (!article) {
//     return <EmptyState />;
//   }

//   return (
//     <div>
//       <h1>{article.title}</h1>
//       <h2>{article.subtitle}</h2>
//       <p>{article.content}</p>
//     </div>
//   );
// };

// export default ArticlePage;
