import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <nav className="flex items-center gap-4 bg-slate-800 px-8 py-4">
      <button className="px-5 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
        Inicio
      </button>
      <button className="px-5 py-2 rounded-md bg-slate-600 text-white font-medium hover:bg-slate-500 transition-colors">
        SGC
      </button>
    </nav>
    <section className="relative flex flex-1 items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 px-6 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect x="215" y="430" width="70" height="18" rx="9" fill="#94a3b8" />
        <rect x="245" y="160" width="10" height="270" fill="#94a3b8" />
        <circle cx="250" cy="155" r="12" fill="#cbd5e1" />
        <rect x="90" y="150" width="320" height="10" rx="5" fill="#cbd5e1" />
        <line x1="115" y1="160" x2="90" y2="295" stroke="#94a3b8" strokeWidth="3" />
        <line x1="145" y1="160" x2="170" y2="295" stroke="#94a3b8" strokeWidth="3" />
        <line x1="355" y1="160" x2="330" y2="295" stroke="#94a3b8" strokeWidth="3" />
        <line x1="385" y1="160" x2="410" y2="295" stroke="#94a3b8" strokeWidth="3" />
        <ellipse cx="130" cy="295" rx="62" ry="12" fill="#64748b" />
        <path d="M68 295 Q130 325 192 295" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
        <ellipse cx="370" cy="295" rx="62" ry="12" fill="#64748b" />
        <path d="M308 295 Q370 325 432 295" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
      </svg>
      <div className="relative text-center">
        <h1 className="text-5xl font-bold tracking-tight text-blue-400 sm:text-6xl">
          ERP para empresa de metrología
        </h1>
      </div>
    </section>
    <Footer />
    </>
  );
}
