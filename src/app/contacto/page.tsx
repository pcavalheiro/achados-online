import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Entra em contacto com o Achados Online para dúvidas, sugestões ou parcerias.",
};

export default function ContactoPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Contacto
          </h1>

          <div className="space-y-5 text-slate-700 leading-8">
            <p>
              Se tiver alguma dúvida, sugestão ou pedido de informação, pode
              entrar em contacto através do email abaixo:
            </p>

            <p className="font-semibold text-slate-900">
              contacto@achados-online.com
            </p>

            <p>
              Tentamos responder a todas as mensagens no prazo de 24 a 48 horas
              úteis.
            </p>

            <p>
              Para propostas de colaboração, parcerias ou divulgação de
              produtos, utilize o mesmo email acima.
            </p>

            <p className="text-sm text-slate-500">
              Este site não realiza vendas diretas nem presta suporte pós-venda
              de produtos. Para questões relacionadas com compras, devoluções ou
              garantias, deve contactar diretamente a plataforma onde efetuou a
              compra.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
