// src/nback.tsx
import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import ControlPanel from './Settings/ControlPanel';

const NBack: React.FC = () => {
  const [nBackLevel, setNBackLevel] = useState(1);
  const [stimuli, setStimuli] = useState({
    position: false,
    audio: '',
    color: false,
    image: '',
  });

  const handleStart = (
    nBackLevel: number,
    stimuli: {
      position: boolean;
      audio: string;
      color: boolean;
      image: string;
    }
  ) => {
    setNBackLevel(nBackLevel);
    setStimuli(stimuli);
  };

  return (
    <div className="flex flex-row items-center justify-center mt-40 w-fit mx-auto">
      <GameBoard stimuli={stimuli} nBackLevel={nBackLevel} />
      <ControlPanel onStart={handleStart} />
    </div>
  );
};

export default NBack;
