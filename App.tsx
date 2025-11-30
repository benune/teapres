
import React, { useState, useCallback, useMemo } from 'react';
import { slideData } from './constants';
import TitleSlide from './components/slides/TitleSlide';
import TEASlide from './components/slides/TEASlide';
import TDAHSlide from './components/slides/TDAHSlide';
import IcebergSlide from './components/slides/IcebergSlide';
import ToolboxSlide from './components/slides/ToolboxSlide';
import BibliographySlide from './components/slides/BibliographySlide';
import MaterialsSlide from './components/slides/MaterialsSlide';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(() => [
    <TitleSlide key="title" content={slideData[0]} />,
    <TEASlide key="tea" content={slideData[1]} />,
    <TDAHSlide key="tdah" content={slideData[2]} />,
    <IcebergSlide key="iceberg" content={slideData[3]} />,
    <ToolboxSlide key="toolbox" content={slideData[4]} />,
    <BibliographySlide key="biblio" content={slideData[5]} />,
    <MaterialsSlide key="materials" content={slideData[6]} />,
  ], []);

  const totalSlides = slides.length;

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);
  
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide]);


  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans text-gray-800">
      <main className="flex-grow flex items-center justify-center p-4 sm:p-8 overflow-hidden">
        <div className="w-full h-full max-w-6xl max-h-[800px] bg-white rounded-2xl shadow-2xl flex flex-col relative animate-fadeIn">
          {slides[currentSlide]}
        </div>
      </main>
      <Navigation
        current={currentSlide}
        total={totalSlides}
        onNext={goToNextSlide}
        onPrev={goToPrevSlide}
      />
    </div>
  );
};

export default App;