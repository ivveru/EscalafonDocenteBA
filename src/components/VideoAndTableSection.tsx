import React from 'react';
import { Play, Tv, Code, Scale } from 'lucide-react';
import { HERO_BG_IMAGE } from '../data/portalData';
import { CategoryKey } from '../types';

interface VideoAndTableSectionProps {
  onOpenVideo: (videoType: 'general' | 'tutorial') => void;
  onSelectCategory: (key: CategoryKey) => void;
}

export const VideoAndTableSection: React.FC<VideoAndTableSectionProps> = ({
  onOpenVideo,
  onSelectCategory,
}) => {
  return (
    <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LADO IZQUIERDO: Contenedor para embeber el video */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 overflow-hidden flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-sky-100 text-sky-800">
                  <Tv className="w-5 h-5 block" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-900">
                  Recurso Audiovisual
                </span>
              </div>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Oficial Bellas Artes
              </span>
            </div>

            {/* Título y descripción */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Video sobre el proceso de escalafón
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Audiovisual explicativo sobre el procedimiento de radicación, verificación curricular y promoción académica.
              </p>
            </div>

            {/* Marco 16:9 con placeholder / embed listo */}
            <div
              onClick={() => onOpenVideo('general')}
              className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner group flex items-center justify-center cursor-pointer"
              title="Haga clic para reproducir el video explicativo"
            >
              {/* Imagen poster representativa del video */}
              <img
                alt="Vista previa del video sobre escalafón docente"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                src={HERO_BG_IMAGE}
              />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/25 transition-colors"></div>

              {/* Botón Play interactivo */}
              <div className="relative z-10 flex flex-col items-center gap-2 text-center p-4">
                <button
                  aria-label="Reproducir video"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 cursor-pointer"
                  type="button"
                >
                  <Play className="w-8 h-8 sm:w-9 sm:h-9 translate-x-0.5 fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-white bg-slate-900/80 px-2.5 py-1 rounded-full backdrop-blur-sm border border-slate-700">
                  Duración: 04:45 min · HD
                </span>
              </div>
            </div>

            {/* Breve indicación de inserción / Embed shortcode */}
            <div className="bg-sky-50/80 border border-sky-100 rounded-lg p-3 text-xs text-sky-900 flex items-start gap-2.5">
              <Code className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-bold">Espacio preparado para embeber:</span>
                <p className="text-slate-600 text-[11px] mt-0.5">
                  Reemplace este contenedor con la etiqueta{' '}
                  <code className="bg-white px-1 py-0.5 rounded text-sky-950 font-mono text-[10px] border border-sky-200">
                    &lt;iframe&gt;
                  </code>{' '}
                  de YouTube/Vimeo o el shortcode institucional de video.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: Tabla / estructura tabular solicitada */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 sm:p-7 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-600"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                Régimen y Carrera Docente
              </span>
            </div>

            {/* Título exacto */}
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              ¿Sabes en qué consiste la carrera docente en Bellas Artes?
            </h2>

            {/* Párrafo exacto */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              La carrera docente se inicia con el ingreso del docente en el escalafón que tiene por objeto garantizar el nivel académico de la institución, la estabilidad y la promoción de los docentes. Consta de las siguientes categorías y sus tiempos de permanencia respectivos:
            </p>

            {/* Tabla formateada claramente */}
            <div className="mt-2 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50/50">
              <table className="w-full text-left text-xs sm:text-sm text-slate-800 border-collapse">
                <thead>
                  <tr className="bg-slate-100/90 border-b border-slate-200 text-slate-900 font-bold uppercase text-[11px] tracking-wider">
                    <th className="py-3 px-4 sm:px-5 w-1/3" scope="col">
                      Categoría
                    </th>
                    <th className="py-3 px-4 sm:px-5" scope="col">
                      Tiempo de Permanencia Reglamentario
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {/* Profesor Auxiliar */}
                  <tr
                    onClick={() => {
                      onSelectCategory('auxiliar');
                      const el = document.getElementById('categorias');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:bg-sky-50/60 transition-colors cursor-pointer group"
                  >
                    <td className="py-3.5 px-4 sm:px-5 align-top">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shrink-0"></span>
                        <span className="font-bold text-slate-900 text-sm group-hover:text-sky-700 transition-colors">
                          Profesor Auxiliar
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 ml-4 font-mono">Nivel 01</span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 text-slate-700 leading-relaxed">
                      Que otorga permanencia por periodos sucesivos de{' '}
                      <strong className="text-sky-900 font-semibold">dos (02) años calendario</strong>.
                    </td>
                  </tr>

                  {/* Profesor Asistente */}
                  <tr
                    onClick={() => {
                      onSelectCategory('asistente');
                      const el = document.getElementById('categorias');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:bg-teal-50/60 transition-colors cursor-pointer group"
                  >
                    <td className="py-3.5 px-4 sm:px-5 align-top">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-500 shrink-0"></span>
                        <span className="font-bold text-slate-900 text-sm group-hover:text-teal-700 transition-colors">
                          Profesor Asistente
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 ml-4 font-mono">Nivel 02</span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 text-slate-700 leading-relaxed">
                      Que otorga permanencia por periodos sucesivos de{' '}
                      <strong className="text-teal-900 font-semibold">tres (03) años calendario</strong>.
                    </td>
                  </tr>

                  {/* Profesor Asociado */}
                  <tr
                    onClick={() => {
                      onSelectCategory('asociado');
                      const el = document.getElementById('categorias');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:bg-cyan-50/60 transition-colors cursor-pointer group"
                  >
                    <td className="py-3.5 px-4 sm:px-5 align-top">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 shrink-0"></span>
                        <span className="font-bold text-slate-900 text-sm group-hover:text-cyan-700 transition-colors">
                          Profesor Asociado
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 ml-4 font-mono">Nivel 03</span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 text-slate-700 leading-relaxed">
                      Que otorga permanencia por periodos sucesivos de{' '}
                      <strong className="text-cyan-900 font-semibold">cuatro (04) años calendario</strong>.
                    </td>
                  </tr>

                  {/* Profesor Titular */}
                  <tr
                    onClick={() => {
                      onSelectCategory('titular');
                      const el = document.getElementById('categorias');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:bg-slate-100/70 transition-colors cursor-pointer group"
                  >
                    <td className="py-3.5 px-4 sm:px-5 align-top">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-800 shrink-0"></span>
                        <span className="font-bold text-slate-900 text-sm group-hover:text-slate-950 transition-colors">
                          Profesor Titular
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 ml-4 font-mono">
                        Nivel 04 (Máxima distinción)
                      </span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 text-slate-700 leading-relaxed">
                      Que otorga permanencia por periodos sucesivos de{' '}
                      <strong className="text-slate-900 font-semibold">cinco (05) años calendario</strong>.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Cita normativa de respaldo */}
            <div className="p-3.5 bg-sky-50 rounded-xl border border-sky-100 flex items-start gap-2.5 text-xs text-sky-950">
              <Scale className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Fundamento Estatutario:</strong> Conforme al Acuerdo Directivo No. 001, cada promoción requiere la radicación oportuna de evidencias de docencia, investigación y producción artística avaladas por el Comité Central.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
