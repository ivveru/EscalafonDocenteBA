import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { VideoAndTableSection } from './components/VideoAndTableSection';
import { CategoryTabsSection } from './components/CategoryTabsSection';
import { ProcessStagesSection } from './components/ProcessStagesSection';
import { SupportToolsSection } from './components/SupportToolsSection';
import { NormativeDocsSection } from './components/NormativeDocsSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { DocumentModal } from './components/DocumentModal';
import { RadicacionWizard } from './components/RadicacionWizard';
import { DocenteDashboard } from './components/DocenteDashboard';
import { BaremoCalculator } from './components/BaremoCalculator';
import { NormativeRepositoryScreen } from './components/NormativeRepositoryScreen';
import { ActiveScreen, CategoryKey, NormativeDocument } from './types';
import { NORMATIVE_DOCS } from './data/portalData';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('home');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('auxiliar');

  // Modals state
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoModalType, setVideoModalType] = useState<'general' | 'tutorial'>('general');
  const [selectedDoc, setSelectedDoc] = useState<NormativeDocument | null>(null);
  const [docModalOpen, setDocModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (activeScreen !== 'home') {
      setActiveScreen('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenVideo = (type: 'general' | 'tutorial') => {
    setVideoModalType(type);
    setVideoModalOpen(true);
  };

  const handleOpenDoc = (doc: NormativeDocument) => {
    setSelectedDoc(doc);
    setDocModalOpen(true);
  };

  const handleOpenDocById = (docId: string) => {
    const found = NORMATIVE_DOCS.find((d) => d.id === docId);
    if (found) {
      handleOpenDoc(found);
    }
  };

  return (
    <div className="bg-[#f8fafc] font-body text-slate-800 antialiased min-h-screen flex flex-col selection:bg-sky-200">
      {/* 1. Header Institucional */}
      <Header
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        scrollToSection={scrollToSection}
      />

      {/* Main Content Area based on Active Screen */}
      <main className="flex-grow w-full">
        {activeScreen === 'home' && (
          <>
            {/* 2. Slideshow Inicial */}
            <HeroSlider
              onStartRadicacion={() => setActiveScreen('radicacion')}
              onViewRegulations={() => scrollToSection('normativa')}
              setActiveScreen={setActiveScreen}
            />

            {/* 3. Sección a 2 Columnas (Video + Tabla de Permanencia) */}
            <VideoAndTableSection
              onOpenVideo={handleOpenVideo}
              onSelectCategory={(key) => setSelectedCategory(key)}
            />

            {/* 4. Pestañas para Describir las Categorías */}
            <CategoryTabsSection
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onOpenCalculator={() => setActiveScreen('baremo')}
            />

            {/* 5. Etapas del Proceso de Escalafón */}
            <ProcessStagesSection
              onStartRadicacion={() => setActiveScreen('radicacion')}
            />

            {/* 6. Herramientas de Apoyo Docente */}
            <SupportToolsSection
              onDownloadInstructivo={() => handleOpenDocById('doc-2')}
              onOpenVideoTutorial={() => handleOpenVideo('tutorial')}
            />

            {/* 7. Documentos Normativos y de Apoyo */}
            <NormativeDocsSection
              onOpenDocument={handleOpenDoc}
              onOpenFullRepository={() => setActiveScreen('normativa')}
            />
          </>
        )}

        {/* Pantalla 2: Radicación en Línea */}
        {activeScreen === 'radicacion' && (
          <RadicacionWizard
            onBackToHome={() => setActiveScreen('home')}
            onCompletedSubmission={(radNum) => {
              setIsLoggedIn(true);
              setActiveScreen('dashboard');
            }}
          />
        )}

        {/* Pantalla 3: Portal del Docente / Mi Estado */}
        {activeScreen === 'dashboard' && (
          <DocenteDashboard
            onBackToHome={() => setActiveScreen('home')}
            onOpenNormativa={() => setActiveScreen('normativa')}
          />
        )}

        {/* Pantalla 4: Simulador de Baremos */}
        {activeScreen === 'baremo' && (
          <BaremoCalculator
            onBackToHome={() => setActiveScreen('home')}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setActiveScreen('home');
              setTimeout(() => scrollToSection('categorias'), 50);
            }}
          />
        )}

        {/* Pantalla 5: Repositorio Normativo Completo */}
        {activeScreen === 'normativa' && (
          <NormativeRepositoryScreen
            onBackToHome={() => setActiveScreen('home')}
            onOpenDocument={handleOpenDoc}
          />
        )}
      </main>

      {/* 8. Pie de Página Institucional */}
      <Footer onOpenNormativeDoc={handleOpenDocById} />

      {/* Modales globales interactivos */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoType={videoModalType}
      />

      <DocumentModal
        isOpen={docModalOpen}
        onClose={() => setDocModalOpen(false)}
        document={selectedDoc}
      />
    </div>
  );
}
