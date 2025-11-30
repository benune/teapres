
import React from 'react';
import type { SlideContent } from '../../types';

const DownloadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const MaterialsSlide: React.FC<{ content: SlideContent }> = ({ content }) => {
  return (
    <div className="p-6 md:p-12 h-full flex flex-col overflow-y-auto">
        <header className="text-center mb-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-maroon">{content.title}</h2>
            <p className="text-gray-500 text-lg mt-1">{content.subtitle}</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
            {content.materials?.map((material, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col">
                    <div className="flex-grow">
                        <p className="font-bold text-gray-800">{material.title}</p>
                        <p className="text-sm text-gray-600 mb-2">Por: {material.author}</p>
                        <p className="text-sm text-gray-700 italic">
                            {material.description}
                        </p>
                    </div>
                    <div className="mt-4 text-right">
                        <a 
                            href={material.downloadUrl} 
                            download 
                            className="inline-flex items-center px-4 py-2 rounded-md bg-brand-green text-white font-semibold transition-colors hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            <DownloadIcon />
                            Descargar
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default MaterialsSlide;
