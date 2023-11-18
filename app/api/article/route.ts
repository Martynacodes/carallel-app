export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetch(`/api/article/${id}`);
  const data = await res.json();

  return Response.json({ data });
}
