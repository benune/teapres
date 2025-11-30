
import React from 'react';
import type { SlideContent } from '../../types';

const SpectrumIcon: React.FC = () => (
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-green" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="spectrumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="25%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#facc15" />
                <stop offset="75%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#spectrumGradient)" strokeWidth="10" />
        <path d="M50 5 L50 95" stroke="white" strokeWidth="2" />
        <path d="M5 50 L95 50" stroke="white" strokeWidth="2" />
    </svg>
);


const TEASlide: React.FC<{ content: SlideContent }> = ({ content }) => {
  return (
    <div className="p-6 md:p-12 h-full overflow-y-auto">
        <header className="flex items-center mb-6">
            <SpectrumIcon />
            <div className="ml-4">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-green">{content.title}</h2>
                <p className="text-gray-500 text-lg">{content.subtitle}</p>
            </div>
        </header>

        <p className="text-lg mb-6">{content.definition}</p>

        <div className="grid md:grid-cols-2 gap-6">
            {content.points?.map((point, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-xl mb-3 text-brand-green">{index + 1}. {point.title}</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {point.items.map((item, itemIndex) => (
                            <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>') }}></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        
        <div className="mt-8 bg-teal-50 border-l-4 border-teal-500 text-teal-800 p-4 rounded-r-lg">
            <p className="font-bold">Idea Clave:</p>
            <p className="italic">{content.keyIdea}</p>
        </div>
    </div>
  );
};

export default TEASlide;
