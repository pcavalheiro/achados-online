import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smartwatch com Monitorização de Saúde – Vale a pena comprar?",
  description:
    "Uma análise simples para perceber se este tipo de smartwatch é uma boa escolha para acompanhar saúde e atividade física no dia a dia.",
  alternates: {
    canonical: "/smartwatch",
  },
  openGraph: {
    type: "article",
    url: "/smartwatch",
    title: "Smartwatch com Monitorização de Saúde – Vale a pena comprar?",
    description:
      "Uma análise simples para perceber se este tipo de smartwatch é uma boa escolha para acompanhar saúde e atividade física no dia a dia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smartwatch com Monitorização de Saúde – Vale a pena comprar?",
    description:
      "Uma análise simples para perceber se este tipo de smartwatch é uma boa escolha para acompanhar saúde e atividade física no dia a dia.",
  },
};

export default function SmartwatchPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <p className="text-sm text-sky-700 font-medium mb-2">
            Review de produto
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Smartwatch com Monitorização de Saúde – Vale a pena comprar?
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Uma análise simples para perceber se este tipo de smartwatch é uma
            boa escolha para acompanhar a sua saúde e atividade física no dia a
            dia.
          </p>
        </div>

        <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-sm border p-6">
          <div className="bg-slate-50 rounded-2xl p-6 flex justify-center">
            <Image
              src="/images/smartwatch.jpg"
              alt="Smartwatch"
              width={500}
              height={400}
              className="rounded-xl object-contain"
              priority
            />
          </div>

          <div>
            <div className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full mb-4 text-sm font-semibold">
              Destaque
            </div>

            <p className="text-amber-500 text-lg mb-2">
              ★★★★☆
              <span className="text-slate-500 text-sm ml-2">(4.3/5)</span>
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Ideal para acompanhar saúde e atividade física
            </h2>

            <p className="text-slate-700 mb-5">
              Este tipo de smartwatch é uma excelente opção para quem quer
              monitorizar passos, batimentos cardíacos e notificações do
              telemóvel de forma simples.
            </p>

            <div className="mt-6 bg-slate-100 rounded-xl p-4 mb-6">
              <p className="font-semibold mb-2 text-slate-900">Ideal para:</p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>✔ Acompanhar atividade física</li>
                <li>✔ Controlar sono e batimentos</li>
                <li>✔ Receber notificações no pulso</li>
              </ul>
            </div>

            <Link
              href="/go/smartwatch"
              className="block bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold text-center hover:bg-sky-700"
            >
              👉 Ver melhor preço
            </Link>

            <p className="text-sm text-slate-500 mt-2">
              🔥 Produto muito procurado atualmente
            </p>
          </div>
        </section>

        <section className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Vale a pena?
          </h2>
          <p className="text-slate-700">
            Sim, especialmente para quem quer começar a acompanhar a atividade
            física e saúde sem gastar muito.
          </p>
        </section>

        <section className="mt-10 bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-2xl font-bold mb-4">Descrição</h2>
          <p className="text-slate-700">
            Os smartwatches tornaram-se ferramentas úteis no dia a dia. Permitem
            acompanhar passos, calorias, sono e receber notificações, sendo
            ideais para quem quer manter um estilo de vida mais ativo.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl">
            <h3 className="font-bold text-emerald-700 mb-3">
              Pontos positivos
            </h3>
            <ul className="text-slate-700 space-y-2">
              <li>Monitorização de saúde</li>
              <li>Boa autonomia de bateria</li>
              <li>Design moderno</li>
              <li>Fácil de usar</li>
            </ul>
          </div>

          <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl">
            <h3 className="font-bold text-rose-700 mb-3">Pontos negativos</h3>
            <ul className="text-slate-700 space-y-2">
              <li>Menos preciso que modelos premium</li>
              <li>Funcionalidades limitadas em alguns modelos</li>
            </ul>
          </div>
        </section>

        <section className="mt-10 bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-2xl font-bold mb-4">Conclusão</h2>
          <p className="text-slate-700 mb-6">
            Um smartwatch é uma excelente escolha para quem quer melhorar a sua
            rotina diária. Este tipo de produto oferece funcionalidades úteis a
            um preço acessível.
          </p>

          <Link
            href="/go/smartwatch"
            className="block bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold text-center hover:bg-sky-700"
          >
            👉 Ver oferta disponível
          </Link>
        </section>
      </div>
    </main>
  );
}
