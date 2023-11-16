// pages/api/login.ts
// import { NextApiRequest, NextApiResponse } from 'next';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   // You can handle POST request here for login
//   if (req.method === 'POST') {
//     // Mock user data
//     const user = { id: 1, name: 'John Doe' };

//     // Return user data
//     res.status(200).json(user);
//   } else {
//     // Handle any other HTTP method
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: "Hello from Login page!" });
}
