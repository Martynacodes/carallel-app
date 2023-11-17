export const dynamic = "force-dynamic"; // defaults to force-static
export async function GET(request: Request) {
  const res = await fetch("/api/library");
  const data = await res.json();

  return Response.json({ data });
}

// export async function GET() {
//   const res = await fetch("/api/library", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await res.json();

//   return Response.json({ data });
// }

// import type { NextApiRequest, NextApiResponse } from "next";

// type Article = {
//   id: number;
//   title: string;
//   subtitle: string;
//   content: string;
//   category: string;
// };

// type ResponseData = Article[];

// export async function GET(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ): Promise<void> {
//   // Mock library data
//   const library: ResponseData = [
//     {
//       id: 1,
//       title: "Article 1",
//       subtitle: "Subtitle 1",
//       content: "This is the main content of Article 1",
//       category: "All",
//     },
//     {
//       id: 2,
//       title: "Article 2",
//       subtitle: "Subtitle 2",
//       content: "This is the main content of Article 2",
//       category: "All",
//     },
//     // Add more articles here
//   ];

//   // Return library data
//   res.status(200).json(library);
// }

// Use the GET function as the route handler
// export default GET;
