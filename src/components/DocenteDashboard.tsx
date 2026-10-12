import React, { useState } from 'react';
import {
  ArrowLeft,
  User,
  CheckCircle2,
  Clock,
  Calendar,
  FileText,
  Upload,
  Sparkles,
  BookOpen,
  Award,
  AlertTriangle,
  Download,
  Plus,
} from 'lucide-react';
import { MOCK_DOCENTE_USER } from '../data/portalData';

interface DocenteDashboardProps {
  onBackToHome: () => void;
  onOpenNormativa: () => void;
}

export const DocenteDashboard: React.FC<DocenteDashboardProps> = ({
  onBackToHome,
  onOpenNormativa,
}) => {
  const [activeTab, setActiveTab] = useState<'estado' | 'publicaciones' | 'cursos' | 'resoluciones'>('estado');
  const [uploadedAnexos, setUploadedAnexos] = useState<string[]>([
    'Certificado_Curaduria_Bienal_2024.pdf',
    'Acta_Aprobacion_Semillero_Escultura.pdf',
  ]);
  const [newAnnexName, setNewAnnexName] = useState('');
  const [showAnnexForm, setShowAnnexForm] = useState(false);

  const docente = MOCK_DOCENTE_USER;

  const handleAddAnnex = () => {
    if (!newAnnexName.trim()) return;
    setUploadedAnexos([...uploadedAnexos, newAnnexName.trim()]);
    setNewAnnexName('');
    setShowAnnexForm(false);
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top back button */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 hover:text-sky-950 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portal Público</span>
        </button>

        <span className="text-xs text-slate-500 font-mono">
          Radicado: <strong className="text-cyan-800">{docente.radicadoNumber}</strong>
        </span>
      </div>

      {/* Hero Faculty Card - Exact replica of the preview card in the screenshot! */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden mb-8">
        <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-600 to-teal-500 text-white flex items-center justify-center font-serif text-2xl font-bold shadow-lg shrink-0">
              EV
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                  Docente de Carrera
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  {docente.status}
                </span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-white">
                {docente.facultyName}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                {docente.department} · Bellas Artes
              </p>
            </div>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 max-w-sm w-full">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-300 font-medium">Postulación a Profesor Asociado</span>
              <span className="font-mono text-cyan-300 font-bold">{docente.progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 to-teal-400 h-2.5 rounded-full transition-all duration-700"
                style={{ width: `${docente.progressPercent}%` }}
              ></div>
            </div>
            <span className="text-[11px] text-slate-400 mt-2 block">
              Fase 03: Revisión de Obras y Entrevista con Comité Central
            </span>
          </div>
        </div>

        {/* Navigation Tabs inside Teacher Portal */}
        <div className="px-6 py-2 bg-slate-100 border-b border-slate-200 flex items-center gap-2 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('estado')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'estado'
                ? 'bg-white text-cyan-900 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Estado del Trámite
          </button>
          <button
            onClick={() => setActiveTab('publicaciones')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'publicaciones'
                ? 'bg-white text-cyan-900 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mis Publicaciones y Obras ({docente.submittedWorks.length})
          </button>
          <button
            onClick={() => setActiveTab('cursos')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'cursos'
                ? 'bg-white text-cyan-900 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Cursos Asignados & Horarios
          </button>
          <button
            onClick={() => setActiveTab('resoluciones')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'resoluciones'
                ? 'bg-white text-cyan-900 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Noticias y Resoluciones
          </button>
        </div>

        {/* Tab 1: Estado del Trámite & Próximos Pasos */}
        {activeTab === 'estado' && (
          <div className="p-6 sm:p-8 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Lado Izquierdo: Ruta de pasos */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-serif text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-700" />
                  Próximos Pasos del Proceso
                </h3>

                <div className="space-y-3">
                  {docente.nextSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                        step.completed
                          ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                          : idx === 2
                          ? 'bg-cyan-50 border-cyan-300 text-cyan-950 font-bold shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {step.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        ) : idx === 2 ? (
                          <span className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px] shrink-0 font-bold animate-pulse">
                            {idx + 1}
                          </span>
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center text-[10px] shrink-0 font-bold">
                            {idx + 1}
                          </span>
                        )}
                        <div>
                          <span className="text-sm block">{step.title}</span>
                          <span className="text-[11px] font-normal text-slate-500">
                            Fecha estimada o de ejecución
                          </span>
                        </div>
                      </div>

                      <span className="font-mono bg-white px-2.5 py-1 rounded border border-slate-200 text-slate-700 shrink-0">
                        {step.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lado Derecho: Soportes y Acciones */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="font-serif text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-teal-700" />
                  Anexos Probatorios y Soportes
                </h3>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 text-xs">
                  <span className="text-slate-600 block">
                    Documentos cargados al expediente de la postulación:
                  </span>

                  <ul className="space-y-2">
                    {uploadedAnexos.map((anexo, idx) => (
                      <li
                        key={idx}
                        className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between"
                      >
                        <span className="truncate max-w-[200px] font-medium text-slate-800">
                          {anexo}
                        </span>
                        <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          En verificación
                        </span>
                      </li>
                    ))}
                  </ul>

                  {showAnnexForm ? (
                    <div className="pt-2 flex flex-col gap-2 border-t border-slate-200">
                      <input
                        type="text"
                        value={newAnnexName}
                        onChange={(e) => setNewAnnexName(e.target.value)}
                        placeholder="Nombre_Del_Archivo.pdf..."
                        className="px-2.5 py-1.5 border border-slate-300 rounded bg-white text-xs focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setShowAnnexForm(false)}
                          className="px-2.5 py-1 text-slate-600 hover:text-slate-900"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={handleAddAnnex}
                          className="px-3 py-1 bg-cyan-700 text-white rounded font-medium"
                        >
                          Cargar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowAnnexForm(true)}
                      className="w-full py-2 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-slate-700 font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Cargar Anexo Suplementario</span>
                    </button>
                  )}
                </div>

                <div className="p-4 bg-teal-50 rounded-xl border border-teal-200 text-xs text-teal-950 flex items-start gap-2.5">
                  <Sparkles className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Comité Central de Escalafón:</strong> Su expediente cumple con los 4 años requeridos como Profesor Asistente y la suficiencia de producción artística preliminar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Mis Publicaciones y Obras */}
        {activeTab === 'publicaciones' && (
          <div className="p-6 sm:p-8 space-y-4">
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Obras de Creación e Investigación Sometidas al Baremo
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs text-slate-800">
                <thead className="bg-slate-100 text-slate-900 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Título de la Obra o Publicación</th>
                    <th className="py-3 px-4">Línea de Creación</th>
                    <th className="py-3 px-4">Año</th>
                    <th className="py-3 px-4 text-center">Puntaje</th>
                    <th className="py-3 px-4">Estado Comité</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {docente.submittedWorks.map((work, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold text-slate-900">{work.title}</td>
                      <td className="py-3 px-4 text-slate-600">{work.type}</td>
                      <td className="py-3 px-4 font-mono">{work.year}</td>
                      <td className="py-3 px-4 font-mono font-bold text-cyan-800 text-center">
                        +{work.points} pts
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                            work.status === 'Validado'
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : 'bg-amber-50 text-amber-800 border border-amber-200'
                          }`}
                        >
                          {work.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Cursos Asignados */}
        {activeTab === 'cursos' && (
          <div className="p-6 sm:p-8 space-y-4 text-xs">
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Carga Académica y Horarios de Tutoría · Semestre 2026-1
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 text-sm block">
                  Taller de Escultura y Espacio Público IV
                </span>
                <p className="text-slate-600">
                  Licenciatura en Artes Plásticas · Semestre 6 · Grupo 01
                </p>
                <div className="text-slate-500 font-mono text-[11px]">
                  Martes y Jueves: 08:00 - 12:00 · Taller 304 (Sede Centenario)
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 text-sm block">
                  Seminario de Grado en Artes Visuales
                </span>
                <p className="text-slate-600">
                  Pregrado en Artes Visuales · Semestre 8 · Grupo 02
                </p>
                <div className="text-slate-500 font-mono text-[11px]">
                  Miércoles: 14:00 - 18:00 · Aula Teórica 102
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Noticias y Resoluciones */}
        {activeTab === 'resoluciones' && (
          <div className="p-6 sm:p-8 space-y-4 text-xs">
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Histórico de Resoluciones Rectorales
            </h3>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 block text-sm">
                  Resolución No. 042 de 2023 · Ingreso a Profesor Asistente
                </span>
                <span className="text-slate-500">Expedida por Rectoría el 14 de Febrero de 2023</span>
              </div>
              <button
                onClick={onOpenNormativa}
                className="px-3 py-1.5 bg-slate-800 text-white rounded text-xs font-semibold cursor-pointer"
              >
                Ver Copia
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
