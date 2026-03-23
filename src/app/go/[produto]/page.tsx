import { redirect } from "next/navigation";

const links: Record<string, string> = {
  airpods:
    "https://www.amazon.es/-/pt/dp/B0DGHYDYJL?crid=2LKMPX63Y8IU1&dib=eyJ2IjoiMSJ9.NB8JtwiCJPjPNOLxmFSYtaett4UgUZJR0ryV6jZw_wl2o6d4igKbquSMljMtBxXKwFy5ecdMWodHP32gZY147qpVZDC-X9cO8gklkyUE-4aNgKqnkq258utkWFLdcMduvYOuPr75w0UiqWShVHf-DETRUWIgG7FjV6CTRM12gocifUlKhane7HRwUxSi4FJG22nKU1JG4HuMg4KUDY_lf5S6ON1nNk3wwahedBSOLkxPEIWILkdKvG25XPGBJqTtKXPyBX_W5WW54FFleedxImgFttaAtRd2Ix5tLjoCsoA.JF3t7ApLahXscRDxTLGGC3fi0ln8N3uGF07BrhiAFqM&dib_tag=se&keywords=airpod%2B4&qid=1774300842&sprefix=airpod%2B4%2Caps%2C269&sr=8-1&th=1&linkCode=ll2&tag=achadosonli03-21&linkId=8460a07868225beb349554c064dda259&ref_=as_li_ss_tl",
  airpods_alt:
    "https://www.amazon.es/-/pt/dp/B0CQKGQ7C3?crid=3G8ZAD0IVEA8I&dib=eyJ2IjoiMSJ9.PlVrgdCXxzJmimoKbkO3OHsJvSywmt901oRbhOi-cv8q8Jr-I3vxJmbBCXP9VBsYFsugMJds17gdPyquyTWJWbv1zQnKc8ltjaK7nrjXB19OTs4Pn2t9xcJ5daW7DEotuUCwEGke0EX4XfzU7eCaKCsa4ldHJE-_lOZTexlRhB9oSfk1lj4a8USNxpu6PA0cave3gxWMbiK4MfuFEeH9O8mu8VTagzbQJ7iAX5OTgkDqWTWIKUXQNl2nWc8n--WoIq5dTxf1n7V9f2YY74LWaoEaKSN40z8mhwXJT3tInWM._MyImpUECDOrcFkLF6zBHCHiVDnQflPP3EjBiz5bJPo&dib_tag=se&keywords=xiaomi%2Bredmi%2Bbuds%2Bpro&qid=1774301098&sprefix=xiaomi%2Bredmi%2Bbuds%2B5%2Caps%2C343&sr=8-3&th=1&linkCode=ll2&tag=achadosonli03-21&linkId=df2f89d251128bc0914c40c3596b9b38&ref_=as_li_ss_tl",
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
