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
        return <div className="w-full h-full bg-blue-500" />;
      case 'gabor':
        return <div className="w-full h-full bg-gradient-to-br from-black to-white" style={{ background: 'repeating-linear-gradient(45deg, black, black 5px, white 5px, white 10px)' }} />;
      case 'letter':
        return <span className="text-2xl font-bold">A</span>;
      case 'number':
        return <span className="text-2xl font-bold">1</span>;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-6 bg-white shadow-xl rounded-lg max-w-lg">
      {Array.from({ length: 9 }).map((_, idx) => (
        <div key={idx} className="w-24 h-24 bg-gray-100 border border-gray-300 flex items-center justify-center rounded-lg">
          {stimuli.color && <div className="w-full h-full bg-red-500" />}
          {stimuli.image && renderImageContent(stimuli.image)}
          {stimuli.position && <span className="text-lg font-semibold">{idx + 1}</span>}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
