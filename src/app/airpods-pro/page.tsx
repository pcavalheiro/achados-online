"use client";
import Image from "next/image";
import Link from "next/link";

export default function AirpodsPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      {/* Título */}
      <h1 className="text-4xl font-bold mb-4">
        AirPods Pro – Vale a pena em 2026?
      </h1>

      {/* Imagem + resumo */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/images/airpods.jpg"
          alt="AirPods Pro"
          width={500}
          height={400}
          className="rounded-xl"
        />

        <div>
          <p className="text-lg text-gray-700">
            Os AirPods Pro são uns dos auriculares sem fios mais populares do
            mercado, conhecidos pelo seu cancelamento de ruído ativo e qualidade
            de som premium.
          </p>

          <Link
            href="/go/airpods"
            className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600"
          >
            Ver na Amazon
          </Link>

          <p className="text-sm text-gray-500 mt-2">
            *Link direciona para a Amazon.
          </p>
        </div>
      </div>

      {/* Descrição */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Descrição</h2>
        <p className="text-gray-700">
          Os AirPods Pro oferecem uma experiência sonora imersiva com tecnologia
          de cancelamento ativo de ruído, ideal para quem quer ouvir música sem
          distrações. São confortáveis, leves e perfeitos para uso diário, seja
          em casa, no trabalho ou em viagem.
        </p>
      </section>

      {/* Prós e Contras */}
      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="bg-green-100 p-4 rounded-xl">
          <h3 className="font-bold text-green-700 mb-2">✔ Pontos Positivos</h3>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Excelente qualidade de som</li>
            <li>Cancelamento de ruído eficaz</li>
            <li>Conforto para uso prolongado</li>
            <li>Integração perfeita com iPhone</li>
          </ul>
        </div>

        <div className="bg-red-100 p-4 rounded-xl">
          <h3 className="font-bold text-red-700 mb-2">✖ Pontos Negativos</h3>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Preço elevado</li>
            <li>Menos funcionalidades fora do ecossistema Apple</li>
          </ul>
        </div>
      </section>

      {/* Conclusão */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Conclusão</h2>
        <p className="text-gray-700">
          Se procuras auriculares de alta qualidade com cancelamento de ruído,
          os AirPods Pro são uma excelente escolha. Apesar do preço, oferecem
          uma experiência premium que compensa para utilizadores exigentes.
        </p>

        <Link
          href="/go/airpods"
          className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600"
        >
          Ver na Amazon
        </Link>
      </section>
    </main>
  );
}
