// async function getData() {
//   const res = await fetch("/api/library");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
import "@/app/globals.css";

export default async function Library() {
  // const data = await getData();

  return (
    <main>
      <h1>Hello from the LIBRARY!</h1>
    </main>
  );
}
