import React from 'react';
import { Building2, Mail, MapPin, Check } from 'lucide-react';
import { BELLAS_ARTES_LOGO } from '../data/portalData';

interface FooterProps {
  onOpenNormativeDoc: (docId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenNormativeDoc }) => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-800">
          {/* Columna 1: Identidad y Misión */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-lg w-fit shadow-sm">
                <img
                  alt="Logo Bellas Artes Institución Universitaria del Valle del Cauca"
                  className="h-7 w-auto object-contain"
                  src={BELLAS_ARTES_LOGO}
                />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white block">Bellas Artes</span>
                <span className="text-xs text-slate-400">
                  Institución Universitaria del Valle del Cauca
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              Entidad de Educación Superior comprometida con la excelencia pedagógica, la creación artística y la investigación en el Valle del Cauca. Sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.
            </p>
            <span className="text-[11px] font-mono text-cyan-400">
              Personería Jurídica Resolución 182 de 1974 · Cali, Colombia
            </span>
          </div>

          {/* Columna 2: Marco Jurídico Institucional */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Marco Jurídico e Institucional
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-slate-400 mt-1">
              <li
                onClick={() => onOpenNormativeDoc('doc-3')}
                className="flex items-start gap-2 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <Check className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span>Acuerdo Directivo No. 001 de 2018 · Estatuto Docente</span>
              </li>
              <li className="flex items-start gap-2 hover:text-cyan-300 transition-colors cursor-pointer">
                <Check className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span>Comité Central de Clasificación y Escalafón</span>
              </li>
              <li className="flex items-start gap-2 hover:text-cyan-300 transition-colors cursor-pointer">
                <Check className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span>Ley 30 de 1992 · Régimen Especial Universitario</span>
              </li>
              <li
                onClick={() => onOpenNormativeDoc('doc-2')}
                className="flex items-start gap-2 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <Check className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span>Resolución de Baremos de Producción Artística</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Atención al Docente */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Atención al Docente
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400 mt-1">
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Vicerrectoría Académica</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a
                  className="hover:text-cyan-300 transition-colors"
                  href="mailto:escalafon@bellasartes.edu.co"
                >
                  escalafon@bellasartes.edu.co
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Av. 2 Norte No. 7N-28, Barrio Centenario. Cali, Valle del Cauca.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra final de derechos y certificación */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © 2026 Bellas Artes Institución Universitaria del Valle del Cauca. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Resolución MEN Vigente</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-emerald-400 font-semibold">Acreditación Institucional</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
