import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle,
  FileText,
  Upload,
  Plus,
  Trash2,
  Send,
  Building,
  GraduationCap,
  Sparkles,
  Calendar,
  AlertCircle,
} from 'lucide-react';
import { CategoryKey } from '../types';

interface RadicacionWizardProps {
  onBackToHome: () => void;
  onCompletedSubmission: (radicadoNum: string) => void;
}

export const RadicacionWizard: React.FC<RadicacionWizardProps> = ({
  onBackToHome,
  onCompletedSubmission,
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: 'Dra. Elena Vargas',
    documento: '1144028392',
    email: 'elena.vargas@bellasartes.edu.co',
    telefono: '315 782 9102',
    facultad: 'Facultad de Artes Visuales y Aplicadas',
    categoriaActual: 'asistente' as CategoryKey,
    categoriaPostula: 'asociado' as CategoryKey,
    aniosPermanencia: '3',
    tituloPosgrado: 'Maestría en Creación y Estética Visual (Universidad Nacional)',
    promedioEvaluacion: '4.8 / 5.0',
  });

  const [obras, setObras] = useState([
    {
      titulo: 'Instalación "Memorias del Río Cauca" (Bienal de Arte)',
      tipo: 'Creación Artística / Escultura',
      anio: '2024',
      puntosEstimados: 28,
    },
    {
      titulo: 'Monografía "Gramáticas de la Luz en el Trópico"',
      tipo: 'Publicación con Arbitraje Académico',
      anio: '2025',
      puntosEstimados: 35,
    },
  ]);

  const [nuevaObra, setNuevaObra] = useState({
    titulo: '',
    tipo: 'Creación Artística / Plásticas',
    anio: '2025',
    puntosEstimados: 15,
  });

  const [aceptoTerminos, setAceptoTerminos] = useState(false);
  const [radicadoGenerado, setRadicadoGenerado] = useState<string | null>(null);

  const handleAddObra = () => {
    if (!nuevaObra.titulo.trim()) return;
    setObras([...obras, { ...nuevaObra }]);
    setNuevaObra({
      titulo: '',
      tipo: 'Creación Artística / Plásticas',
      anio: '2025',
      puntosEstimados: 15,
    });
  };

  const handleRemoveObra = (index: number) => {
    setObras(obras.filter((_, idx) => idx !== index));
  };

  const totalPuntosEstimados = obras.reduce((acc, curr) => acc + curr.puntosEstimados, 0);

  const handleSubmitFinal = (e: React.FormEvent) => {
    e.preventDefault();
    const radNum = `RAD-2026-BA-${Math.floor(1000 + Math.random() * 9000)}`;
    setRadicadoGenerado(radNum);
    setStep(4);
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-10">
      {/* Top back button */}
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
        {/* Wizard Header */}
        <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
              Convocatoria Oficial 2026 · Bellas Artes
            </span>
            <h2 className="font-serif text-2xl font-bold mt-1">
              Radicación de Méritos y Solicitud de Escalafón
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Diligenciamiento oficial para permanencia o promoción curricular ante el Comité Central.
            </p>
          </div>

          <div className="bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700 shrink-0 text-center sm:text-right">
            <span className="text-[11px] text-slate-400 block">Puntaje Estimado</span>
            <span className="text-xl font-bold font-mono text-cyan-400">
              {totalPuntosEstimados} pts
            </span>
          </div>
        </div>

        {/* Wizard Stepper Bar */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2 overflow-x-auto text-xs">
          <div
            className={`flex items-center gap-2 font-medium shrink-0 ${
              step >= 1 ? 'text-cyan-700 font-bold' : 'text-slate-400'
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                step >= 1 ? 'bg-cyan-700 text-white' : 'bg-slate-200 text-slate-600'
              }`}
            >
              1
            </span>
            <span>Identificación y Carrera</span>
          </div>

          <div className="h-px w-8 bg-slate-200 hidden sm:block"></div>

          <div
            className={`flex items-center gap-2 font-medium shrink-0 ${
              step >= 2 ? 'text-cyan-700 font-bold' : 'text-slate-400'
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                step >= 2 ? 'bg-cyan-700 text-white' : 'bg-slate-200 text-slate-600'
              }`}
            >
              2
            </span>
            <span>Producción y Obras</span>
          </div>

          <div className="h-px w-8 bg-slate-200 hidden sm:block"></div>

          <div
            className={`flex items-center gap-2 font-medium shrink-0 ${
              step >= 3 ? 'text-cyan-700 font-bold' : 'text-slate-400'
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                step >= 3 ? 'bg-cyan-700 text-white' : 'bg-slate-200 text-slate-600'
              }`}
            >
              3
            </span>
            <span>Revisión y Declaración</span>
          </div>
        </div>

        {/* Step 1: Identificación y Carrera */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6">
            <h3 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-700" />
              1. Datos del Docente y Carrera Académica
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Nombre Completo:</label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Cédula de Ciudadanía:</label>
                <input
                  type="text"
                  value={formData.documento}
                  onChange={(e) => setFormData({ ...formData, documento: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Correo Institucional:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Facultad de Adscripción:</label>
                <select
                  value={formData.facultad}
                  onChange={(e) => setFormData({ ...formData, facultad: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none bg-white"
                >
                  <option value="Facultad de Artes Visuales y Aplicadas">Facultad de Artes Visuales y Aplicadas</option>
                  <option value="Facultad de Artes Escénicas">Facultad de Artes Escénicas</option>
                  <option value="Facultad de Música y Sonología">Facultad de Música y Sonología</option>
                  <option value="Facultad de Diseño y Nuevos Medios">Facultad de Diseño y Nuevos Medios</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Categoría Actual en Escalafón:</label>
                <select
                  value={formData.categoriaActual}
                  onChange={(e) => setFormData({ ...formData, categoriaActual: e.target.value as CategoryKey })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none bg-white font-medium"
                >
                  <option value="auxiliar">Profesor Auxiliar (Nivel 01)</option>
                  <option value="asistente">Profesor Asistente (Nivel 02)</option>
                  <option value="asociado">Profesor Asociado (Nivel 03)</option>
                  <option value="titular">Profesor Titular (Nivel 04)</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-cyan-900 block mb-1">Categoría a la que Aspira / Promoción:</label>
                <select
                  value={formData.categoriaPostula}
                  onChange={(e) => setFormData({ ...formData, categoriaPostula: e.target.value as CategoryKey })}
                  className="w-full px-3 py-2 border-2 border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none bg-cyan-50/50 font-bold text-slate-900"
                >
                  <option value="asistente">Profesor Asistente (Permanencia 3 Años)</option>
                  <option value="asociado">Profesor Asociado (Permanencia 4 Años)</option>
                  <option value="titular">Profesor Titular (Permanencia 5 Años - Máxima)</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Años de Permanencia Cumplidos:</label>
                <input
                  type="number"
                  value={formData.aniosPermanencia}
                  onChange={(e) => setFormData({ ...formData, aniosPermanencia: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Promedio Evaluación Docente:</label>
                <input
                  type="text"
                  value={formData.promedioEvaluacion}
                  onChange={(e) => setFormData({ ...formData, promedioEvaluacion: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Continuar a Producción Artística</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Producción y Obras */}
        {step === 2 && (
          <div className="p-6 sm:p-8 space-y-6">
            <h3 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-700" />
                2. Producción Artística, Creación y Publicaciones
              </span>
              <span className="text-xs font-mono text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                Subtotal: {totalPuntosEstimados} pts
              </span>
            </h3>

            {/* List of registered works */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-700 block">
                Obras y productos radicados para esta vigencia:
              </span>
              {obras.map((obra, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-0.5">
                    <h5 className="font-bold text-slate-900">{obra.titulo}</h5>
                    <div className="flex items-center gap-2 text-slate-500">
                      <span>{obra.tipo}</span>
                      <span>·</span>
                      <span>Año: {obra.anio}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 bg-cyan-100 text-cyan-900 font-bold rounded-lg font-mono">
                      +{obra.puntosEstimados} pts
                    </span>
                    <button
                      onClick={() => handleRemoveObra(idx)}
                      className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                      title="Eliminar obra"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add new work card */}
            <div className="p-4 rounded-xl border border-dashed border-cyan-400 bg-cyan-50/40 space-y-3">
              <span className="text-xs font-bold text-cyan-900 flex items-center gap-1.5">
                <Plus className="w-4 h-4" />
                Agregar Nueva Obra, Creación o Publicación:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
                <div className="sm:col-span-6">
                  <input
                    type="text"
                    value={nuevaObra.titulo}
                    onChange={(e) => setNuevaObra({ ...nuevaObra, titulo: e.target.value })}
                    placeholder="Título de la obra, exposición, libro o proyecto..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                <div className="sm:col-span-4">
                  <select
                    value={nuevaObra.tipo}
                    onChange={(e) => setNuevaObra({ ...nuevaObra, tipo: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="Creación Artística / Plásticas">Creación Artística / Plásticas (25 pts)</option>
                    <option value="Montaje Escénico / Dirección">Montaje Escénico / Dirección (28 pts)</option>
                    <option value="Composición Musical / Concierto">Composición Musical / Concierto (30 pts)</option>
                    <option value="Publicación Indexada / Libro">Publicación Indexada / Libro (35 pts)</option>
                    <option value="Curaduría Nacional">Curaduría Nacional (15 pts)</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <button
                    onClick={handleAddObra}
                    className="w-full h-full py-2 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Añadir</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-100">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-semibold cursor-pointer"
              >
                Anterior
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                Continuar a Revisión Final
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Revisión y Declaración */}
        {step === 3 && (
          <div className="p-6 sm:p-8 space-y-6">
            <h3 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <Send className="w-5 h-5 text-cyan-700" />
              3. Resumen y Firma Electrónica
            </h3>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-xs space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-3 border-b border-slate-200">
                <div>
                  <span className="text-slate-400 block font-medium">Docente:</span>
                  <span className="font-bold text-slate-900">{formData.nombre}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Categoría Actual:</span>
                  <span className="font-semibold text-slate-800 uppercase">{formData.categoriaActual}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Aspiración:</span>
                  <span className="font-bold text-cyan-800 uppercase">{formData.categoriaPostula}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Puntos Totales:</span>
                  <span className="font-bold text-emerald-700 font-mono text-sm">{totalPuntosEstimados} pts</span>
                </div>
              </div>

              <div>
                <span className="font-bold text-slate-800 block mb-1">Obras registradas para evaluación:</span>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  {obras.map((o, idx) => (
                    <li key={idx}>
                      {o.titulo} ({o.tipo}) — <strong className="font-mono text-slate-800">+{o.puntosEstimados} pts</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Declaración Juramentada */}
            <div className="p-4 bg-sky-50 rounded-xl border border-sky-200 flex items-start gap-3">
              <input
                type="checkbox"
                id="terminos"
                checked={aceptoTerminos}
                onChange={(e) => setAceptoTerminos(e.target.checked)}
                className="mt-1 w-4 h-4 text-cyan-600 rounded border-slate-300 focus:ring-cyan-500 cursor-pointer"
              />
              <label htmlFor="terminos" className="text-xs text-sky-950 leading-relaxed cursor-pointer">
                <strong>Declaración de Autenticidad:</strong> Certifico bajo la gravedad de juramento que las obras, soportes probatorios y certificaciones consignadas en este formulario son auténticas y cumplen con los estatutos de Bellas Artes Institución Universitaria del Valle del Cauca (Acuerdo Directivo 001 de 2018).
              </label>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-100">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-semibold cursor-pointer"
              >
                Anterior
              </button>
              <button
                disabled={!aceptoTerminos}
                onClick={handleSubmitFinal}
                className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                  aceptoTerminos
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md cursor-pointer'
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                <span>Radicar Solicitud Oficialmente</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmación con Radicado */}
        {step === 4 && radicadoGenerado && (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Radicación Exitosa
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-2">
                ¡Solicitud Registrada en Plataforma!
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                Su expediente ha ingresado a la Fase 02 (Verificación de Requisitos por Vicerrectoría Académica).
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-md mx-auto font-mono text-sm text-slate-800">
              <span className="text-slate-400 block text-xs">Número de Radicado Oficial:</span>
              <strong className="text-cyan-800 text-lg">{radicadoGenerado}</strong>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onCompletedSubmission(radicadoGenerado)}
                className="px-6 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg text-xs font-bold shadow-md cursor-pointer"
              >
                Ir a mi Portal de Seguimiento
              </button>
              <button
                onClick={onBackToHome}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold cursor-pointer"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
