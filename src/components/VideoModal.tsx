import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  ListVideo,
  FileText,
  Clock,
  Sparkles,
  Maximize2,
} from 'lucide-react';
import { HERO_BG_IMAGE } from '../data/portalData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoType: 'general' | 'tutorial';
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoType }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(38);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [activeTab, setActiveTab] = useState<'video' | 'chapters' | 'transcript'>('video');

  const totalDuration = videoType === 'general' ? 285 : 510; // in seconds

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && isOpen) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000 / playbackRate);
    }
    return () => clearInterval(timer);
  }, [isPlaying, isOpen, playbackRate, totalDuration]);

  if (!isOpen) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const videoTitle =
    videoType === 'general'
      ? 'Video sobre el proceso de escalafón docente'
      : 'Video del Instructivo: Diligenciamiento y Cargue de Soportes';

  const chapters =
    videoType === 'general'
      ? [
          { time: 0, title: '01. Bienvenida e introducción al estatuto docente', duration: '00:45' },
          { time: 45, title: '02. Categorías del escalafón y tiempos de permanencia', duration: '01:15' },
          { time: 120, title: '03. Requisitos para Auxiliar, Asistente, Asociado y Titular', duration: '01:30' },
          { time: 210, title: '04. Procedimiento de radicación y comités evaluadores', duration: '01:15' },
        ]
      : [
          { time: 0, title: '01. Ingreso al portal institucional y autenticación', duration: '01:30' },
          { time: 90, title: '02. Diligenciamiento de la hoja de vida y datos de carrera', duration: '02:00' },
          { time: 210, title: '03. Carga y clasificación de producción artística', duration: '02:30' },
          { time: 360, title: '04. Radicación final y generación de comprobante oficial', duration: '02:30' },
        ];

  const transcript =
    videoType === 'general'
      ? `Estimados docentes de Bellas Artes Institución Universitaria del Valle del Cauca:

Bienvenidos a la orientación institucional sobre el Proceso de Escalafón y Permanencia Docente 2026. 

El presente audiovisual tiene como objetivo ilustrar las directrices establecidas en el Acuerdo Directivo No. 001 de 2018 (Estatuto Docente), garantizando transparencia, mérito y reconocimiento a la producción estética, pedagógica e investigativa de nuestros profesores.

La carrera profesoral se organiza en cuatro niveles sucesivos: Profesor Auxiliar (2 años), Profesor Asistente (3 años), Profesor Asociado (4 años) y Profesor Titular (5 años). Cada nivel evalúa la solvencia pedagógica, los años de servicio ininterrumpido y el impacto de las obras y publicaciones evaluadas por el Comité Central de Clasificación y Escalafón.`
      : `Instructivo Oficial de Radicación en Línea:

Paso 1: Para iniciar su postulación, ingrese al Portal de Escalafón Docente y haga clic en "Iniciar Radicación en Línea".
Paso 2: Confirme sus datos de escalafón actual y seleccione la categoría a la cual postula su ascenso o permanencia.
Paso 3: Adjunte en formato PDF o enlace web los soportes probatorios de sus obras de creación artística (música, teatro, artes plásticas, diseño).
Paso 4: Verifique la sumatoria preliminar de baremos y firme electrónicamente la radicación. El sistema generará su radicado con código QR oficial.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Top Header */}
        <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span className="font-semibold text-white text-sm sm:text-base truncate max-w-md">
              {videoTitle}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
              <button
                onClick={() => setActiveTab('video')}
                className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                  activeTab === 'video' ? 'bg-cyan-600 text-white font-semibold' : 'text-slate-400'
                }`}
              >
                Reproductor
              </button>
              <button
                onClick={() => setActiveTab('chapters')}
                className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                  activeTab === 'chapters' ? 'bg-cyan-600 text-white font-semibold' : 'text-slate-400'
                }`}
              >
                Capítulos
              </button>
              <button
                onClick={() => setActiveTab('transcript')}
                className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                  activeTab === 'transcript' ? 'bg-cyan-600 text-white font-semibold' : 'text-slate-400'
                }`}
              >
                Transcripción
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'video' && (
            <div className="flex flex-col bg-black">
              {/* Video Screen Simulation */}
              <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src={HERO_BG_IMAGE}
                  alt="Video Bellas Artes"
                  className="w-full h-full object-cover opacity-60"
                />

                {/* Simulated Watermark */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded border border-slate-700 text-[11px] text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>Bellas Artes TV · HD 1080p</span>
                </div>

                {/* Big center play/pause button on screen */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-cyan-600/90 hover:bg-cyan-500 text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-current" />
                  ) : (
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  )}
                </button>
              </div>

              {/* Video Controls Bar */}
              <div className="bg-slate-950 p-4 border-t border-slate-800 flex flex-col gap-2">
                {/* Timeline Scrubber */}
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-slate-400 w-10 text-right">
                    {formatTime(currentTime)}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max={totalDuration}
                    value={currentTime}
                    onChange={(e) => setCurrentTime(Number(e.target.value))}
                    className="flex-1 accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                  <span className="text-[11px] font-mono text-slate-400 w-10">
                    {formatTime(totalDuration)}
                  </span>
                </div>

                {/* Bottom Control Buttons */}
                <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={() => setCurrentTime(0)}
                      className="p-1.5 hover:text-cyan-400 transition-colors cursor-pointer"
                      title="Reiniciar video"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    <span className="text-slate-500">|</span>

                    {/* Speed options */}
                    <div className="flex items-center gap-1">
                      {[1, 1.25, 1.5].map((rate) => (
                        <button
                          key={rate}
                          onClick={() => setPlaybackRate(rate)}
                          className={`px-1.5 py-0.5 rounded text-[11px] cursor-pointer ${
                            playbackRate === rate
                              ? 'bg-cyan-600 text-white font-bold'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {rate}x
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-[11px]">Institución Universitaria del Valle del Cauca</span>
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chapters' && (
            <div className="p-6 bg-slate-900 text-slate-200 space-y-4">
              <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <ListVideo className="w-5 h-5 text-cyan-400" />
                Índice y Capítulos del Video
              </h4>
              <p className="text-xs text-slate-400">
                Seleccione un segmento para saltar directamente en la línea de tiempo:
              </p>
              <div className="divide-y divide-slate-800 border border-slate-800 rounded-xl overflow-hidden bg-slate-950">
                {chapters.map((ch, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentTime(ch.time);
                      setActiveTab('video');
                      setIsPlaying(true);
                    }}
                    className="w-full text-left p-3.5 hover:bg-slate-800/80 transition-colors flex items-center justify-between text-xs cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="font-medium text-slate-200 group-hover:text-cyan-300">
                        {ch.title}
                      </span>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {ch.duration}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'transcript' && (
            <div className="p-6 bg-slate-900 text-slate-200 space-y-4">
              <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                Transcripción Oficial Completa
              </h4>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono whitespace-pre-line">
                {transcript}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
