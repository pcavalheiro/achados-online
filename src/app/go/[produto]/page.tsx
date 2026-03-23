import { redirect } from "next/navigation";

const links: Record<string, string> = {
  airpods: "https://www.amazon.es/",
  smartwatch: "https://www.amazon.es/",
  aspirador: "https://www.amazon.es/",
};

export default async function GoRedirect({
  params,
}: {
  params: Promise<{ produto: string }>;
}) {
  const { produto } = await params;
  const destino = links[produto] ?? "https://www.amazon.es/";
  redirect(destino);
}
