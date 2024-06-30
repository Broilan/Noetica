import React from 'react';
import { AudioStimulus as AudioStimulusType } from '../../types';

interface AudioStimulusProps {
  stimulus: AudioStimulusType | null;
  onToggle: (checked: boolean) => void;
  onTypeChange: (type: AudioStimulusType['type']) => void;
}

const AudioStimulus: React.FC<AudioStimulusProps> = ({ stimulus, onToggle, onTypeChange }) => {
  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={stimulus !== null}
          onChange={(e) => onToggle(e.target.checked)}
          className="mr-2"
        />
        <span>Audio</span>
      </label>
      {stimulus && (
        <div className="ml-6 mt-2">
          {['phoneme', 'word', 'letter', 'number'].map((type) => (
            <label key={type} className="flex items-center mt-2">
              <input
                type="radio"
                name="audioType"
                value={type}
                checked={stimulus.type === type}
                onChange={() => onTypeChange(type as AudioStimulusType['type'])}
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

export default AudioStimulus;