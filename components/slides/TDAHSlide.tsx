
import React from 'react';
import type { SlideContent } from '../../types';

const BrainIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 text-brand-maroon" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 8.5C12.5 7.09556 12.5 6.39333 12.2312 5.88836C11.9624 5.38339 11.5192 4.97587 11.0118 4.73361C10.5044 4.49135 9.7719 4.49135 8.30693 4.49135H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4.5 9.5C4.5 8.09556 4.5 7.39333 4.76882 6.88836C5.03763 6.38339 5.48079 5.97587 5.98819 5.73361C6.49559 5.49135 7.2281 5.49135 8.69311 5.49135H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11.5 8.5C11.5 9.90444 11.5 10.6067 11.2312 11.1116C10.9624 11.6166 10.5192 12.0241 10.0118 12.2664C9.50441 12.5086 8.7719 12.5086 7.30693 12.5086H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19.5 9.5C19.5 10.9044 19.5 11.6067 19.2312 12.1116C18.9624 12.6166 18.5192 13.0241 18.0118 13.2664C17.5044 13.5086 16.7719 13.5086 15.3069 13.5086H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8.5 15.5C8.5 14.0956 8.5 13.3933 8.76882 12.8884C9.03763 12.3834 9.48079 11.9759 9.98819 11.7336C10.4956 11.4914 11.2281 11.4914 12.6931 11.4914H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12.5 15.5C12.5 16.9044 12.5 17.6067 12.7688 18.1116C13.0376 18.6166 13.4808 19.0241 13.9882 19.2664C14.4956 19.5086 15.2281 19.5086 16.6931 19.5086H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const TDAHSlide: React.FC<{ content: SlideContent }> = ({ content }) => {
  return (
    <div className="p-6 md:p-12 h-full overflow-y-auto">
        <header className="flex items-center mb-6">
            <BrainIcon />
            <div className="ml-4">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-maroon">{content.title}</h2>
                <p className="text-gray-500 text-lg">{content.subtitle}</p>
            </div>
        </header>

        <p className="text-lg mb-6">{content.definition}</p>

        <div className="grid md:grid-cols-2 gap-6">
            {content.points?.map((point, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-xl mb-3 text-brand-maroon">{point.title}</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {point.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <div className="mt-8 bg-rose-50 border-l-4 border-rose-500 text-rose-800 p-4 rounded-r-lg">
            <p className="font-bold">Idea Clave:</p>
            <p className="italic">{content.keyIdea}</p>
        </div>
    </div>
  );
};

export default TDAHSlide;
