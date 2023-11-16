import type { NextApiRequest, NextApiResponse } from "next";

type Article = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  category: string;
};

type ResponseData = Article;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Mock article data
  const article: ResponseData = {
    id: 1,
    title: "Article 1",
    subtitle: "Subtitle 1",
    content: "This is the main content of Article 1",
    category: "All",
  };

  // Return article data
  res.status(200).json(article);
}

// import type { NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
//   message: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: "Hello from THE ARTICLE page" });
// }
