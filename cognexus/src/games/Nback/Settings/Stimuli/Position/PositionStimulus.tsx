import React from 'react';

interface PositionStimulusProps {
  isEnabled: boolean;
  onToggle: (checked: boolean) => void;
}

const PositionStimulus: React.FC<PositionStimulusProps> = ({ isEnabled, onToggle }) => {
  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={isEnabled}
          onChange={(e) => onToggle(e.target.checked)}
          className="mr-2"
        />
        <span>Position</span>
      </label>
    </div>
  );
};

export default PositionStimulus;