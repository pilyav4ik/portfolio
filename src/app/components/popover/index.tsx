'use client'
import { useState } from 'react';

interface PopoverProps {
  stack_text: {
    [key: string]: string;
  };
}

const Popover: React.FC<PopoverProps> = ({ stack_text }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        type="button"
        className="text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Show tech stack
      </button>
      {isVisible && (
        <div
          id="popover-default"
          role="tooltip"
          className="absolute z-10 inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 -top-6 ml-10"
        >
          <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">Tech Stack</h3>
          </div>
          <div className="px-3 py-2">
          {Object.entries(stack_text).map(([key, value]) => (
              <p key={key}>{value}</p>
            ))}
          </div>
          <div data-popper-arrow></div>
        </div>
      )}
    </div>
  );
};

export default Popover;
