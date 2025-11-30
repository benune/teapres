
import React from 'react';

interface NavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ current, total, onPrev, onNext }) => {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <footer className="w-full bg-white shadow-top p-3 flex items-center justify-center sticky bottom-0 z-10 border-t border-gray-200">
      <div className="flex items-center justify-between w-full max-w-6xl px-4">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="px-4 py-2 rounded-md bg-brand-green text-white font-semibold flex items-center disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Anterior
        </button>

        <span className="text-gray-700 font-medium font-display text-lg">
          {current + 1} / {total}
        </span>

        <button
          onClick={onNext}
          disabled={isLast}
          className="px-4 py-2 rounded-md bg-brand-maroon text-white font-semibold flex items-center disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
        >
          Siguiente
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Navigation;
