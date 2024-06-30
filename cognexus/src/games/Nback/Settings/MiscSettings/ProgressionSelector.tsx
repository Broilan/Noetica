import React from 'react';

interface ProgressionSelectorProps {
  progression: 'plural' | 'unitary';
  onProgressionChange: (progression: 'plural' | 'unitary') => void;
}

const ProgressionSelector: React.FC<ProgressionSelectorProps> = ({ progression, onProgressionChange }) => {
  return (
    <div className="mb-4">
      <h1 className='text-xl font-bold'>N-Settings</h1>
      <div className="flex flex-row flex-wrap space-x-4">
        {['plural', 'unitary'].map((prog) => (
          <div
            key={prog}
            className="h-fit p-2 rounded-lg cursor-pointer transition-colors duration-200"
            style={{ 
              backgroundColor: progression === prog ? '#2563eb' : '#d1d5db',
              color: progression === prog ? "white" : "black"
            }}
            onClick={() => onProgressionChange(prog as 'plural' | 'unitary')}
          >
            {prog.charAt(0).toUpperCase() + prog.slice(1)} progression
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressionSelector;