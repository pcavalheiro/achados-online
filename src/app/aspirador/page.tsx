"use client";
import Image from "next/image";
import Link from "next/link";

export default function AspiradorPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <p className="text-sm text-sky-700 font-medium mb-2">
            Review de produto
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Aspirador Robot para Limpeza Diária – Vale a pena?
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Uma solução prática para manter a casa limpa com menos esforço. Será
            que vale mesmo a pena investir num aspirador robot?
          </p>
        </div>

        <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-sm border p-6">
          <div className="bg-slate-50 rounded-2xl p-6 flex justify-center">
            <Image
              src="/images/aspirador.jpg"
              alt="Aspirador Robot"
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

            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Ideal para manter a casa limpa sem esforço
            </h2>

            <p className="text-slate-700 mb-5">
              Os aspiradores robot permitem automatizar a limpeza diária, sendo
              ideais para quem tem pouco tempo ou quer simplificar tarefas.
            </p>

            <Link
              href="/go/aspirador"
              className="block bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold text-center hover:bg-sky-700"
            >
              Ver preço na Amazon
            </Link>

            <p className="text-sm text-slate-500 mt-2">
              Alguns links podem encaminhar para a Amazon.
            </p>
          </div>
        </section>

        <section className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <h2 className="text-xl font-bold mb-2">Vale a pena?</h2>
          <p className="text-slate-700">
            Sim, especialmente para manutenção diária da casa e para poupar
            tempo nas limpezas.
          </p>
        </section>

        <section className="mt-10 bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-2xl font-bold mb-4">Descrição</h2>
          <p className="text-slate-700">
            Este tipo de aspirador limpa automaticamente diferentes superfícies,
            sendo ideal para casas com pouco tempo para limpeza manual. Pode ser
            programado para funcionar diariamente.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl">
            <h3 className="font-bold text-emerald-700 mb-3">
              Pontos positivos
            </h3>
            <ul className="text-slate-700 space-y-2">
              <li>Limpeza automática</li>
              <li>Facilidade de uso</li>
              <li>Ideal para manutenção diária</li>
              <li>Boa relação qualidade/preço</li>
            </ul>
          </div>

          <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl">
            <h3 className="font-bold text-rose-700 mb-3">Pontos negativos</h3>
            <ul className="text-slate-700 space-y-2">
              <li>Menos potente que aspiradores tradicionais</li>
              <li>Dificuldades em tapetes altos</li>
            </ul>
          </div>
        </section>

        <section className="mt-10 bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-2xl font-bold mb-4">Conclusão</h2>
          <p className="text-slate-700 mb-6">
            Um aspirador robot é uma excelente ajuda no dia a dia. Ideal para
            quem quer automatizar a limpeza e poupar tempo.
          </p>

          <Link
            href="/go/aspirador"
            className="block bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold text-center hover:bg-sky-700"
          >
            Ver oferta na Amazon
          </Link>
        </section>
      </div>
    </main>
  );
}
