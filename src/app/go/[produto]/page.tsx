import { getAffiliateUrl } from "@/content/affiliate-links";
import { notFound, redirect } from "next/navigation";

export default async function GoRedirect({
  params,
}: {
  params: Promise<{ produto: string }>;
}) {
  const { produto } = await params;
  const destino = getAffiliateUrl(produto);
  if (!destino) {
    notFound();
  }
  redirect(destino);
}
