
import React from 'react';
import type { SlideContent } from '../../types';

const IcebergSlide: React.FC<{ content: SlideContent }> = ({ content }) => {
  return (
    <div className="p-6 md:p-12 h-full flex flex-col overflow-y-auto">
        <header className="text-center mb-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-green">{content.title}</h2>
            <p className="text-gray-500 text-lg mt-1">{content.subtitle}</p>
        </header>
        <p className="text-center text-lg mb-4 max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: content.definition?.replace(/(\*\*|__)(.*?)\1/g, '<strong class="text-brand-green">$2</strong>') || '' }}></p>
        
        <div className="flex-grow flex flex-col lg:flex-row items-center justify-center gap-6">
            {/* Iceberg Diagram */}
            <div className="w-full lg:w-1/3 flex flex-col items-center">
                <div className="w-48 h-24 bg-blue-100 rounded-t-full flex items-center justify-center text-center p-2 shadow-md z-10">
                    <span className="font-bold text-blue-800">{content.iceberg?.visible}</span>
                </div>
                <div className="w-full h-1 bg-blue-300 relative">
                    <span className="absolute -top-3 left-2 text-blue-500 font-semibold">Superficie</span>
                </div>
                <div className="w-full max-w-md h-64 bg-blue-200 flex items-center justify-center text-center p-4 shadow-inner relative" style={{clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)'}}>
                    <span className="font-bold text-xl text-blue-900">Necesidad no cubierta</span>
                </div>
            </div>

            {/* Explanations */}
            <div className="w-full lg:w-2/3 space-y-4">
                {content.iceberg?.hidden.map((section, index) => (
                    <div key={index} className={`p-4 rounded-lg border-l-4 ${index === 0 ? 'bg-teal-50 border-teal-500' : 'bg-rose-50 border-rose-500'}`}>
                        <h3 className={`font-bold text-lg mb-2 ${index === 0 ? 'text-teal-800' : 'text-rose-800'}`}>{section.title}</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>').replace(/Estrategia General Clave: (.*)/, '<strong class="text-gray-900">Estrategia General Clave: $1</strong>') }}></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default IcebergSlide;
