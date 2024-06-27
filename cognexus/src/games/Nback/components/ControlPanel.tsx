// src/components/ControlPanel.tsx
import React, { useState } from 'react';

interface ControlPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StimuliState {
  position: boolean;
  audio: string | null;
  color: boolean;
  image: string | null;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ isOpen, onClose }) => {
  const [nBackLevel, setNBackLevel] = useState(1);
  const [stimuli, setStimuli] = useState<StimuliState>({
    position: false,
    audio: null,
    color: false,
    image: null,
  });

  const handleNBackLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNBackLevel(Number(e.target.value));
  };

  const handleStimuliChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setStimuli((prev) => ({
      ...prev,
      [name]: checked ? (name === 'position' || name === 'color' ? true : '') : (name === 'position' || name === 'color' ? false : null),
    }));
  };

  const handleSubTypeChange = (stimulusType: 'audio' | 'image', value: string) => {
    setStimuli((prev) => ({
      ...prev,
      [stimulusType]: value,
    }));
  };

  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Settings</h2>
        
        <label className="block mb-4">
          <span className="text-gray-700">N-Back Level:</span>
          <input
            type="number"
            value={nBackLevel}
            onChange={handleNBackLevelChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </label>

        <div className="mb-6">
          <label className="block mb-2">
            <input
              type="checkbox"
              name="position"
              checked={stimuli.position}
              onChange={handleStimuliChange}
              className="mr-2"
            />
            <span className="text-gray-700">Position</span>
          </label>

          <label className="block mb-2">
            <input
              type="checkbox"
              name="color"
              checked={stimuli.color}
              onChange={handleStimuliChange}
              className="mr-2"
            />
            <span className="text-gray-700">Color</span>
          </label>

          <label className="block mb-2">
            <input
              type="checkbox"
              name="image"
              checked={stimuli.image !== null}
              onChange={handleStimuliChange}
              className="mr-2"
            />
            <span className="text-gray-700">Image</span>
          </label>
          {stimuli.image !== null && (
            <div className="ml-6 mt-2">
              <label className="block mb-2">
                <input
                  type="radio"
                  name="imageType"
                  value="shape"
                  checked={stimuli.image === 'shape'}
                  onChange={() => handleSubTypeChange('image', 'shape')}
                  className="mr-2"
                />
                <span className="text-gray-700">Shape</span>
              </label>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="imageType"
                  value="gabor"
                  checked={stimuli.image === 'gabor'}
                  onChange={() => handleSubTypeChange('image', 'gabor')}
                  className="mr-2"
                />
                <span className="text-gray-700">Gabor</span>
              </label>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="imageType"
                  value="letter"
                  checked={stimuli.image === 'letter'}
                  onChange={() => handleSubTypeChange('image', 'letter')}
                  className="mr-2"
                />
                <span className="text-gray-700">Letters(eng)</span>
              </label>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="imageType"
                  value="pentominoes"
                  checked={stimuli.image === 'pentominoes'}
                  onChange={() => handleSubTypeChange('image', 'pentominoes')}
                  className="mr-2"
                />
                <span className="text-gray-700">Pentominoes</span>
              </label>
            </div>
          )}

          <label className="block mb-2">
            <input
              type="checkbox"
              name="audio"
              checked={stimuli.audio !== null}
              onChange={handleStimuliChange}
              className="mr-2"
            />
            <span className="text-gray-700">Audio</span>
          </label>
          {stimuli.audio !== null && (
            <div className="ml-6 mt-2">
              <label className="block mb-2">
                <input
                  type="radio"
                  name="audioType"
                  value="phoneme"
                  checked={stimuli.audio === 'phoneme'}
                  onChange={() => handleSubTypeChange('audio', 'phoneme')}
                  className="mr-2"
                />
                <span className="text-gray-700">Phoneme</span>
              </label>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="audioType"
                  value="word"
                  checked={stimuli.audio === 'word'}
                  onChange={() => handleSubTypeChange('audio', 'word')}
                  className="mr-2"
                />
                <span className="text-gray-700">Word</span>
              </label>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="audioType"
                  value="letter"
                  checked={stimuli.audio === 'letter'}
                  onChange={() => handleSubTypeChange('audio', 'letter')}
                  className="mr-2"
                />
                <span className="text-gray-700">Letter</span>
              </label>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="audioType"
                  value="number"
                  checked={stimuli.audio === 'number'}
                  onChange={() => handleSubTypeChange('audio', 'number')}
                  className="mr-2"
                />
                <span className="text-gray-700">Number</span>
              </label>
            </div>
          )}
        </div>

        <button onClick={onClose} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Close
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;