"use client";
import Link from "next/link";
import Image from "next/image";

const produtos = [
  {
    id: "airpods-pro",
    nome: "AirPods Pro",
    img: "/images/airpods.jpg",
    descricao:
      "Auriculares sem fios com cancelamento ativo de ruído, conforto elevado e excelente qualidade de som para uso diário.",
  },
  {
    id: "smartwatch",
    nome: "Smartwatch com Monitorização de Saúde",
    img: "/images/smartwatch.jpg",
    descricao:
      "Relógio inteligente ideal para acompanhar atividade física, sono, batimentos cardíacos e notificações do telemóvel.",
  },
  {
    id: "aspirador",
    nome: "Aspirador Robot para Limpeza Diária",
    img: "/images/aspirador.jpg",
    descricao:
      "Solução prática para manter a casa limpa com menos esforço, indicada para manutenção diária de vários tipos de chão.",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="text-center py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sky-300 font-medium mb-3">
            Reviews e sugestões de compra
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Encontre produtos úteis para o seu dia a dia
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-200">
            Análises simples, recomendações práticas e produtos em destaque para
            comprar com mais confiança.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
          Produtos em destaque
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5 hover:shadow-lg transition"
            >
              <div className="bg-slate-50 rounded-xl p-4">
                <Image
                  src={produto.img}
                  alt={produto.nome}
                  width={400}
                  height={220}
                  className="object-contain w-full h-48"
                  priority
                />
              </div>

              <h3 className="font-bold mt-4 text-slate-900">{produto.nome}</h3>

              <p className="text-slate-600 mt-2 leading-7">
                {produto.descricao}
              </p>

              <Link
                href={`/${produto.id}`}
                className="mt-5 block text-center bg-sky-600 text-white py-3 rounded-xl font-semibold hover:bg-sky-700 transition"
              >
                Ver análise
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-100 text-center">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">
          Categorias populares
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/airpods-pro"
            className="px-6 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-700 transition"
          >
            Áudio
          </Link>

          <Link
            href="/smartwatch"
            className="px-6 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-700 transition"
          >
            Smartwatches
          </Link>

          <Link
            href="/aspirador"
            className="px-6 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-700 transition"
          >
            Casa
          </Link>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-600 text-sm">
        <p className="text-slate-500 mb-2">
          Alguns links deste site podem encaminhar para páginas de produtos na
          Amazon.
        </p>

        <p>
          © 2026 Achados Online ·{" "}
          <Link href="/politica-privacidade" className="underline">
            Política de Privacidade
          </Link>
        </p>
      </footer>
    </main>
  );
}
