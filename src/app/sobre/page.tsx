import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conhece o Achados Online e o objetivo do site na análise e recomendação de produtos.",
};

export default function SobrePage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Sobre o Achados Online
          </h1>

          <div className="space-y-5 text-slate-700 leading-8">
            <p>
              O Achados Online é um site dedicado a ajudar utilizadores a
              encontrar produtos úteis e a tomar decisões de compra de forma
              simples e informada.
            </p>

            <p>
              O objetivo é analisar produtos populares, comparar alternativas e
              destacar opções com boa relação qualidade/preço, especialmente em
              categorias como tecnologia, gadgets e produtos do dia a dia.
            </p>

            <p>
              Todas as páginas são criadas com base em pesquisa, análises de
              utilizadores e comparação entre diferentes opções disponíveis no
              mercado.
            </p>

            <p>
              Este site foi criado para simplificar decisões, sem complicações e
              sem linguagem técnica desnecessária.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
