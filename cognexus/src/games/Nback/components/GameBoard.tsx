import React, { useState } from 'react';
import ControlPanel from './ControlPanel';
import { FaGear } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

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
    <div className="relative p-6 bg-white shadow-xl border-gray-500 border-2 rounded-lg max-w-lg mx-auto">
      <div className='flex flex-row'>
        <i className=" text-gray-500 hover:text-gray-700"><FaBook /></i>
        <button
          onClick={() => setIsModalOpen(true)}
          className=" text-gray-500 hover:text-gray-700"
        >
          <i><FaGear /></i>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, idx) => (
          <div key={idx} className="w-24 h-24 bg-gray-100 border border-gray-300 flex items-center justify-center rounded-lg">
            {stimuli.color && <div className="w-full h-full bg-red-500" />}
            {stimuli.image && renderImageContent(stimuli.image)}
            {stimuli.position && <span className="text-lg font-semibold">{idx + 1}</span>}
          </div>
        ))}
      </div>

      {isGameStarted ? (
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => setIsGameStarted(false)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
          >
            Stop
          </button>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">1: Position</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">2: Audio</button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700">3:Shape</button>
            <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700">4: Color</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsGameStarted(true)}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
        >
          Start
        </button>
      )}

      {isModalOpen && <ControlPanel isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default GameBoard;
