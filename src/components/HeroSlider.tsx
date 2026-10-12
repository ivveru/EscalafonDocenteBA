import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, FileText, Send, Sparkles, Calendar, Calculator } from 'lucide-react';
import { HERO_BG_IMAGE } from '../data/portalData';
import { ActiveScreen } from '../types';

interface HeroSliderProps {
  onStartRadicacion: () => void;
  onViewRegulations: () => void;
  setActiveScreen: (screen: ActiveScreen) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onStartRadicacion,
  onViewRegulations,
  setActiveScreen,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: 'Periodo Académico Vigente 2026',
      slideNum: 'Slide 01 / 03',
      title: 'Convocatoria & Permanencia Docente 2026',
      description:
        'Apertura oficial del periodo de radicación de méritos, producción artística, cualificación pedagógica y evaluación curricular según el estatuto docente institucional.',
      primaryBtnText: 'Iniciar Radicación en Línea',
      primaryBtnAction: onStartRadicacion,
      primaryIcon: Send,
      secondaryBtnText: 'Ver Reglamento Oficial',
      secondaryBtnAction: onViewRegulations,
      secondaryIcon: FileText,
      accentColor: 'cyan',
    },
    {
      badge: 'Criterios de Evaluación 2026',
      slideNum: 'Slide 02 / 03',
      title: 'Baremo de Creación Artística & Baremación',
      description:
        'Consulte la tabla de ponderación para obras de artes plásticas, escénicas, música, diseño y publicaciones indexadas aprobadas por el Comité Central.',
      primaryBtnText: 'Simular Puntaje de Baremos',
      primaryBtnAction: () => setActiveScreen('baremo'),
      primaryIcon: Calculator,
      secondaryBtnText: 'Consultar Estatuto Docente',
      secondaryBtnAction: onViewRegulations,
      secondaryIcon: FileText,
      accentColor: 'teal',
    },
    {
      badge: 'Calendario Institucional 2026',
      slideNum: 'Slide 03 / 03',
      title: 'Cronograma Oficial de Comités y Resoluciones',
      description:
        'Fechas límite de radicación documental, etapas de cotejo curricular por Vicerrectoría Académica y expedición formal de resoluciones rectorales.',
      primaryBtnText: 'Consultar Fechas de Corte',
      primaryBtnAction: () => {
        const el = document.getElementById('etapas');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      primaryIcon: Calendar,
      secondaryBtnText: 'Ver Etapas del Proceso',
      secondaryBtnAction: () => {
        const el = document.getElementById('etapas');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      secondaryIcon: Sparkles,
      accentColor: 'sky',
    },
  ];

  // Auto-play optional pause on hover
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];
  const PrimaryIcon = slide.primaryIcon;
  const SecondaryIcon = slide.secondaryIcon;

  return (
    <section className="w-full bg-slate-900 text-white relative overflow-hidden" id="inicio">
      {/* Indicador WordPress Ready / Shortcode banner bar */}
      <div className="bg-slate-950/80 border-b border-slate-800 px-4 py-1.5 text-center text-[11px] text-slate-400 font-mono flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Contenedor listo para carrusel institucional · Shortcode compatible:</span>
        <code className="text-cyan-300 bg-slate-800 px-2 py-0.5 rounded text-[11px] font-bold">
          [slider id="escalafon_docente_banner"]
        </code>
      </div>

      {/* Slide activo con fondo y contenido */}
      <div className="relative max-w-[1320px] mx-auto min-h-[360px] md:min-h-[420px] flex items-center px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Imagen fotográfica de fondo decorativa */}
        <img
          alt="Convocatoria y Permanencia de Escalafón Docente Bellas Artes"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter brightness-75"
          src={HERO_BG_IMAGE}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>

        {/* Contenido textual del slider */}
        <div className="relative z-10 max-w-2xl flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wide border border-cyan-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {slide.badge}
            </span>
            <span className="text-xs text-slate-400 font-mono bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
              {slide.slideNum}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
            {slide.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {slide.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={slide.primaryBtnAction}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <PrimaryIcon className="w-4 h-4" />
              <span>{slide.primaryBtnText}</span>
            </button>

            <button
              onClick={slide.secondaryBtnAction}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 backdrop-blur-sm transition-all cursor-pointer"
            >
              <SecondaryIcon className="w-4 h-4" />
              <span>{slide.secondaryBtnText}</span>
            </button>
          </div>
        </div>

        {/* Tarjeta flotante visible en desktop con vista previa de trámite */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10 w-80 bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 shadow-2xl text-left">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
            <span className="text-cyan-400 font-medium">Estado de Solicitud</span>
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30">
              En Trámite
            </span>
          </div>
          <div className="mt-3">
            <h4 className="font-bold text-white text-sm">Profesor Asociado</h4>
            <div className="flex items-center justify-between text-xs text-slate-400 mt-1 mb-1.5">
              <span>Evaluación en curso</span>
              <span className="font-mono text-cyan-300 font-bold">66% completado</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-400 h-2 rounded-full w-[66%]"></div>
            </div>
          </div>
          <div className="mt-3.5 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
              Próximos Pasos:
            </span>
            <ul className="space-y-1 text-[11px] text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>1. Entrevista con Comité · 15 Nov</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                <span>2. Entrega de Portafolio Final · 30 Nov</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setActiveScreen('dashboard')}
            className="w-full mt-3 text-center text-xs py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded-lg transition-colors font-medium border border-slate-700 cursor-pointer"
          >
            Ver Portal de Seguimiento
          </button>
        </div>

        {/* Botones de navegación del slider */}
        <button
          onClick={prevSlide}
          aria-label="Slide anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/10 backdrop-blur-sm cursor-pointer"
          type="button"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Slide siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/10 backdrop-blur-sm cursor-pointer"
          type="button"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicadores / Dots inferiores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-slate-950/70 px-3 py-1.5 rounded-full border border-slate-800">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Diapositiva ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
