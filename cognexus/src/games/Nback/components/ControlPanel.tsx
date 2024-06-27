// src/components/ControlPanel.tsx
import React, { useState } from 'react';

interface ControlPanelProps {
  onStart: (
    nBackLevel: number,
    stimuli: {
      position: boolean;
      audio: string;
      color: boolean;
      image: string;
    }
  ) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onStart }) => {
  const [nBackLevel, setNBackLevel] = useState(1);
  const [stimuli, setStimuli] = useState({
    position: false,
    audio: '',
    color: false,
    image: '',
  });

  const handleNBackLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNBackLevel(Number(e.target.value));
  };

  const handleStimuliChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setStimuli((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleAudioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStimuli((prev) => ({
      ...prev,
      audio: e.target.value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStimuli((prev) => ({
      ...prev,
      image: e.target.value,
    }));
  };

  const handleStart = () => {
    onStart(nBackLevel, stimuli);
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-lg max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Control Panel</h2>
      
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
            checked={!!stimuli.image}
            onChange={(e) => handleStimuliChange(e as any)}
            className="mr-2"
          />
          <span className="text-gray-700">Image</span>
          {stimuli.image && (
            <select
              value={stimuli.image}
              onChange={handleImageChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            >
              <option value="">Select Sub-Type</option>
              <option value="shape">Shape</option>
              <option value="gabor">Gabor</option>
              <option value="letter">Letter</option>
              <option value="number">Number</option>
            </select>
          )}
        </label>

        <label className="block mb-2">
          <input
            type="checkbox"
            name="audio"
            checked={!!stimuli.audio}
            onChange={(e) => handleStimuliChange(e as any)}
            className="mr-2"
          />
          <span className="text-gray-700">Audio</span>
          {stimuli.audio && (
            <select
              value={stimuli.audio}
              onChange={handleAudioChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            >
              <option value="">Select Sub-Type</option>
              <option value="phoneme">Phoneme</option>
              <option value="word">Word</option>
              <option value="letter">Letter</option>
              <option value="number">Number</option>
            </select>
          )}
        </label>
      </div>
      
      <button 
        onClick={handleStart} 
        className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
      >
        Start Game
      </button>
    </div>
  );
};

export default ControlPanel;
