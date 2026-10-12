import React from 'react';
import { Home, Milestone, ListChecks, FileText, Send, UserCheck, LogOut, LogIn } from 'lucide-react';
import { BELLAS_ARTES_LOGO } from '../data/portalData';
import { ActiveScreen } from '../types';

interface HeaderProps {
  activeScreen: ActiveScreen;
  setActiveScreen: (screen: ActiveScreen) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (logged: boolean) => void;
  scrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  setActiveScreen,
  isLoggedIn,
  setIsLoggedIn,
  scrollToSection,
}) => {
  return (
    <header className="w-full bg-[#e0f2fe] border-b border-sky-200 py-2.5 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-opacity-95">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-4">
        {/* Identidad Institucional + Logo */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button
            onClick={() => {
              setActiveScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded text-left cursor-pointer"
            title="Ir al inicio del Portal"
          >
            <img
              alt="Logo Bellas Artes Institución Universitaria del Valle del Cauca"
              className="h-8 sm:h-9 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-[1.02]"
              src={BELLAS_ARTES_LOGO}
            />
          </button>
          <div className="hidden md:block h-6 w-px bg-sky-300/80"></div>
          <div className="hidden md:flex flex-col text-xs text-sky-950 font-medium leading-tight">
            <span className="font-bold text-sky-900">Portal de Escalafón Docente</span>
            <span className="text-sky-700 text-[11px]">Institución Universitaria del Valle del Cauca</span>
          </div>
        </div>

        {/* Navegación y accesos */}
        <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => {
              setActiveScreen('home');
              scrollToSection('inicio');
            }}
            className={`px-2.5 sm:px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeScreen === 'home'
                ? 'bg-sky-200/90 text-sky-950 font-bold'
                : 'text-sky-900 hover:text-sky-950 hover:bg-sky-200/80'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Inicio</span>
          </button>

          <button
            onClick={() => {
              if (activeScreen !== 'home') setActiveScreen('home');
              setTimeout(() => scrollToSection('etapas'), 50);
            }}
            className="hidden sm:flex px-2.5 sm:px-3 py-1.5 rounded-md text-sky-900 hover:text-sky-950 hover:bg-sky-200/80 transition-colors items-center gap-1.5 cursor-pointer"
          >
            <Milestone className="w-4 h-4" />
            <span>Etapas</span>
          </button>

          <button
            onClick={() => {
              if (activeScreen !== 'home') setActiveScreen('home');
              setTimeout(() => scrollToSection('categorias'), 50);
            }}
            className="hidden sm:flex px-2.5 sm:px-3 py-1.5 rounded-md text-sky-900 hover:text-sky-950 hover:bg-sky-200/80 transition-colors items-center gap-1.5 cursor-pointer"
          >
            <ListChecks className="w-4 h-4" />
            <span>Categorías</span>
          </button>

          <button
            onClick={() => {
              if (activeScreen !== 'home') setActiveScreen('home');
              setTimeout(() => scrollToSection('normativa'), 50);
            }}
            className="hidden md:flex px-2.5 sm:px-3 py-1.5 rounded-md text-sky-900 hover:text-sky-950 hover:bg-sky-200/80 transition-colors items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Normativa</span>
          </button>

          <button
            onClick={() => setActiveScreen('radicacion')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeScreen === 'radicacion'
                ? 'bg-sky-700 text-white font-bold'
                : 'text-sky-900 hover:text-sky-950 hover:bg-sky-200/80'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Radicación</span>
          </button>

          {isLoggedIn && (
            <button
              onClick={() => setActiveScreen('dashboard')}
              className={`px-2.5 sm:px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer border ${
                activeScreen === 'dashboard'
                  ? 'bg-teal-700 text-white font-bold border-teal-800'
                  : 'bg-white/80 text-teal-900 border-teal-300 hover:bg-teal-50'
              }`}
              title="Ver mi estado de trámite (Dra. Elena Vargas)"
            >
              <UserCheck className="w-3.5 h-3.5 text-teal-600" />
              <span className="hidden md:inline font-medium">Mi Estado</span>
            </button>
          )}

          <div className="h-4 w-px bg-sky-300 mx-1 hidden sm:block"></div>

          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-sky-900 hover:bg-sky-950 text-white shadow-sm text-xs font-medium transition-colors cursor-pointer"
              title="Cerrar Sesión institucional"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cerrar Sesión</span>
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(true);
                setActiveScreen('dashboard');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-sky-900 hover:bg-sky-950 text-white shadow-sm text-xs font-medium transition-colors cursor-pointer"
              title="Iniciar sesión docente"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Portal Docente</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
