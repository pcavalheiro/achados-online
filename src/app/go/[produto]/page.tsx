import { redirect } from "next/navigation";

const links: Record<string, string> = {
  airpods: "https://amzn.to/4m6pbjj/",
  airpods_alt: "https://amzn.to/40Lm3zr",
  smartwatch: "https://www.amazon.es/",
  aspirador: "https://www.amazon.es/",
};

export default async function GoRedirect({
  params,
}: {
  params: Promise<{ produto: string }>;
}) {
  const { produto } = await params;
  const destino = links[produto];
  redirect(destino);
}
