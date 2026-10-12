import React, { useState } from 'react';
import {
  Send,
  FileCheck2,
  UsersRound,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Building,
  Info,
  X,
  ChevronRight,
} from 'lucide-react';
import { PROCESS_STAGES } from '../data/portalData';
import { ProcessStage } from '../types';

interface ProcessStagesSectionProps {
  onStartRadicacion: () => void;
}

export const ProcessStagesSection: React.FC<ProcessStagesSectionProps> = ({
  onStartRadicacion,
}) => {
  const [selectedStage, setSelectedStage] = useState<ProcessStage | null>(null);

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'stage-1':
        return <Send className="w-7 h-7 text-sky-700" />;
      case 'stage-2':
        return <FileCheck2 className="w-7 h-7 text-teal-700" />;
      case 'stage-3':
        return <UsersRound className="w-7 h-7 text-cyan-700" />;
      case 'stage-4':
        return <Award className="w-7 h-7 text-emerald-700" />;
      default:
        return <CheckCircle2 className="w-7 h-7 text-sky-700" />;
    }
  };

  return (
    <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" id="etapas">
      <div className="flex flex-col gap-8">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-800">
            Ruta de Evaluación Docente
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Etapas del Proceso de Escalafón
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Pasos oficiales reglamentarios desde la apertura de convocatoria hasta la emisión formal de la resolución de promoción o permanencia.
          </p>
        </div>

        {/* Diagrama secuencial de 4 etapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STAGES.map((stage) => {
            return (
              <div
                key={stage.id}
                onClick={() => setSelectedStage(stage)}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all hover:border-cyan-400 flex flex-col justify-between relative group cursor-pointer"
                title="Haga clic para ver detalles y requisitos de esta etapa"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center ${
                        stage.color === 'sky'
                          ? 'bg-sky-100 text-sky-800'
                          : stage.color === 'teal'
                          ? 'bg-teal-100 text-teal-800'
                          : stage.color === 'cyan'
                          ? 'bg-cyan-100 text-cyan-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {stage.number}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {stage.phase}
                    </span>
                  </div>

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                      stage.color === 'sky'
                        ? 'bg-sky-50'
                        : stage.color === 'teal'
                        ? 'bg-teal-50'
                        : stage.color === 'cyan'
                        ? 'bg-cyan-50'
                        : 'bg-emerald-50'
                    }`}
                  >
                    {getStageIcon(stage.id)}
                  </div>

                  <h3 className="font-bold text-slate-900 text-base group-hover:text-cyan-800 transition-colors">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100 text-[11px] font-medium flex items-center justify-between text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-700" />
                    <span className="text-slate-800 font-semibold">{stage.footerNote}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal de Detalle de Etapa */}
      {selectedStage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative flex flex-col gap-4">
            <button
              onClick={() => setSelectedStage(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <span className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-sm">
                {selectedStage.number}
              </span>
              <div>
                <span className="text-xs uppercase font-bold text-cyan-800 tracking-wider">
                  {selectedStage.phase}
                </span>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  {selectedStage.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedStage.description}
            </p>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col gap-2.5">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-cyan-700" />
                Documentos y requerimientos de esta fase:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedStage.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <Building className="w-4 h-4 text-slate-500 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                    Dependencia
                  </span>
                  <span className="font-medium text-slate-800">{selectedStage.department}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                    Tiempo Estimado
                  </span>
                  <span className="font-medium text-slate-800">{selectedStage.estimatedTime}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              {selectedStage.id === 'stage-1' && (
                <button
                  onClick={() => {
                    setSelectedStage(null);
                    onStartRadicacion();
                  }}
                  className="px-4 py-2 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Diligenciar Radicación</span>
                </button>
              )}
              <button
                onClick={() => setSelectedStage(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
