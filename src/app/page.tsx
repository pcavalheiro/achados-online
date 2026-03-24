import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Achados Online | Reviews e recomendações",
  description:
    "Descubra produtos úteis, comparações e sugestões práticas para escolher com mais confiança.",
  alternates: {
    canonical: "/",
  },
};

const produtos = [
  {
    id: "airpods-pro",
    nome: "AirPods 4 com cancelamento de ruído",
    img: "/images/airpods.jpg",
    descricao:
      "Auriculares premium com cancelamento ativo de ruído, áudio adaptativo e excelente integração com o ecossistema Apple.",
    rating: "4.6/5",
    idealPara: ["Música", "Chamadas", "Utilizadores Apple"],
    tag: "Mais procurado",
  },
  {
    id: "smartwatch",
    nome: "Smartwatch com Monitorização de Saúde",
    img: "/images/smartwatch.jpg",
    descricao:
      "Relógio inteligente ideal para acompanhar atividade física, sono, batimentos cardíacos e notificações do telemóvel.",
    rating: "4.3/5",
    idealPara: ["Atividade física", "Saúde", "Uso diário"],
    tag: "Boa escolha diária",
  },
  {
    id: "aspirador",
    nome: "Aspirador Robot para Limpeza Diária",
    img: "/images/aspirador.jpg",
    descricao:
      "Solução prática para manter a casa limpa com menos esforço, indicada para manutenção diária de vários tipos de chão.",
    rating: "4.4/5",
    idealPara: ["Casa", "Limpeza diária", "Poupar tempo"],
    tag: "Melhor para casa",
  },
];

const comparacoes = [
  {
    titulo: "Top 5 alternativas aos AirPods",
    href: "/top-5-auriculares-bluetooth-estilo-airpods",
    descricao:
      "Compara 5 auriculares Bluetooth populares para quem quer qualidade, conforto e melhor relação qualidade/preço.",
  },
  {
    titulo: "AirPods 4: vale a pena comprar?",
    href: "/airpods-pro",
    descricao:
      "Vê se os AirPods 4 continuam a ser uma boa escolha para iPhone, chamadas e uso diário.",
  },
  {
    titulo: "Melhor opção para poupar sem comprar mal",
    href: "/top-5-auriculares-bluetooth-estilo-airpods",
    descricao:
      "Descobre modelos mais baratos que fazem sentido para quem quer ANC, conforto e boa autonomia.",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sky-300 font-medium mb-3">
              Reviews, comparações e recomendações
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Descubra produtos úteis e compre com mais confiança
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-3xl">
              Análises simples, comparações diretas e alternativas mais baratas
              para ajudar a escolher melhor, sem complicações.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm text-white">
                ✔ Análises independentes
              </span>
              <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm text-white">
                ✔ Comparações práticas
              </span>
              <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm text-white">
                ✔ Links com transparência
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/top-5-auriculares-bluetooth-estilo-airpods"
                className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-4 text-lg font-semibold text-white hover:bg-sky-700 transition"
              >
                Ver top 5 alternativas aos AirPods
              </Link>

              <Link
                href="/sobre"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-lg font-semibold text-white hover:bg-white/10 transition"
              >
                Saber mais sobre o site
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900 mb-1">
                Conteúdo direto
              </p>
              <p className="text-sm text-slate-600 leading-6">
                Reviews e comparações escritas para ajudar a decidir mais
                depressa.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900 mb-1">Transparência</p>
              <p className="text-sm text-slate-600 leading-6">
                Alguns links podem gerar comissão, sem custo adicional para o
                utilizador.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900 mb-1">
                Compra externa
              </p>
              <p className="text-sm text-slate-600 leading-6">
                As compras são concluídas em plataformas externas, como a
                Amazon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-medium text-sky-700 mb-2">
              Conteúdo popular
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Comparações e guias que ajudam a decidir
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Em vez de só mostrar produtos, o objetivo é explicar rapidamente o
              que compensa mais em cada caso.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {comparacoes.map((item) => (
              <Link
                key={item.titulo}
                href={item.href}
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:bg-slate-100 transition"
              >
                <h3 className="font-bold text-slate-900 text-lg leading-7">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-slate-600 leading-7 text-sm">
                  {item.descricao}
                </p>
                <p className="mt-4 text-sky-700 font-semibold text-sm">
                  Ver página →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-sm font-medium text-sky-700 mb-2">
            Produtos em destaque
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Produtos populares analisados de forma simples
          </h2>
          <p className="mt-4 text-slate-600 leading-7">
            Escolhas com boa procura, utilidade prática e potencial para ajudar
            quem está a comparar antes de comprar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <article
              key={produto.id}
              className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <p className="text-xs text-sky-600 font-semibold">
                  Recomendado
                </p>
                <span className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                  {produto.tag}
                </span>
              </div>

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

              <div className="mt-4">
                <p className="text-amber-500 text-lg font-semibold">
                  ★★★★☆
                  <span className="text-slate-500 text-sm ml-2">
                    ({produto.rating})
                  </span>
                </p>
              </div>

              <h3 className="font-bold mt-2 text-slate-900 text-lg leading-7">
                {produto.nome}
              </h3>

              <p className="text-slate-600 mt-2 leading-7">
                {produto.descricao}
              </p>

              <div className="mt-4 bg-slate-100 rounded-xl p-4">
                <p className="font-semibold text-slate-900 mb-2">Ideal para:</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  {produto.idealPara.map((item) => (
                    <li key={item}>✔ {item}</li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/${produto.id}`}
                className="mt-5 block text-center bg-sky-600 text-white py-3 rounded-xl font-semibold hover:bg-sky-700 transition"
              >
                Ler análise completa
              </Link>

              <p className="text-sm text-slate-500 mt-3 text-center">
                🔥 Produto muito procurado atualmente
              </p>
              <p className="text-xs text-slate-400 mt-1 text-center">
                Análise independente
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-100 text-center">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">
          Categorias populares
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-7">
          Acede rapidamente às páginas mais relevantes por categoria.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/airpods-pro"
            className="px-6 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-700 transition"
          >
            Áudio
          </Link>

          <Link
            href="/top-5-auriculares-bluetooth-estilo-airpods"
            className="px-6 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-700 transition"
          >
            Alternativas aos AirPods
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

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-sm font-medium text-sky-700 mb-2">Como funciona</p>
          <h2 className="text-3xl font-bold text-slate-900">
            Processo simples e transparente
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-2xl font-bold text-sky-700 mb-3">1</p>
            <h3 className="font-semibold text-slate-900 mb-2">
              Analisamos opções
            </h3>
            <p className="text-slate-600 leading-7 text-sm">
              Selecionamos produtos populares e organizamos a informação de
              forma mais clara.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-2xl font-bold text-sky-700 mb-3">2</p>
            <h3 className="font-semibold text-slate-900 mb-2">
              Comparamos vantagens
            </h3>
            <p className="text-slate-600 leading-7 text-sm">
              Mostramos pontos fortes, limitações e para quem cada produto faz
              mais sentido.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-2xl font-bold text-sky-700 mb-3">3</p>
            <h3 className="font-semibold text-slate-900 mb-2">
              Encaminhamos para compra
            </h3>
            <p className="text-slate-600 leading-7 text-sm">
              Quando fizer sentido, o utilizador é redirecionado para a página
              externa onde pode concluir a compra.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
