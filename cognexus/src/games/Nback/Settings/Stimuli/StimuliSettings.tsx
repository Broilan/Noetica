import React from 'react';
import { StimuliState, AudioStimulus as AudioStimulusType, ImageStimulus as ImageStimulusType } from '../types';
import PositionStimulus from './Position/PositionStimulus';
import ColorStimulus from './Color/ColorStimulus';
import AudioStimulus from './Audio/AudioStimulus';
import ImageStimulus from './Image/ImageStimulus';

interface StimuliSettingsProps {
  stimuli: StimuliState;
  onStimuliChange: (name: keyof StimuliState, checked: boolean) => void;
  onSubTypeChange: (stimulusType: 'audio' | 'image', value: AudioStimulusType['type'] | ImageStimulusType['type']) => void;
}

const StimuliSettings: React.FC<StimuliSettingsProps> = ({
  stimuli,
  onStimuliChange,
  onSubTypeChange,
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Stimuli Settings</h2>
      <PositionStimulus
        isEnabled={stimuli.position}
        onToggle={(checked) => onStimuliChange('position', checked)}
      />
      <ColorStimulus
        isEnabled={stimuli.color}
        onToggle={(checked) => onStimuliChange('color', checked)}
      />
      <AudioStimulus
        stimulus={stimuli.audio}
        onToggle={(checked) => onStimuliChange('audio', checked)}
        onTypeChange={(type) => onSubTypeChange('audio', type)}
      />
      <ImageStimulus
        stimulus={stimuli.image}
        onToggle={(checked) => onStimuliChange('image', checked)}
        onTypeChange={(type) => onSubTypeChange('image', type)}
      />
    </div>
  );
};

export default StimuliSettings;