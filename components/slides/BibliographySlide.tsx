
import React from 'react';
import type { SlideContent } from '../../types';

const BibliographySlide: React.FC<{ content: SlideContent }> = ({ content }) => {
  return (
    <div className="p-6 md:p-12 h-full flex flex-col overflow-y-auto">
        <header className="text-center mb-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-green">{content.title}</h2>
            <p className="text-gray-500 text-lg mt-1">{content.subtitle}</p>
        </header>

        <div className="space-y-6">
            {content.references?.map((ref, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-green">
                    <p className="font-bold text-gray-800">{ref.author}</p>
                    <p className="font-semibold text-brand-green">{ref.title}</p>
                    {ref.details && <p className="text-gray-600">{ref.details}</p>}
                    {ref.url && (
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                            {ref.url}
                        </a>
                    )}
                    <p className="mt-2 text-sm text-gray-700 italic">
                        {ref.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default BibliographySlide;
