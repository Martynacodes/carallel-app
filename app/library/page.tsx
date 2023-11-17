import ClientOnly from "@/app/components/reusable/ClientOnly";
import EmptyState from "@/app/components/reusable/EmptyState";
import LibraryClient from "./LibraryClient";

type Article = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  category: string;
};

async function getData() {
  const response = await fetch("/api/library");
  if (!response.ok) throw new Error("Failed to fetch data.");
  const data = await response.json();
  return data;
}

export default async function Library() {
  const data = await getData();

  if (!data) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return (
    <div>
      <ClientOnly>
        <LibraryClient
          id={0}
          title={""}
          subtitle={""}
          content={""}
          category={""}
        />
      </ClientOnly>
    </div>
  );
}
