import React from 'react';
import { ImageStimulus as ImageStimulusType } from '../../types';

interface ImageStimulusProps {
  stimulus: ImageStimulusType | null;
  onToggle: (checked: boolean) => void;
  onTypeChange: (type: ImageStimulusType['type']) => void;
}

const ImageStimulus: React.FC<ImageStimulusProps> = ({ stimulus, onToggle, onTypeChange }) => {
  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={stimulus !== null}
          onChange={(e) => onToggle(e.target.checked)}
          className="mr-2"
        />
        <span>Image</span>
      </label>
      {stimulus && (
        <div className="ml-6 mt-2">
          {['shape', 'gabor', 'letter', 'pentominoes'].map((type) => (
            <label key={type} className="flex items-center mt-2">
              <input
                type="radio"
                name="imageType"
                value={type}
                checked={stimulus.type === type}
                onChange={() => onTypeChange(type as ImageStimulusType['type'])}
                className="mr-2"
              />
              <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageStimulus;