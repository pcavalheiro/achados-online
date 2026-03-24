import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Achados Online
            </h3>
            <p className="text-slate-600 leading-7 text-sm">
              Reviews, comparações e recomendações práticas para ajudar a
              escolher produtos com mais confiança.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Páginas úteis
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link
                href="/sobre"
                className="text-slate-600 hover:text-sky-700 transition"
              >
                Sobre
              </Link>
              <Link
                href="/contacto"
                className="text-slate-600 hover:text-sky-700 transition"
              >
                Contacto
              </Link>
              <Link
                href="/transparencia"
                className="text-slate-600 hover:text-sky-700 transition"
              >
                Transparência
              </Link>
              <Link
                href="/politica-privacidade"
                className="text-slate-600 hover:text-sky-700 transition"
              >
                Política de Privacidade
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Transparência
            </h3>
            <p className="text-slate-600 leading-7 text-sm">
              Este site participa em programas de afiliados. Alguns links podem
              gerar uma pequena comissão, sem qualquer custo adicional para o
              utilizador.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-500 leading-6">
            © {new Date().getFullYear()} Achados Online. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
