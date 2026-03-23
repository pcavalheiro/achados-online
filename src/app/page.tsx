"use client";
import Link from "next/link";
import Image from "next/image";

const produtos = [
  {
    id: "airpods-pro",
    nome: "AirPods 4 com cancelamento de ruído",
    img: "/images/airpods.jpg",
    descricao:
      "Auriculares premium com cancelamento ativo de ruído, áudio adaptativo e excelente integração com o ecossistema Apple.",
    rating: "4.6/5",
    idealPara: ["Música", "Chamadas", "Utilizadores Apple"],
  },
  {
    id: "smartwatch",
    nome: "Smartwatch com Monitorização de Saúde",
    img: "/images/smartwatch.jpg",
    descricao:
      "Relógio inteligente ideal para acompanhar atividade física, sono, batimentos cardíacos e notificações do telemóvel.",
    rating: "4.3/5",
    idealPara: ["Atividade física", "Saúde", "Uso diário"],
  },
  {
    id: "aspirador",
    nome: "Aspirador Robot para Limpeza Diária",
    img: "/images/aspirador.jpg",
    descricao:
      "Solução prática para manter a casa limpa com menos esforço, indicada para manutenção diária de vários tipos de chão.",
    rating: "4.4/5",
    idealPara: ["Casa", "Limpeza diária", "Poupar tempo"],
  },
];

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sky-300 font-medium mb-3">
            Reviews e recomendações
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Reviews e recomendações para comprar melhor
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-200">
            Descubra produtos úteis, comparações e sugestões práticas para
            escolher com mais confiança.
          </p>
        </div>
      </section>

      {/* PRODUTOS */}
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
              {/* Recomendado */}
              <p className="text-xs text-sky-600 font-semibold mb-3">
                Recomendado
              </p>

              {/* Imagem */}
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

              {/* Rating */}
              <div className="mt-4">
                <p className="text-amber-500 text-lg font-semibold">
                  ★★★★☆
                  <span className="text-slate-500 text-sm ml-2">
                    ({produto.rating})
                  </span>
                </p>
              </div>

              {/* Nome */}
              <h3 className="font-bold mt-2 text-slate-900 text-lg">
                {produto.nome}
              </h3>

              {/* Descrição */}
              <p className="text-slate-600 mt-2 leading-7">
                {produto.descricao}
              </p>

              {/* Ideal para */}
              <div className="mt-4 bg-slate-100 rounded-xl p-4">
                <p className="font-semibold text-slate-900 mb-2">Ideal para:</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  {produto.idealPara.map((item) => (
                    <li key={item}>✔ {item}</li>
                  ))}
                </ul>
              </div>

              {/* Botão */}
              <Link
                href={`/${produto.id}`}
                className="mt-5 block text-center bg-sky-600 text-white py-3 rounded-xl font-semibold hover:bg-sky-700 transition"
              >
                Ler análise completa
              </Link>

              {/* Confiança */}
              <p className="text-sm text-slate-500 mt-3 text-center">
                🔥 Produto muito procurado atualmente
              </p>
              <p className="text-xs text-slate-400 mt-1 text-center">
                Análise independente
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIAS */}
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

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-600 text-sm">
        <p className="text-slate-500 mb-2">
          Alguns links deste site podem encaminhar para páginas de produtos na
          Amazon.
        </p>

        <p className="text-slate-400 mb-2 text-xs">
          Como afiliado da Amazon, posso receber comissões por compras
          qualificadas.
        </p>

        <p>
          © 2026 Achados Online ·{" "}
          <Link href="/sobre" className="underline">
            Sobre
          </Link>{" "}
          ·{" "}
          <Link href="/politica-privacidade" className="underline">
            Política de Privacidade
          </Link>
        </p>
      </footer>
    </main>
  );
}
