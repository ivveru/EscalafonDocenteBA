import React from 'react';
import { Download, FileDown, Video, PlayCircle } from 'lucide-react';

interface SupportToolsSectionProps {
  onDownloadInstructivo: () => void;
  onOpenVideoTutorial: () => void;
}

export const SupportToolsSection: React.FC<SupportToolsSectionProps> = ({
  onDownloadInstructivo,
  onOpenVideoTutorial,
}) => {
  return (
    <section className="w-full bg-slate-100/70 py-12 border-t border-slate-200">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <div className="flex flex-col gap-1 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-800">
            Recursos de Orientación
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Herramientas de Apoyo Docente
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Descargue el material instructivo y consulte las guías paso a paso para asegurar una radicación correcta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tarjeta 1: Acceso a Archivo de Instructivo */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7 flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center">
                  <FileDown className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                  Documento PDF
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Acceso a Archivo de Instructivo
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Descargue la guía completa con especificaciones de evidencias de docencia, baremo de producción artística, formatos requeridos y pautas de presentación.
              </p>
              <div className="text-[11px] text-slate-500 flex items-center gap-3 pt-1">
                <span>Versión: 2026.1</span>
                <span>•</span>
                <span>Tamaño: 4.8 MB</span>
                <span>•</span>
                <span>Formato: PDF Oficial</span>
              </div>
            </div>
            <div>
              <button
                onClick={onDownloadInstructivo}
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-sky-700 hover:bg-sky-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors cursor-pointer"
                type="button"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Instructivo en PDF</span>
              </button>
            </div>
          </div>

          {/* Tarjeta 2: Video del Instructivo */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7 flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                  <Video className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  Tutorial Multimedia
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Video del Instructivo
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Videotutorial explicativo paso a paso sobre cómo ingresar a la plataforma, cargar soportes probatorios, diligenciar las secciones y consultar el estado de la solicitud.
              </p>
              <div className="text-[11px] text-slate-500 flex items-center gap-3 pt-1">
                <span>Duración: 08:30 min</span>
                <span>•</span>
                <span>Calidad: 1080p HD</span>
                <span>•</span>
                <span>Idioma: Español</span>
              </div>
            </div>
            <div>
              <button
                onClick={onOpenVideoTutorial}
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors cursor-pointer"
                type="button"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Visualizar Video Tutorial</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
