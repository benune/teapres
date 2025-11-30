
import React from 'react';
import type { SlideContent } from '../../types';

const ToolboxSlide: React.FC<{ content: SlideContent }> = ({ content }) => {
  const icons = [
    // 1. Estructurar el Ambiente
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    // 2. Usar Apoyos Visuales
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>,
    // 3. Adaptar la Comunicación
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    // 4. Fomentar la Regulación
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  ];

  return (
    <div className="p-6 md:p-12 h-full flex flex-col overflow-y-auto">
        <header className="text-center mb-6">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-green">{content.title}</h2>
            <p className="text-gray-500 text-lg mt-1">{content.subtitle}</p>
        </header>
        <p className="text-center text-lg mb-8 max-w-4xl mx-auto">{content.definition}</p>
        
        <div className="flex-grow grid md:grid-cols-2 gap-6">
            {content.pillars?.map((pillar, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex-shrink-0 w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mr-4">
                        {icons[index]}
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-brand-green mb-2">{pillar.title}</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {pillar.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>

        <footer className="mt-8 text-center">
            <p className="font-display text-2xl font-bold text-brand-maroon">{content.closingPhrase}</p>
        </footer>
    </div>
  );
};

export default ToolboxSlide;
