import React, { useState } from 'react';
import {
  X,
  Download,
  FileText,
  Printer,
  CheckCircle,
  ExternalLink,
  Shield,
  Search,
} from 'lucide-react';
import { NormativeDocument } from '../types';

interface DocumentModalProps {
  document: NormativeDocument | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ document, isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen || !document) return null;

  const handleDownload = () => {
    // Generate realistic text file representing official document
    const content = `===============================================================
BELLAS ARTES INSTITUCIÓN UNIVERSITARIA DEL VALLE DEL CAUCA
PORTAL DE ESCALAFÓN Y PERMANENCIA DOCENTE
===============================================================
DOCUMENTO: ${document.title.toUpperCase()}
TIPO: ${document.type}
FECHA OFICIAL: ${document.date || 'Periodo Académico 2026'}
REVISIÓN: Vicerrectoría Académica & Consejo Directivo

DESCRIPCIÓN Y RESUMEN EJECUTIVO:
${document.description}

CONTENIDO REGLAMENTARIO:
${document.contentSnippet || 'Contenido oficial avalado según el Estatuto Docente Institucional.'}

ARTÍCULO 1. ÁMBITO DE APLICACIÓN.
El presente documento rige las relaciones académicas y administrativas para el cuerpo de profesores de carrera en Bellas Artes - Institución Universitaria del Valle del Cauca, de conformidad con la Ley 30 de 1992 y los acuerdos internos vigentes.

ARTÍCULO 2. CRITERIOS DE CLASIFICACIÓN.
Para la promoción en las categorías de Profesor Auxiliar, Profesor Asistente, Profesor Asociado y Profesor Titular, se valorarán de forma integral la producción artística, las obras con curaduría o circulación, la investigación formativa y la excelencia docente demostrada.

Personería Jurídica Resolución 182 de 1974 - Cali, Colombia.
===============================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = window.document.createElement('a');
    link.href = url;
    link.download = `${document.title.replace(/\s+/g, '_')}_BellasArtes.txt`;
    link.click();
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-slate-800 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                Documento Oficial · Bellas Artes
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold">{document.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="px-6 py-2.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4 text-slate-600 font-medium">
            <span>
              <strong>Formato:</strong> {document.type}
            </span>
            <span>
              <strong>Tamaño:</strong> {document.fileSize || '3.5 MB'}
            </span>
            <span>
              <strong>Vigencia:</strong> {document.date || '2026'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-2.5 py-1 text-slate-700 hover:bg-slate-200 rounded flex items-center gap-1 transition-colors cursor-pointer"
              title="Imprimir documento"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1 bg-cyan-700 hover:bg-cyan-800 text-white rounded font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar Archivo</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-700 flex-1 leading-relaxed">
          {downloadSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800 animate-fade-in">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Archivo descargado exitosamente. Se ha guardado en su carpeta de Descargas.
              </span>
            </div>
          )}

          <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 flex items-start gap-3">
            <Shield className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sky-950 text-xs sm:text-sm">
                Aprobación del Consejo Directivo
              </h4>
              <p className="text-xs text-sky-900 mt-0.5">
                {document.description}
              </p>
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-3 font-serif">
            <h5 className="font-bold text-slate-900 text-base font-serif border-b border-slate-200 pb-2">
              Resumen Articulado Institucional
            </h5>
            <p className="text-slate-800 text-sm leading-relaxed">
              {document.contentSnippet}
            </p>
            <p className="text-xs text-slate-600 italic">
              «Las solicitudes de ascenso y permanencia se regirán estrictamente por los principios de mérito artístico, producción disciplinar y cualificación pedagógica continua.»
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
            <h6 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Anexos y formatos vinculados:
            </h6>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                <span>Ficha técnica de obras plásticas, montajes escénicos o composiciones sonoras</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                <span>Certificado de tiempo de permanencia expedido por Talento Humano</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                <span>Puntaje de evaluación de estudiantes y concepto de Decanatura</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Institución Universitaria del Valle del Cauca · Cali</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-semibold transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
