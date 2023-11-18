export const dynamic = "force-dynamic"; // defaults to force-static
export async function GET(request: Request) {
  const res = await fetch("/api/library");
  const data = await res.json();

  return Response.json({ data });
}
