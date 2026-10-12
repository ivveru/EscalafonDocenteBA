import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  FileText,
  Download,
  Filter,
  Scale,
  BookOpen,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { NORMATIVE_DOCS } from '../data/portalData';
import { NormativeDocument } from '../types';

interface NormativeRepositoryScreenProps {
  onBackToHome: () => void;
  onOpenDocument: (doc: NormativeDocument) => void;
}

export const NormativeRepositoryScreen: React.FC<NormativeRepositoryScreenProps> = ({
  onBackToHome,
  onOpenDocument,
}) => {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'PDF' | 'ZIP' | 'LINK'>('all');

  const allDocuments: NormativeDocument[] = [
    ...NORMATIVE_DOCS,
    {
      id: 'doc-5',
      title: 'Resolución 182 de 1974 · Personería Jurídica',
      description: 'Acto fundacional que reconoce el régimen universitario especial de Bellas Artes en Santiago de Cali.',
      type: 'PDF',
      actionText: 'Descargar PDF',
      icon: 'gavel',
      color: 'slate',
      fileSize: '1.8 MB',
      date: '1974',
      contentSnippet: 'Reconocimiento del carácter universitario e idoneidad institucional para ofertar programas profesionales en el Valle del Cauca.'
    },
    {
      id: 'doc-6',
      title: 'Ley 30 de 1992 · Régimen Especial Universitario',
      description: 'Marco legislativo nacional sobre la autonomía universitaria, régimen del profesorado y carrera docente en Colombia.',
      type: 'PDF',
      actionText: 'Descargar PDF',
      icon: 'policy',
      color: 'sky',
      fileSize: '4.2 MB',
      date: '1992',
      contentSnippet: 'Artículos 70 a 79 sobre el Estatuto del Profesor Universitario y criterios de ascenso docente.'
    },
    {
      id: 'doc-7',
      title: 'Resolución de Baremos de Producción Artística 2026',
      description: 'Tablas de equivalencia de puntos para creación plástica, diseño, obras escénicas y partituras musicales.',
      type: 'PDF',
      actionText: 'Descargar PDF',
      icon: 'menu_book',
      color: 'teal',
      fileSize: '3.7 MB',
      date: '2026',
      contentSnippet: 'Metodología oficial adoptada por el Comité Central de Clasificación y Escalafón para ponderar la producción sensible y cultural.'
    }
  ];

  const filtered = allDocuments.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterType === 'all' || doc.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 hover:text-sky-950 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portal Principal</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-800">
            Archivo y Acervo Legal Institucional
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Repositorio Normativo y Estatutario Docente
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Consulte las resoluciones rectorales, acuerdos del Consejo Directivo y reglamentos aplicables al Escalafón.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por palabra clave, acuerdo o tema..."
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end">
            <Filter className="w-3.5 h-3.5 text-slate-500 mr-1" />
            {(['all', 'PDF', 'ZIP', 'LINK'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  filterType === type
                    ? 'bg-cyan-700 text-white font-bold'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {type === 'all' ? 'Todos' : type}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((doc) => (
            <div
              key={doc.id}
              onClick={() => onOpenDocument(doc)}
              className="p-5 rounded-xl border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all bg-white flex flex-col justify-between gap-3 cursor-pointer group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded font-bold">
                    {doc.type}
                  </span>
                  <span className="text-slate-400 font-mono">{doc.date}</span>
                </div>
                <h4 className="font-serif font-bold text-slate-900 group-hover:text-cyan-800 transition-colors">
                  {doc.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {doc.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-cyan-800 font-semibold">
                <span>{doc.actionText}</span>
                <Download className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
