
import React from 'react';
import type { SlideContent } from '../../types';

interface TitleSlideProps {
  content: SlideContent;
}

const TitleSlide: React.FC<TitleSlideProps> = ({ content }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center bg-gradient-to-br from-brand-green to-teal-800 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjA1IiBkPSJNMCAzMiBMMzIgMCBMMjggMCBMMCAyOCBMMCAzMiBaIE00IDMyIEwzMiA0IEwzMiAwIEwwIDMyIEw0IDMyIFoiLz48L3N2Zz4=')]"></div>
        
        <div className="relative z-10 flex flex-col items-center">
            <img src={content.logos?.[0]} alt="Logo" className="w-32 h-32 mb-8 bg-white rounded-full shadow-lg"/>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide">
                {content.title}
            </h1>
            <h2 className="mt-4 font-sans text-xl md:text-2xl lg:text-3xl text-teal-200">
                {content.subtitle}
            </h2>

            <div className="mt-12 pt-8 border-t-2 border-teal-400 w-2/3 text-lg text-teal-100">
                {content.info?.map((line, index) => (
                    <p key={index} className="mb-2">{line}</p>
                ))}
            </div>
        </div>
    </div>
  );
};

export default TitleSlide;
