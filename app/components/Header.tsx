"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center gap-4 bg-slate-800 px-8 py-4">
      <button className="px-5 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
        Inicio
      </button>

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="px-5 py-2 rounded-md bg-slate-600 text-white font-medium hover:bg-slate-500 transition-colors"
        >
          SGC
        </button>

        {open && (
          <div className="absolute left-0 mt-2 w-52 rounded-md bg-slate-700 shadow-lg z-10 flex flex-col">
            <button className="px-4 py-3 text-left text-white text-sm hover:bg-slate-600 transition-colors rounded-t-md">
              Consultar documentos
            </button>
            <button className="px-4 py-3 text-left text-white text-sm hover:bg-slate-600 transition-colors">
              Editar documento
            </button>
            <button className="px-4 py-3 text-left text-white text-sm hover:bg-slate-600 transition-colors rounded-b-md">
              Eliminar documentos
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
