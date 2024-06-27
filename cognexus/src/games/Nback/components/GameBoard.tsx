// src/components/GameBoard.tsx
import React from 'react';

interface GameBoardProps {
  stimuli: {
    position: boolean;
    audio: string;
    color: boolean;
    image: string;
  };
  nBackLevel: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ stimuli, nBackLevel }) => {
  const renderImageContent = (subType: string) => {
    switch (subType) {
      case 'shape':
        return <div className="w-full h-full" style={{ backgroundColor: 'blue' }} />;
      case 'gabor':
        return <div className="w-full h-full" style={{ background: 'repeating-linear-gradient(45deg, black, black 5px, white 5px, white 10px)' }} />;
      case 'letter':
        return <span className="text-xl">A</span>;
      case 'number':
        return <span className="text-xl">1</span>;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {Array.from({ length: 9 }).map((_, idx) => (
        <div key={idx} className="w-24 h-24 bg-gray-200 border border-gray-400 flex items-center justify-center">
          {stimuli.color && <div className="w-full h-full" style={{ backgroundColor: 'red' }} />}
          {stimuli.image && renderImageContent(stimuli.image)}
          {stimuli.position && idx + 1}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
