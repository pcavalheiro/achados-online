import { redirect } from "next/navigation";

const links: Record<string, string> = {
  airpods:
    "https://www.amazon.es/-/pt/dp/B0DGHYDYJL?crid=2LKMPX63Y8IU1&dib=eyJ2IjoiMSJ9.NB8JtwiCJPjPNOLxmFSYtaett4UgUZJR0ryV6jZw_wl2o6d4igKbquSMljMtBxXKwFy5ecdMWodHP32gZY147qpVZDC-X9cO8gklkyUE-4aNgKqnkq258utkWFLdcMduvYOuPr75w0UiqWShVHf-DETRUWIgG7FjV6CTRM12gocifUlKhane7HRwUxSi4FJG22nKU1JG4HuMg4KUDY_lf5S6ON1nNk3wwahedBSOLkxPEIWILkdKvG25XPGBJqTtKXPyBX_W5WW54FFleedxImgFttaAtRd2Ix5tLjoCsoA.JF3t7ApLahXscRDxTLGGC3fi0ln8N3uGF07BrhiAFqM&dib_tag=se&keywords=airpod%2B4&qid=1774300842&sprefix=airpod%2B4%2Caps%2C269&sr=8-1&th=1&linkCode=ll2&tag=achadosonli03-21&linkId=8460a07868225beb349554c064dda259&ref_=as_li_ss_tl",
  airpods_alt:
    "https://www.amazon.es/-/pt/dp/B0CQKGQ7C3?crid=3G8ZAD0IVEA8I&dib=eyJ2IjoiMSJ9.PlVrgdCXxzJmimoKbkO3OHsJvSywmt901oRbhOi-cv8q8Jr-I3vxJmbBCXP9VBsYFsugMJds17gdPyquyTWJWbv1zQnKc8ltjaK7nrjXB19OTs4Pn2t9xcJ5daW7DEotuUCwEGke0EX4XfzU7eCaKCsa4ldHJE-_lOZTexlRhB9oSfk1lj4a8USNxpu6PA0cave3gxWMbiK4MfuFEeH9O8mu8VTagzbQJ7iAX5OTgkDqWTWIKUXQNl2nWc8n--WoIq5dTxf1n7V9f2YY74LWaoEaKSN40z8mhwXJT3tInWM._MyImpUECDOrcFkLF6zBHCHiVDnQflPP3EjBiz5bJPo&dib_tag=se&keywords=xiaomi%2Bredmi%2Bbuds%2Bpro&qid=1774301098&sprefix=xiaomi%2Bredmi%2Bbuds%2B5%2Caps%2C343&sr=8-3&th=1&linkCode=ll2&tag=achadosonli03-21&linkId=df2f89d251128bc0914c40c3596b9b38&ref_=as_li_ss_tl",
  smartwatch: "https://www.amazon.es/",
  aspirador: "https://www.amazon.es/",
  sony_wf_c710n:
    "https://www.amazon.es/-/pt/dp/B0FDBFDWLD?crid=18P1Y1BONSQW4&dib=eyJ2IjoiMSJ9.9DHUQZSjhMimcLLKrxtCQEHH-rC8W_Y2fq_SOuAudFgUkaZibmKqj9VBAPoMZGIc_RrrB47CFtv5OSsIMPd_h1IiCvWNUbW9UUNrCKxBQfHuVRTOOl1ebodLTBO82UbjDLiZmjEyb_GmS8Bhaf-nKwgNuC5EFibIxTLJTbAyvCnZBYG_uz_JQIh551GYtvZ0MxhN9roGT5yTE1xCO3ivDyQiEa1ixmbY0zsELUoVAZ0p6fYDhc0vaOL7YOvYzl_DX88yLYgcA9SL83XUcNERme4mw25q-kTaTcA3JNn8tjs.-IUZKouwxvAEQ70J1unbNgTKvRV02hEH_tdofCibLGY&dib_tag=se&keywords=sony-wf-c710n&qid=1774309588&sprefix=sony-wf-c710n%2Caps%2C279&sr=8-3&th=1&linkCode=ll2&tag=achadosonli03-21&linkId=8bd291ba28cc080be351628ca3232560&ref_=as_li_ss_tl",
  liberty_4_nc:
    "https://www.amazon.es/-/pt/dp/B0BZV4QFP8?crid=ASA27MG2280H&dib=eyJ2IjoiMSJ9.IWpQfqOPDqQsjTmHbHASlB5MMd817P74wWT82Bnpm-UrpQdt3PylN2BZ3U9gaY8rICBlcodDaGLPgUVIGTDeqZlSJEIzYV5g8eg602HurB9VbNd9XQS5jKwRo0zKVD-UUwmkWdf7e-xEa5E0XLyRGwPw9UkYdzoeamT_QfQ2NnMXBiIpj01HsWIaIJqzBSPmTXrv1kDF6AMI9hbNbK1Vgr4IgtJTn3XkbOmdpKWAVEr7H_Ny2J3pow9VdDzewgieta_9pw--NGrzkmAnkS6rmCoPTil21opDKYqbQNJ0Vxs.RV2yo1l0WFY48LqTtxYnqZCCq1s96S90mIKMhQyMLkQ&dib_tag=se&keywords=liberty-4-nc&qid=1774309673&sprefix=liberty-4-nc%2Caps%2C333&sr=8-1&th=1&linkCode=ll2&tag=achadosonli03-21&linkId=ce7b4a35881cd574684fe7a7da11992b&ref_=as_li_ss_tl",
  earfun_air_pro_4:
    "https://www.amazon.es/-/pt/dp/B0D5M9SH1X?crid=3O3KIW8Y5OSMZ&dib=eyJ2IjoiMSJ9.ISqogmuQOfdvBWFOIQg3ZPcbXoW3hDvmuVNVWTr51j8HESG4RYu4SDmrYuXW7AaKa6ua6bf6BHFMVqWIs50SmD0OFNmrqkHAWRD57MnQwLDBnhxEImfyC_Um5Ai58BYHVn461gdG1KMXctFoKKSHRDTUSxt2YsJ_WlagnDwAhrh89HipUJX6X17AKvUSCWGtZdoAPyKyghkRvWCIIc-GTcQW6MWY-cr1k_CVwUDPdrxYhhtx8c0T_SMhD3Ax2O6z39YAOLd_wem3gFjEcUuWP5CrFpaswmTcu-C51hZX4kQ.vn1upacgadjiGLLvPDTdzhrLzO5XPivbnfp3gWxMUXk&dib_tag=se&keywords=earfun_air_pro_4&qid=1774309781&sprefix=earfun_air_pro_4%2Caps%2C285&sr=8-2&th=1&linkCode=ll2&tag=achadosonli03-21&linkId=664b2a2332fef60139933c96d6b61760&ref_=as_li_ss_tl",
  space_a40:
    "https://www.amazon.es/-/pt/dp/B0B1LVC5VZ?crid=2Y20Y7DU5YD68&dib=eyJ2IjoiMSJ9.K43cr8g7Backbr1xGkyISgnvPzaxPpJwKIp6v5-F35EhCME4Qa3AQQpEFXYjXAUa1FRz_oFo3fn0s0xa1IMPFTQVpM7k-AiisotNejxEwWfDRHXMSXq7f-tk9VGySa6hOxipbNv48sAX01BEprFVSFKUM6hxaufkWdGfganvIkxen9D25uKK_KnBo_ounzr0oo8b8cddqKwUlGN8JtJVZyHwdwD_WFR2Zl49Pb_P-gfiRujthV8IcFjXvpmmM9tXJzew85E2-BJNkJFlBu5schOOsdXA7hTPXBucppaAbK0.3ELdGVrTpeTfdHhkR-H9A1ZEUk8e5RF0AG7OfA6DvaI&dib_tag=se&keywords=Anker%2BSoundcore%2BSpace%2BA40&qid=1774309832&sprefix=anker%2Bsoundcore%2Bspace%2Ba40%2Caps%2C320&sr=8-1&th=1&linkCode=ll2&tag=achadosonli03-21&linkId=640e4e2fc48b52700c0df6c4a45423d5&ref_=as_li_ss_tl",
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
