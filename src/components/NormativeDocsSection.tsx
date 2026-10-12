import React from 'react';
import {
  BookOpen,
  ShieldCheck,
  Scale,
  FolderArchive,
  Download,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { NORMATIVE_DOCS } from '../data/portalData';
import { NormativeDocument } from '../types';

interface NormativeDocsSectionProps {
  onOpenDocument: (doc: NormativeDocument) => void;
  onOpenFullRepository: () => void;
}

export const NormativeDocsSection: React.FC<NormativeDocsSectionProps> = ({
  onOpenDocument,
  onOpenFullRepository,
}) => {
  const getDocIcon = (id: string) => {
    switch (id) {
      case 'doc-1':
        return <BookOpen className="w-6 h-6 text-slate-700" />;
      case 'doc-2':
        return <ShieldCheck className="w-6 h-6 text-sky-800" />;
      case 'doc-3':
        return <Scale className="w-6 h-6 text-teal-800" />;
      case 'doc-4':
        return <FolderArchive className="w-6 h-6 text-cyan-800" />;
      default:
        return <BookOpen className="w-6 h-6 text-slate-700" />;
    }
  };

  return (
    <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" id="normativa">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800">
              Marco Legal y Reglamentario
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Documentos Normativos y de Apoyo
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Consulte y descargue los reglamentos, políticas y formatos vigentes aprobados por el Consejo Directivo.
            </p>
          </div>
          <button
            onClick={onOpenFullRepository}
            className="text-xs font-bold text-sky-800 hover:text-sky-950 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Repositorio Normativo Completo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {NORMATIVE_DOCS.map((doc) => {
            return (
              <div
                key={doc.id}
                onClick={() => onOpenDocument(doc)}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between gap-4 cursor-pointer group"
                title={`Abrir y consultar ${doc.title}`}
              >
                <div className="flex flex-col gap-2">
                  <span
                    className={`p-2 rounded-lg w-fit transition-transform group-hover:scale-105 ${
                      doc.color === 'slate'
                        ? 'bg-slate-100'
                        : doc.color === 'sky'
                        ? 'bg-sky-100'
                        : doc.color === 'teal'
                        ? 'bg-teal-100'
                        : 'bg-cyan-100'
                    }`}
                  >
                    {getDocIcon(doc.id)}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-sky-900 transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="inline-flex items-center justify-between text-xs font-semibold text-sky-800 group-hover:text-sky-950 pt-2 border-t border-slate-100">
                  <span>{doc.actionText}</span>
                  {doc.type === 'LINK' ? (
                    <ExternalLink className="w-4 h-4" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
