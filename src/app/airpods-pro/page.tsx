import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AirPods 4 com cancelamento de ruído – Vale a pena comprar?",
  description:
    "Análise simples e direta para perceber se os AirPods 4 com cancelamento ativo de ruído valem a pena em 2026.",
  alternates: {
    canonical: "/airpods-pro",
  },
  openGraph: {
    type: "article",
    url: "/airpods-pro",
    title: "AirPods 4 com cancelamento de ruído – Vale a pena comprar?",
    description:
      "Análise simples e direta para perceber se os AirPods 4 com cancelamento ativo de ruído valem a pena em 2026.",
    images: [
      {
        url: "/images/airpods.jpg",
        alt: "AirPods 4 com cancelamento de ruído",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AirPods 4 com cancelamento de ruído – Vale a pena comprar?",
    description:
      "Análise simples e direta para perceber se os AirPods 4 com cancelamento ativo de ruído valem a pena em 2026.",
    images: ["/images/airpods.jpg"],
  },
};

export default function AirpodsPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <p className="text-sm text-sky-700 font-medium mb-2">
            Review de produto
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            AirPods 4 com cancelamento de ruído – Vale a pena comprar?
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Uma análise simples e direta para perceber se os AirPods 4 com
            cancelamento ativo de ruído continuam a ser uma boa escolha para
            quem procura qualidade de som, conforto e uma experiência premium no
            dia a dia.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-sm text-emerald-700 font-medium">
              ✔ Análise independente
            </span>
            <span className="inline-flex items-center rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-sm text-sky-700 font-medium">
              ✔ Atualizado em março de 2026
            </span>
            <span className="inline-flex items-center rounded-full bg-violet-50 border border-violet-200 px-3 py-1 text-sm text-violet-700 font-medium">
              ✔ Compra feita na Amazon
            </span>
          </div>
        </div>

        <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <div className="bg-slate-50 rounded-2xl p-6 flex items-center justify-center">
            <Image
              src="/images/airpods.jpg"
              alt="AirPods 4 com cancelamento de ruído"
              width={520}
              height={420}
              className="rounded-xl object-contain"
              priority
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Destaque
            </div>

            <p className="text-amber-500 text-lg mb-2">
              ★★★★☆
              <span className="text-slate-500 text-sm ml-2">(4.6/5)</span>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Excelente opção para quem quer som premium no dia a dia
            </h2>

            <p className="text-slate-700 text-lg leading-8 mb-5">
              Os AirPods 4 destacam-se pela qualidade de som, conforto e
              cancelamento ativo de ruído. São uma opção muito forte para quem
              usa auriculares todos os dias, especialmente em deslocações,
              trabalho, chamadas e utilização com outros dispositivos Apple.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="rounded-xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">Qualidade de som</p>
                <p className="text-lg font-bold text-slate-900">Muito boa</p>
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">Conforto</p>
                <p className="text-lg font-bold text-slate-900">Elevado</p>
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">Ruído</p>
                <p className="text-lg font-bold text-slate-900">
                  Cancelamento ativo
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">Ideal para</p>
                <p className="text-lg font-bold text-slate-900">Uso diário</p>
              </div>
            </div>

            <div className="mt-6 bg-slate-100 rounded-xl p-4 mb-6">
              <p className="font-semibold mb-2 text-slate-900">Ideal para:</p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>✔ Quem quer qualidade de som</li>
                <li>✔ Uso diário e chamadas</li>
                <li>✔ Utilizadores de iPhone</li>
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
              <p className="font-semibold text-emerald-800 mb-2">
                Compra segura
              </p>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>✔ Ao clicar no botão, serás redirecionado para a Amazon</li>
                <li>✔ A compra não é feita neste site</li>
                <li>✔ Pagamento, envio e devolução são tratados pela Amazon</li>
              </ul>
            </div>

            <Link
              href="/go/airpods"
              className="block w-full md:w-fit text-center bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-sky-700 transition"
            >
              👉 Ver preço atual na Amazon
            </Link>

            <p className="text-sm text-slate-500 mt-3">
              🔥 Produto muito procurado por utilizadores Apple
            </p>

            <p className="text-xs text-slate-400 mt-1">
              Disponível na Amazon · Entrega rápida · Compra com segurança
            </p>

            <p className="text-xs text-slate-400 mt-2 leading-6">
              Este site participa em programas de afiliados. Isso significa que
              podemos receber uma pequena comissão por compras qualificadas, sem
              qualquer custo adicional para ti.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Vale a pena?
            </h2>

            <p className="text-slate-700 leading-7">
              Sim, sobretudo para quem valoriza conforto, boa qualidade de som e
              cancelamento de ruído. Não é a opção mais barata, mas continua a
              ser uma escolha premium muito consistente.
            </p>
          </div>
        </section>

        <section className="mt-10 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Porque esta página é confiável
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-slate-50 p-5 border border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">
                Análise direta
              </p>
              <p className="text-slate-600 leading-7 text-sm">
                O objetivo desta página é resumir de forma clara os pontos
                fortes e fracos do produto, sem exageros nem promessas irreais.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5 border border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">Transparência</p>
              <p className="text-slate-600 leading-7 text-sm">
                Indicamos claramente que este site usa links de afiliado e que a
                compra final é feita na Amazon.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5 border border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">
                Foco no utilizador
              </p>
              <p className="text-slate-600 leading-7 text-sm">
                Esta recomendação faz mais sentido para quem já usa iPhone e
                quer praticidade no dia a dia.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Descrição</h2>

          <p className="text-slate-700 leading-8">
            Os AirPods 4 com cancelamento ativo de ruído oferecem uma
            experiência sonora equilibrada e confortável para utilização
            prolongada. O cancelamento de ruído ajuda a reduzir distrações,
            enquanto funcionalidades como o áudio adaptativo e o modo ambiente
            tornam a utilização mais prática no dia a dia.
          </p>
        </section>

        <section className="mt-10 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Alternativa recomendada
          </h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-slate-50 rounded-2xl p-6 flex items-center justify-center">
              <Image
                src="/images/sony-wf-c710n.jpg"
                alt="Sony WF-C710N"
                width={420}
                height={320}
                className="rounded-xl object-contain"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Sony WF-C710N
              </h3>

              <p className="text-slate-700 leading-8 mb-4">
                Se procuras uma alternativa equilibrada aos AirPods 4, os Sony
                WF-C710N são uma opção muito interessante. Oferecem boa
                qualidade de som, cancelamento de ruído competente e uma
                experiência sólida para uso diário, chamadas e música.
              </p>

              <div className="bg-slate-100 rounded-xl p-4 mb-5">
                <p className="font-semibold text-slate-900 mb-2">
                  Melhor para:
                </p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>✔ Quem quer uma alternativa equilibrada</li>
                  <li>✔ Uso diário e chamadas</li>
                  <li>✔ Boa qualidade de som</li>
                </ul>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-5">
                <p className="font-semibold text-emerald-800 mb-2">Destaque</p>
                <p className="text-sm text-emerald-700">
                  Excelente equilíbrio entre qualidade, funcionalidades e preço.
                </p>
              </div>

              <Link
                href="/go/sony_wf_c710n"
                className="block w-full md:w-fit text-center bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-sky-700 transition"
              >
                👉 Ver alternativa recomendada na Amazon
              </Link>

              <p className="text-sm text-slate-500 mt-3">
                🎧 Boa alternativa para quem quer equilíbrio
              </p>

              <p className="text-xs text-slate-400 mt-2 leading-6">
                Este site pode receber comissão por compras qualificadas, sem
                custo adicional para o utilizador.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Sobre o autor
          </h2>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold text-lg shrink-0">
              JS
            </div>

            <div>
              <p className="font-semibold text-slate-900 mb-1">João Silva</p>
              <p className="text-slate-600 leading-7">
                Entusiasta de tecnologia com foco em áudio, gadgets e produtos
                de uso diário. Esta página foi criada para ajudar utilizadores a
                tomar decisões de compra com mais clareza, sem complicações e
                com total transparência sobre links de afiliado.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Perguntas frequentes
          </h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">
                Esta página vende o produto diretamente?
              </h3>
              <p className="text-slate-600 leading-7">
                Não. Esta página apenas apresenta a análise e encaminha o
                utilizador para a Amazon, onde a compra é concluída com as
                condições da própria plataforma.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-1">
                O preço é pago aqui?
              </h3>
              <p className="text-slate-600 leading-7">
                Não. O pagamento é feito apenas na Amazon depois do clique no
                botão de oferta.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-1">
                Porque existe este site?
              </h3>
              <p className="text-slate-600 leading-7">
                O objetivo é ajudar a comparar produtos e resumir rapidamente se
                valem ou não a pena, com links de afiliado identificados de
                forma transparente.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusão</h2>

          <p className="text-slate-700 leading-8 mb-6">
            Se procuras auriculares sem fios de qualidade elevada, os AirPods 4
            continuam a ser uma aposta muito sólida. São especialmente indicados
            para quem dá prioridade ao conforto, à qualidade de som e a uma
            experiência de utilização premium no dia a dia. Para quem prefere
            poupar, os Xiaomi Redmi Buds 5 são uma alternativa muito
            equilibrada.
          </p>

          <div className="bg-slate-100 rounded-xl p-4 mb-6">
            <p className="text-sm text-slate-600 leading-7">
              Nota de transparência: esta página contém links de afiliado. Isso
              não altera o preço final para o utilizador.
            </p>
          </div>

          <Link
            href="/go/airpods"
            className="block w-full md:w-fit text-center bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-sky-700 transition"
          >
            👉 Ver melhor preço agora
          </Link>
        </section>
      </div>
    </main>
  );
}
