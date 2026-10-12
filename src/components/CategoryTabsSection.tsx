import React, { useState } from 'react';
import {
  GraduationCap,
  Users2,
  Award,
  Crown,
  Clock,
  ClipboardList,
  CheckCircle,
  FolderOpen,
  MousePointerClick,
  Plus,
  Pencil,
  Check,
  Calculator,
} from 'lucide-react';
import { CATEGORIES_DATA } from '../data/portalData';
import { CategoryKey } from '../types';

interface CategoryTabsSectionProps {
  selectedCategory: CategoryKey;
  setSelectedCategory: (key: CategoryKey) => void;
  onOpenCalculator: () => void;
}

export const CategoryTabsSection: React.FC<CategoryTabsSectionProps> = ({
  selectedCategory,
  setSelectedCategory,
  onOpenCalculator,
}) => {
  // Custom user editable notes per category
  const [customNotes, setCustomNotes] = useState<Record<CategoryKey, string>>({
    auxiliar:
      'Este es el contenido para el puesto de Auxiliar. Aquí puedes colocar funciones, requisitos o descripción del rol.',
    asistente:
      'Este es el contenido para el puesto de Asistente. Aquí puedes colocar funciones, requisitos o descripción del rol.',
    asociado:
      'Este es el contenido para el puesto de Asociado. Aquí puedes colocar funciones, requisitos o descripción del rol.',
    titular:
      'Este es el contenido para el puesto de Titular. Aquí puedes colocar funciones, requisitos o descripción del rol.',
  });

  const [isEditingNote, setIsEditingNote] = useState(false);
  const [extraRequirements, setExtraRequirements] = useState<Record<CategoryKey, string[]>>({
    auxiliar: ['Certificado de aptitud pedagógica en educación artística superior.'],
    asistente: ['Mínimo un (1) artículo de investigación formativa o catálogo de obra curada.'],
    asociado: ['Dirección de al menos dos (2) trabajos de grado de pregrado o posgrado.'],
    titular: ['Reconocimiento o mención de honor departamental/nacional en artes o docencia.'],
  });

  const [newRequirementText, setNewRequirementText] = useState('');
  const [showAddInput, setShowAddInput] = useState(false);

  const category = CATEGORIES_DATA[selectedCategory];

  const handleAddRequirement = () => {
    if (!newRequirementText.trim()) return;
    setExtraRequirements((prev) => ({
      ...prev,
      [selectedCategory]: [...prev[selectedCategory], newRequirementText.trim()],
    }));
    setNewRequirementText('');
    setShowAddInput(false);
  };

  return (
    <section className="w-full bg-slate-100/80 py-12 border-y border-slate-200" id="categorias">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800">
              Estructura por Cargos y Perfiles
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Descripción de las Categorías Docentes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Navegue entre las pestañas para consultar los requisitos de ingreso, responsabilidades funcionales y documentación exigida en cada nivel.
            </p>
          </div>
          <span className="text-xs text-slate-500 font-medium bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm shrink-0 flex items-center gap-1.5">
            <MousePointerClick className="w-4 h-4 text-cyan-700" />
            Haga clic para alternar
          </span>
        </div>

        {/* Botones de Pestañas */}
        <div
          className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-xl border border-slate-200 shadow-sm w-fit"
          role="tablist"
        >
          <button
            aria-selected={selectedCategory === 'auxiliar'}
            className={`tab-btn px-4 sm:px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              selectedCategory === 'auxiliar'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            onClick={() => {
              setSelectedCategory('auxiliar');
              setIsEditingNote(false);
            }}
            role="tab"
            type="button"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Auxiliar</span>
          </button>

          <button
            aria-selected={selectedCategory === 'asistente'}
            className={`tab-btn px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              selectedCategory === 'asistente'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            onClick={() => {
              setSelectedCategory('asistente');
              setIsEditingNote(false);
            }}
            role="tab"
            type="button"
          >
            <Users2 className="w-4 h-4" />
            <span>Asistente</span>
          </button>

          <button
            aria-selected={selectedCategory === 'asociado'}
            className={`tab-btn px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              selectedCategory === 'asociado'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            onClick={() => {
              setSelectedCategory('asociado');
              setIsEditingNote(false);
            }}
            role="tab"
            type="button"
          >
            <Award className="w-4 h-4" />
            <span>Asociado</span>
          </button>

          <button
            aria-selected={selectedCategory === 'titular'}
            className={`tab-btn px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              selectedCategory === 'titular'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            onClick={() => {
              setSelectedCategory('titular');
              setIsEditingNote(false);
            }}
            role="tab"
            type="button"
          >
            <Crown className="w-4 h-4" />
            <span>Titular</span>
          </button>
        </div>

        {/* Contenedor de contenido activo */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 sm:p-8">
          <div className="category-panel flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${category.badgeBg} ${category.badgeText} ${category.badgeBorder}`}
                >
                  {selectedCategory === 'auxiliar' && 'Categoría Base · Nivel 01'}
                  {selectedCategory === 'asistente' && 'Categoría Intermedia · Nivel 02'}
                  {selectedCategory === 'asociado' && 'Categoría Avanzada · Nivel 03'}
                  {selectedCategory === 'titular' && 'Categoría Cumbre · Nivel 04 (Máxima Distinción)'}
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mt-2">
                  {category.name}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Permanencia: {category.permanence}</span>
                </div>

                <button
                  onClick={onOpenCalculator}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-cyan-800 bg-cyan-50 hover:bg-cyan-100 px-3 py-1.5 rounded-lg border border-cyan-200 transition-colors cursor-pointer"
                  title="Calcular si cumples con los puntos exigidos"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Baremo: {category.puntosMinimos} pts mín.</span>
                </button>
              </div>
            </div>

            {/* Bloque descriptivo con opción interactiva */}
            <div
              className={`p-4 rounded-xl border-l-4 transition-colors ${
                selectedCategory === 'auxiliar'
                  ? 'bg-sky-50/80 border-sky-500'
                  : selectedCategory === 'asistente'
                  ? 'bg-teal-50/80 border-teal-500'
                  : selectedCategory === 'asociado'
                  ? 'bg-cyan-50/80 border-cyan-600'
                  : 'bg-slate-100 border-slate-800'
              }`}
            >
              {isEditingNote ? (
                <div className="flex flex-col gap-2">
                  <textarea
                    value={customNotes[selectedCategory]}
                    onChange={(e) =>
                      setCustomNotes((prev) => ({
                        ...prev,
                        [selectedCategory]: e.target.value,
                      }))
                    }
                    className="w-full text-sm sm:text-base text-slate-800 p-2.5 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    rows={2}
                  />
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setIsEditingNote(false)}
                      className="px-3 py-1 bg-slate-800 text-white rounded text-xs font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Guardar nota
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                    {customNotes[selectedCategory]}
                  </p>
                  <button
                    onClick={() => setIsEditingNote(true)}
                    className="text-slate-400 hover:text-slate-700 p-1 rounded transition-colors shrink-0 cursor-pointer"
                    title="Editar nota descriptiva"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Tarjetas estructuradas de perfil */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Funciones */}
              <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <ClipboardList className="w-4 h-4 text-sky-600" />
                  <span>Funciones Principales</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {category.funciones}
                </p>
              </div>

              {/* Requisitos */}
              <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-cyan-600" />
                  <span>
                    {selectedCategory === 'auxiliar' ? 'Requisitos de Ingreso' : 'Requisitos de Promoción'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {category.requisitos}
                </p>
                <div className="pt-2 mt-auto border-t border-slate-200/80 text-[11px] text-slate-500 font-medium">
                  <strong>Grado mínimo:</strong> {category.gradosRequeridos}
                </div>
              </div>

              {/* Espacio para Añadir Información */}
              <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                    <FolderOpen className="w-4 h-4 text-slate-600" />
                    <span>Espacio para Añadir Información</span>
                  </div>
                  <button
                    onClick={() => setShowAddInput(!showAddInput)}
                    className="text-xs text-cyan-700 hover:text-cyan-900 font-semibold flex items-center gap-1 cursor-pointer"
                    title="Añadir requerimiento o criterio específico"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Añadir</span>
                  </button>
                </div>

                <div className="border-2 border-dashed border-slate-300 rounded-lg p-3 text-xs text-slate-600 bg-white space-y-2">
                  <span className="text-[11px] text-slate-400 block italic text-center">
                    {category.espacioInfo}
                  </span>

                  {extraRequirements[selectedCategory].map((req, idx) => (
                    <div
                      key={idx}
                      className="p-1.5 bg-slate-50 rounded border border-slate-200 text-slate-700 flex items-start gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1.5 shrink-0"></span>
                      <span>{req}</span>
                    </div>
                  ))}

                  {showAddInput && (
                    <div className="pt-2 flex flex-col gap-1.5 border-t border-slate-200">
                      <input
                        type="text"
                        value={newRequirementText}
                        onChange={(e) => setNewRequirementText(e.target.value)}
                        placeholder="Escriba requerimiento específico..."
                        className="w-full px-2 py-1 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleAddRequirement();
                        }}
                      />
                      <div className="flex justify-end gap-1">
                        <button
                          onClick={() => setShowAddInput(false)}
                          className="px-2 py-0.5 text-[11px] text-slate-500 hover:text-slate-700 cursor-pointer"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={handleAddRequirement}
                          className="px-2 py-0.5 bg-cyan-700 text-white text-[11px] rounded font-medium cursor-pointer"
                        >
                          Guardar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
