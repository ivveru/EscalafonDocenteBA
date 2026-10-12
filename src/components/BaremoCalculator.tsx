import React, { useState } from 'react';
import { ArrowLeft, Calculator, Award, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/portalData';
import { CategoryKey } from '../types';

interface BaremoCalculatorProps {
  onBackToHome: () => void;
  onSelectCategory: (key: CategoryKey) => void;
}

export const BaremoCalculator: React.FC<BaremoCalculatorProps> = ({
  onBackToHome,
  onSelectCategory,
}) => {
  const [obrasIndividuales, setObrasIndividuales] = useState(1);
  const [obrasColectivas, setObrasColectivas] = useState(2);
  const [publicaciones, setPublicaciones] = useState(1);
  const [posgrado, setPosgrado] = useState<'ninguno' | 'especializacion' | 'maestria' | 'doctorado'>('maestria');
  const [aniosServicio, setAniosServicio] = useState(4);
  const [promedioDocente, setPromedioDocente] = useState(4.8);

  // Scoring weights from Estatuto Docente Acuerdo 001
  const posgradoPoints = {
    ninguno: 0,
    especializacion: 15,
    maestria: 28,
    doctorado: 45,
  }[posgrado];

  const totalPoints =
    obrasIndividuales * 25 +
    obrasColectivas * 10 +
    publicaciones * 30 +
    posgradoPoints +
    aniosServicio * 3 +
    Math.round(promedioDocente * 2);

  const getQualifyingCategory = (pts: number): { key: CategoryKey; name: string } => {
    if (pts >= 120) return { key: 'titular', name: 'Profesor Titular (Nivel 04)' };
    if (pts >= 85) return { key: 'asociado', name: 'Profesor Asociado (Nivel 03)' };
    if (pts >= 55) return { key: 'asistente', name: 'Profesor Asistente (Nivel 02)' };
    if (pts >= 30) return { key: 'auxiliar', name: 'Profesor Auxiliar (Nivel 01)' };
    return { key: 'auxiliar', name: 'Pendiente acumulación de méritos' };
  };

  const qualified = getQualifyingCategory(totalPoints);

  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-10">
      <div className="mb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 hover:text-sky-950 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portal Principal</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
              Herramienta de Simulación Estatutaria
            </span>
            <h2 className="font-serif text-2xl font-bold mt-1">
              Simulador de Baremos & Categorías de Escalafón
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Calcule su puntaje proyectado según el Acuerdo Directivo No. 001 de 2018.
            </p>
          </div>

          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-center sm:text-right shrink-0">
            <span className="text-[11px] text-slate-400 block font-sans">Puntaje Total Proyectado</span>
            <span className="text-2xl font-bold font-mono text-cyan-400">{totalPoints} pts</span>
          </div>
        </div>

        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Inputs Section */}
          <div className="md:col-span-7 space-y-5 text-xs">
            <h3 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-cyan-700" />
              Parámetros de Evaluación Curricular
            </h3>

            <div className="space-y-4">
              <div>
                <label className="font-semibold text-slate-800 block mb-1">
                  Obras Artísticas Individuales o Curadurías Principales (25 pts c/u):
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="6"
                    value={obrasIndividuales}
                    onChange={(e) => setObrasIndividuales(Number(e.target.value))}
                    className="flex-1 accent-cyan-600"
                  />
                  <span className="w-8 font-mono font-bold text-slate-900 text-sm text-center">
                    {obrasIndividuales}
                  </span>
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-800 block mb-1">
                  Obras Colectivas, Conciertos o Montajes Teatrales (10 pts c/u):
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={obrasColectivas}
                    onChange={(e) => setObrasColectivas(Number(e.target.value))}
                    className="flex-1 accent-cyan-600"
                  />
                  <span className="w-8 font-mono font-bold text-slate-900 text-sm text-center">
                    {obrasColectivas}
                  </span>
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-800 block mb-1">
                  Libros, Monografías o Artículos Indexados (30 pts c/u):
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={publicaciones}
                    onChange={(e) => setPublicaciones(Number(e.target.value))}
                    className="flex-1 accent-cyan-600"
                  />
                  <span className="w-8 font-mono font-bold text-slate-900 text-sm text-center">
                    {publicaciones}
                  </span>
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-800 block mb-1">
                  Título de Posgrado Convalidado:
                </label>
                <select
                  value={posgrado}
                  onChange={(e) => setPosgrado(e.target.value as any)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white font-medium focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                >
                  <option value="ninguno">Pregrado Universitario Únicamente (0 pts)</option>
                  <option value="especializacion">Especialización en Artes o Educación (+15 pts)</option>
                  <option value="maestria">Maestría en Creación, Artes o Humanidades (+28 pts)</option>
                  <option value="doctorado">Doctorado (Ph.D.) en Artes o Pedagogía (+45 pts)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-slate-800 block mb-1">
                    Años de Servicio (3 pts / año):
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="30"
                    value={aniosServicio}
                    onChange={(e) => setAniosServicio(Number(e.target.value))}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-800 block mb-1">
                    Promedio Evaluación (1 a 5):
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    value={promedioDocente}
                    onChange={(e) => setPromedioDocente(Number(e.target.value))}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="md:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
            <h4 className="font-serif text-base font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-700" />
              Resultado de la Simulación
            </h4>

            <div className="p-4 bg-white rounded-xl border border-cyan-200 shadow-sm text-center space-y-1">
              <span className="text-[11px] uppercase font-bold text-cyan-800 tracking-wider">
                Categoría Sugerida
              </span>
              <h5 className="font-serif text-xl font-bold text-slate-900">
                {qualified.name}
              </h5>
              <span className="text-xs text-slate-500 block">
                Alcanzó <strong className="text-cyan-900 font-mono">{totalPoints} puntos</strong>{' '}
                en la baremación.
              </span>
            </div>

            {/* Threshold reference list */}
            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-700 block">Umbrales Reglamentarios:</span>
              <div className="space-y-1.5 font-mono text-[11px]">
                <div
                  className={`p-2 rounded flex justify-between ${
                    totalPoints >= 120 ? 'bg-emerald-100 text-emerald-900 font-bold' : 'text-slate-500'
                  }`}
                >
                  <span>Profesor Titular:</span>
                  <span>120 pts mín. (5 años)</span>
                </div>
                <div
                  className={`p-2 rounded flex justify-between ${
                    totalPoints >= 85 && totalPoints < 120
                      ? 'bg-cyan-100 text-cyan-900 font-bold'
                      : 'text-slate-500'
                  }`}
                >
                  <span>Profesor Asociado:</span>
                  <span>85 pts mín. (4 años)</span>
                </div>
                <div
                  className={`p-2 rounded flex justify-between ${
                    totalPoints >= 55 && totalPoints < 85
                      ? 'bg-teal-100 text-teal-900 font-bold'
                      : 'text-slate-500'
                  }`}
                >
                  <span>Profesor Asistente:</span>
                  <span>55 pts mín. (3 años)</span>
                </div>
                <div
                  className={`p-2 rounded flex justify-between ${
                    totalPoints >= 30 && totalPoints < 55
                      ? 'bg-sky-100 text-sky-900 font-bold'
                      : 'text-slate-500'
                  }`}
                >
                  <span>Profesor Auxiliar:</span>
                  <span>30 pts mín. (2 años)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onSelectCategory(qualified.key);
                onBackToHome();
              }}
              className="w-full py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Ver Requisitos de {qualified.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
