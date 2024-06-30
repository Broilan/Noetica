import React from 'react';

interface ColorStimulusProps {
  isEnabled: boolean;
  onToggle: (checked: boolean) => void;
}

const ColorStimulus: React.FC<ColorStimulusProps> = ({ isEnabled, onToggle }) => {
  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={isEnabled}
          onChange={(e) => onToggle(e.target.checked)}
          className="mr-2"
        />
        <span>Color</span>
      </label>
    </div>
  );
};

export default ColorStimulus;