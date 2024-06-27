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
  const [miscSettings, setMiscSettings] = useState([
    {name: 'Auto Progression', value: false},
    {name: 'Test 1', value: false},
    {name: 'Test 2', value: false},
  ]);
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

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleMiscClick = (name: string) => {
    setMiscSettings((prev) => {
      const newSettings = prev.map((setting) => {
        if (setting.name === name) {
          return {
            ...setting,
            value: !setting.value,
          };
        }
        return setting;
      });
      return newSettings;
    });
    
  }

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold mb-4">Settings</h2>
        
        <label className="block mb-4">
          <h1 className='text-xl font-bold'>N-Level</h1>
          <input
            type="number"
            min={1}
            value={nBackLevel}
            onChange={handleNBackLevelChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </label>

        <label className="block mb-4">
          <h1 className='text-xl font-bold'>Misc Settings</h1>

          <div className="flex flex-row flex-wrap space-x-4">
            <div
              className="h-fit p-2 rounded-lg cursor-pointer transition-colors duration-200"
              style={{ backgroundColor: miscSettings[0].value ? '#2563eb' : '#d1d5db', 
                color: miscSettings[0].value ? "white" : "black"}}
              onClick={() => handleMiscClick("Auto Progression")}
            > Auto Progression
            </div>

            <div
              className="h-fit p-2 rounded-lg cursor-pointer transition-colors duration-200"
              style={{ backgroundColor: miscSettings[1].value ? '#2563eb' : '#d1d5db', 
                color: miscSettings[1].value ? "white" : "black"}}
              onClick={() => handleMiscClick("Test 1")}
            > Test 1
            </div>

            <div
              className="h-fit p-2 rounded-lg cursor-pointer transition-colors duration-200"
              style={{ backgroundColor: miscSettings[2].value ? '#2563eb' : '#d1d5db',
                color: miscSettings[2].value ? "white" : "black"}}
              onClick={() => handleMiscClick("Test 2")}
            > Test 2
            </div>

          </div>

        </label>

        <div className="mb-6">
          <h1 className='text-xl font-bold'>Stimuli</h1>
          <hr />
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

        <button onClick={onClose} className="px-4 py-2 mr-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition-colors duration-200">
          Cancel
        </button>
        <button  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Save
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;