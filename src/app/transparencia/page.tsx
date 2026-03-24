import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparência",
  description:
    "Informação sobre links de afiliado, transparência editorial e funcionamento do site.",
};

export default function TransparenciaPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Transparência e Afiliados
          </h1>

          <div className="space-y-5 text-slate-700 leading-8">
            <p>
              O Achados Online participa em programas de afiliados, incluindo o
              Programa de Associados da Amazon.
            </p>

            <p>
              Isso significa que alguns links presentes neste site são links de
              afiliado. Se realizar uma compra através desses links, o site pode
              receber uma pequena comissão.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✔ O preço final para o utilizador não é alterado</li>
                <li>✔ Não existe qualquer custo adicional</li>
                <li>✔ As recomendações são feitas de forma independente</li>
              </ul>
            </div>

            <p>
              Ao clicar em determinados links, será redirecionado para
              plataformas externas, como a Amazon, onde a compra é concluída com
              segurança.
            </p>

            <p>O Achados Online não processa pagamentos nem envia produtos.</p>

            <p className="font-medium text-slate-900">
              Como participante do Programa de Associados da Amazon, o Achados
              Online pode receber comissões por compras qualificadas.
            </p>

            <p>
              O objetivo deste site é fornecer informação clara e útil, ajudando
              o utilizador a tomar decisões mais informadas.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
