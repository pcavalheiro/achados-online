"use client";
import { redirect } from "next/navigation";

export default function GoRedirect({
  params,
}: {
  params: { produto: string };
}) {
  const links: Record<string, string> = {
    airpods: "https://www.amazon.es/",
    smartwatch: "https://www.amazon.es/",
    aspirador: "https://www.amazon.es/",
  };

  if (links[params.produto]) redirect(links[params.produto]);
  return null;
}
