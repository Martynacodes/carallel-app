// import type { NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
//   message: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: "Hello from the LIBRARY" });
// }

import type { NextApiRequest, NextApiResponse } from "next";

type Article = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  category: string;
};

type ResponseData = Article[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Mock library data
  const library: ResponseData = [
    {
      id: 1,
      title: "Article 1",
      subtitle: "Subtitle 1",
      content: "This is the main content of Article 1",
      category: "All",
    },
    {
      id: 2,
      title: "Article 2",
      subtitle: "Subtitle 2",
      content: "This is the main content of Article 2",
      category: "All",
    },

    // Add more articles here
  ];

  // Return library data
  res.status(200).json(library);
}
