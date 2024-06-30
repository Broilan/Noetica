import React from 'react';

interface ModeSelectorProps {
  mode: string;
  onModeChange: (mode: string) => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, onModeChange }) => {
  return (
    <div className="mb-4">
      <h1 className='text-xl font-bold'>Mode</h1>
      <div className="flex flex-row flex-wrap space-x-4">
        {['Normal', 'Synesthesia', 'Contextual'].map((modeOption) => (
          <div
            key={modeOption}
            className="h-fit p-2 rounded-lg cursor-pointer transition-colors duration-200"
            style={{ 
              backgroundColor: mode === modeOption ? '#2563eb' : '#d1d5db',
              color: mode === modeOption ? "white" : "black"
            }}
            onClick={() => onModeChange(modeOption)}
          >
            {modeOption}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModeSelector;