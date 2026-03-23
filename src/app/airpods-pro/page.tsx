"use client";
import Image from "next/image";
import Link from "next/link";

export default function AirpodsPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <p className="text-sm text-sky-700 font-medium mb-2">
            Review de produto
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            AirPods Pro – Vale a pena comprar em 2026?
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Uma análise simples e direta para perceber se os AirPods Pro
            continuam a ser uma boa escolha para quem procura qualidade de som,
            conforto e cancelamento de ruído.
          </p>
        </div>

        <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <div className="bg-slate-50 rounded-2xl p-6 flex items-center justify-center">
            <Image
              src="/images/airpods.jpg"
              alt="AirPods Pro"
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
              <span className="text-slate-500 text-sm ml-2">(4.5/5)</span>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Excelente opção para quem quer som premium no dia a dia
            </h2>

            <p className="text-slate-700 text-lg leading-8 mb-5">
              Os AirPods Pro destacam-se pela qualidade de som, conforto e
              cancelamento ativo de ruído. São uma opção muito forte para quem
              usa auriculares todos os dias, especialmente em deslocações,
              trabalho ou chamadas.
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

            <Link
              href="/go/airpods"
              className="block w-full md:w-fit text-center bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-sky-700 transition"
            >
              👉 Ver melhor preço
            </Link>

            <p className="text-sm text-slate-500 mt-3">
              🔥 Produto muito procurado atualmente
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
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Descrição</h2>

          <p className="text-slate-700 leading-8">
            Os AirPods Pro oferecem uma experiência sonora equilibrada e muito
            confortável para utilização prolongada. O cancelamento ativo de
            ruído ajuda a reduzir distrações, enquanto o formato leve facilita o
            uso em várias situações do dia a dia, desde ouvir música até atender
            chamadas ou trabalhar em ambientes mais movimentados.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl">
            <h3 className="font-bold text-emerald-700 text-xl mb-3">
              Pontos positivos
            </h3>

            <ul className="space-y-2 text-slate-700">
              <li>Excelente qualidade de som</li>
              <li>Cancelamento de ruído eficaz</li>
              <li>Muito confortáveis para uso prolongado</li>
              <li>Boa integração com dispositivos Apple</li>
            </ul>
          </div>

          <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl">
            <h3 className="font-bold text-rose-700 text-xl mb-3">
              Pontos negativos
            </h3>

            <ul className="space-y-2 text-slate-700">
              <li>Preço acima da média</li>
              <li>Menos vantagens fora do ecossistema Apple</li>
            </ul>
          </div>
        </section>

        <section className="mt-10 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusão</h2>

          <p className="text-slate-700 leading-8 mb-6">
            Se procuras auriculares sem fios de qualidade elevada, os AirPods
            Pro continuam a ser uma aposta muito sólida. São especialmente
            indicados para quem dá prioridade ao conforto, à qualidade de som e
            a uma experiência de utilização premium no dia a dia.
          </p>

          <Link
            href="/go/airpods"
            className="block w-full md:w-fit text-center bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-sky-700 transition"
          >
            👉 Ver oferta disponível
          </Link>
        </section>
      </div>
    </main>
  );
}
