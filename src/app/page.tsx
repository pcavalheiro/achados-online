"use client";
import Link from "next/link";
import Image from "next/image";

const produtos = [
  {
    id: "airpods-pro",
    nome: "AirPods Pro",
    img: "/images/airpods.jpg",
    descricao:
      "Fones sem fio com cancelamento de ruído e ótima qualidade de som. Links direcionam para a Amazon.",
  },
  {
    id: "smartwatch",
    nome: "Smartwatch XY",
    img: "/images/smartwatch.jpg",
    descricao:
      "Monitoriza saúde, batimentos e notificações do teu smartphone. Links direcionam para a Amazon.",
  },
  {
    id: "aspirador",
    nome: "Aspirador Robot Z",
    img: "/images/aspirador.jpg",
    descricao:
      "Limpeza automática e eficiente para sua casa sem esforço. Links direcionam para a Amazon.",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-r from-orange-400 to-red-500 text-white">
        <h1 className="text-5xl font-bold">
          Achados Online – Produtos Selecionados para Você
        </h1>
        <p className="mt-4 text-xl">
          Descubra ofertas, reviews e gadgets que você pode adquirir na Amazon.
        </p>
      </section>

      {/* Top Produtos */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Top Produtos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition"
            >
              <Image
                src={produto.img}
                alt={produto.nome}
                width={400}
                height={200}
                className="object-contain w-full h-48"
                priority={true}
              />
              <h3 className="font-bold mt-2">{produto.nome}</h3>
              <p className="text-gray-600 mt-1">{produto.descricao}</p>
              <Link
                href={`/${produto.id}`}
                className="mt-3 block text-center bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
              >
                Ver na Amazon
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Categorias Populares</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <Link
            href="/pt/top-fones-bluetooth"
            className="px-6 py-3 bg-white shadow rounded hover:bg-gray-200"
          >
            Fones Bluetooth
          </Link>
          <Link
            href="/pt/top-smartwatches"
            className="px-6 py-3 bg-white shadow rounded hover:bg-gray-200"
          >
            Smartwatches
          </Link>
          <Link
            href="/pt/top-aspiradores"
            className="px-6 py-3 bg-white shadow rounded hover:bg-gray-200"
          >
            Aspiradores
          </Link>
        </div>
      </section>

      {/* Footer / Política básica */}
      <footer className="py-8 text-center text-gray-600 text-sm">
        © 2026 Achados Online.{" "}
        <Link href="/politica-privacidade" className="underline">
          Política de Privacidade
        </Link>
      </footer>
    </main>
  );
}
