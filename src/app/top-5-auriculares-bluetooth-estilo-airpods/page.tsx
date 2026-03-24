import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top 5 alternativas aos AirPods para comprar em 2026",
  description:
    "Comparação simples entre 5 auriculares Bluetooth populares para quem procura uma alternativa aos AirPods ou uma boa compra para iPhone e uso diário.",
  alternates: {
    canonical: "/top-5-auriculares-bluetooth-estilo-airpods",
  },
  openGraph: {
    type: "article",
    url: "/top-5-auriculares-bluetooth-estilo-airpods",
    title: "Top 5 alternativas aos AirPods para comprar em 2026",
    description:
      "Comparação simples entre 5 auriculares Bluetooth populares para quem procura uma alternativa aos AirPods ou uma boa compra para iPhone e uso diário.",
    images: [
      {
        url: "/images/airpods.jpg",
        alt: "Top 5 alternativas aos AirPods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 5 alternativas aos AirPods para comprar em 2026",
    description:
      "Comparação simples entre 5 auriculares Bluetooth populares para quem procura uma alternativa aos AirPods ou uma boa compra para iPhone e uso diário.",
    images: ["/images/airpods.jpg"],
  },
};

const produtos = [
  {
    id: "airpods-4-anc",
    nome: "Apple AirPods 4 com Cancelamento Ativo de Ruído",
    img: "/images/airpods.jpg",
    badge: "Melhor para iPhone",
    resumo:
      "A escolha mais simples para quem usa iPhone e quer conforto, integração rápida e uma experiência muito prática no dia a dia.",
    melhorPara: ["Utilizadores de iPhone", "Chamadas", "Uso diário"],
    pontosFortes: [
      "Integração excelente com iPhone, iPad e Mac",
      "Design leve e confortável",
      "Boa experiência para chamadas e deslocações",
    ],
    pontosFracos: [
      "Preço mais alto",
      "Menos interessantes fora do ecossistema Apple",
    ],
    destaque: "Melhor para quem quer experiência Apple sem complicações.",
    href: "/go/airpods",
  },
  {
    id: "sony-wf-c710n",
    nome: "Sony WF-C710N",
    img: "/images/sony-wf-c710n.jpg",
    badge: "Melhor equilíbrio",
    resumo:
      "Uma opção muito equilibrada para quem quer bom som, ANC competente e boa autonomia sem entrar no segmento premium mais caro.",
    melhorPara: ["Qualidade/preço", "Chamadas", "Uso diário"],
    pontosFortes: [
      "Boa combinação de som, ANC e bateria",
      "Microfones competentes para chamadas",
      "Preço mais acessível que modelos premium",
    ],
    pontosFracos: [
      "Não têm o estatuto premium dos topo de gama",
      "Menos impacto de marca do que AirPods",
    ],
    destaque: "Escolha mais equilibrada para a maioria das pessoas.",
    href: "/go/sony_wf_c710n",
  },
  {
    id: "soundcore-liberty-4-nc",
    nome: "Anker Soundcore Liberty 4 NC",
    img: "/images/liberty-4-nc.jpg",
    badge: "Melhor relação qualidade/preço",
    resumo:
      "Auriculares muito competitivos para quem quer cancelamento de ruído, bateria e muitas funcionalidades por menos dinheiro.",
    melhorPara: ["Custo/benefício", "Viagens", "Uso diário"],
    pontosFortes: [
      "Boa autonomia",
      "ANC forte para o preço",
      "Muito completos em funcionalidades",
    ],
    pontosFracos: [
      "Afinação sonora menos neutra de origem",
      "Marca menos aspiracional que Apple ou Sony",
    ],
    destaque: "Provavelmente a compra mais segura para quem quer poupar.",
    href: "/go/liberty_4_nc",
  },
  {
    id: "earfun-air-pro-4",
    nome: "EarFun Air Pro 4",
    img: "/images/earfun-air-pro-4.jpg",
    badge: "Melhor barato",
    resumo:
      "Uma das escolhas mais fortes abaixo do segmento premium, com bom som, boa app e um conjunto de funções muito completo para o preço.",
    melhorPara: ["Orçamento controlado", "ANC", "Android e iPhone"],
    pontosFortes: [
      "Preço competitivo",
      "Boa qualidade de som",
      "Muitas funções para a gama",
    ],
    pontosFracos: [
      "Marca menos conhecida",
      "Menos prestígio do que Apple ou Sony",
    ],
    destaque:
      "Faz muito sentido para quem quer gastar menos sem cair em modelos fracos.",
    href: "/go/earfun_air_pro_4",
  },
  {
    id: "soundcore-space-a40",
    nome: "Anker Soundcore Space A40",
    img: "/images/space-a40.jpg",
    badge: "Melhor abaixo de 100€",
    resumo:
      "Uma opção muito forte para quem procura ANC competente e preço mais baixo, especialmente para viagens e uso diário.",
    melhorPara: ["Até 100€", "Viagens", "Trabalho"],
    pontosFortes: [
      "Excelente valor no segmento budget",
      "ANC muito competente",
      "Formato discreto e confortável",
    ],
    pontosFracos: [
      "Não têm o som mais premium da lista",
      "Design menos apelativo para alguns utilizadores",
    ],
    destaque:
      "Boa escolha para quem quer gastar pouco e ainda assim comprar bem.",
    href: "/go/space_a40",
  },
];

export default function TopAuricularesPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <header className="mb-10">
          <p className="text-sm text-sky-700 font-medium mb-2">
            Comparação de produto
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Top 5 alternativas aos AirPods para comprar em 2026
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-4xl">
            Selecionámos 5 modelos populares para quem procura auriculares
            Bluetooth práticos, confortáveis e com boa relação qualidade/preço.
            Há opções para iPhone, alternativas mais baratas aos AirPods e
            escolhas equilibradas para uso diário, chamadas e música.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-sm text-emerald-700 font-medium">
              ✔ Comparação independente
            </span>
            <span className="inline-flex items-center rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-sm text-sky-700 font-medium">
              ✔ Atualizado em março de 2026
            </span>
            <span className="inline-flex items-center rounded-full bg-violet-50 border border-violet-200 px-3 py-1 text-sm text-violet-700 font-medium">
              ✔ Links de afiliado com transparência
            </span>
          </div>
        </header>

        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Resumo rápido
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-slate-700">
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
              <p className="font-semibold text-slate-900 mb-1">
                Melhor para iPhone
              </p>
              <p>Apple AirPods 4 com Cancelamento Ativo de Ruído</p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
              <p className="font-semibold text-slate-900 mb-1">
                Melhor equilíbrio
              </p>
              <p>Sony WF-C710N</p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
              <p className="font-semibold text-slate-900 mb-1">
                Melhor qualidade/preço
              </p>
              <p>Anker Soundcore Liberty 4 NC</p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
              <p className="font-semibold text-slate-900 mb-1">Melhor barato</p>
              <p>EarFun Air Pro 4</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          {produtos.map((produto, index) => (
            <article
              key={produto.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-slate-50 rounded-2xl p-6 flex items-center justify-center">
                  <Image
                    src={produto.img}
                    alt={produto.nome}
                    width={520}
                    height={360}
                    className="rounded-xl object-contain"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-3 py-1 rounded-full">
                      Top {index + 1}
                    </span>
                    <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">
                      {produto.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    {produto.nome}
                  </h2>

                  <p className="text-slate-700 text-lg leading-8 mb-5">
                    {produto.resumo}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {produto.melhorPara.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl bg-slate-100 p-4 text-center"
                      >
                        <p className="text-sm text-slate-500">Ideal para</p>
                        <p className="text-base font-bold text-slate-900">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                      <p className="font-semibold text-emerald-800 mb-2">
                        Pontos fortes
                      </p>
                      <ul className="text-sm text-emerald-700 space-y-1">
                        {produto.pontosFortes.map((item) => (
                          <li key={item}>✔ {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-rose-50 border border-rose-200 p-4">
                      <p className="font-semibold text-rose-800 mb-2">
                        Pontos a considerar
                      </p>
                      <ul className="text-sm text-rose-700 space-y-1">
                        {produto.pontosFracos.map((item) => (
                          <li key={item}>✖ {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                    <p className="font-semibold text-slate-900 mb-1">
                      Porque entrou neste top
                    </p>
                    <p className="text-slate-700 leading-7">
                      {produto.destaque}
                    </p>
                  </div>

                  {produto.id === "airpods-4-anc" && (
                    <Link
                      href="/airpods-pro"
                      className="block w-full md:w-fit text-center border border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition mb-3"
                    >
                      Ler análise completa
                    </Link>
                  )}

                  <Link
                    href={produto.href}
                    className="block w-full md:w-fit text-center bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-sky-700 transition"
                  >
                    👉 Ver oferta na Amazon
                  </Link>

                  <p className="text-xs text-slate-400 mt-3 leading-6">
                    Este site pode receber comissão por compras qualificadas,
                    sem custo adicional para o utilizador.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-10 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Qual escolher?
          </h2>

          <div className="space-y-4 text-slate-700 leading-8">
            <p>
              <strong>Escolhe os AirPods 4 com ANC</strong> se usas iPhone e
              queres a experiência mais simples, confortável e integrada com os
              teus dispositivos.
            </p>

            <p>
              <strong>Escolhe os Sony WF-C710N</strong> se procuras o melhor
              equilíbrio entre qualidade de som, cancelamento de ruído e preço.
            </p>

            <p>
              <strong>Escolhe os Soundcore Liberty 4 NC</strong> se queres a
              melhor relação qualidade/preço e um conjunto muito completo de
              funcionalidades.
            </p>

            <p>
              <strong>Escolhe os EarFun Air Pro 4</strong> se queres gastar
              menos e ainda assim ter bom som e cancelamento de ruído.
            </p>

            <p>
              <strong>Escolhe os Space A40</strong> se procuras uma opção mais
              económica com bom ANC para viagens ou uso diário.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
