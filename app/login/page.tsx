"use client";
// Remember you must use an AuthProvider for
// client components to useSession
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import Navbar from "../components/navbar/Navbar";
import UserCard from "../components/login/UserCard";

export default function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  return (
    <>
      <Navbar />
      <section className="flex flex-col gap-6 bg-orange-100">
        <UserCard user={session?.user} pagetype={"Client"} />
      </section>
    </>
  );
}
