import React, { useState, useEffect } from 'react';
import Scoreboard from './Scoreboard';
import ControlPanel from './ControlPanel';
import { FaGear } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
import { LuGauge } from "react-icons/lu";

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
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isGameStarted) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isGameStarted]);

  const handleStop = () => {
    setIsGameStarted(false);
  };

  const handleStart = () => {
    setIsGameStarted(true);
    setTime(0);
  };


  return (
    <div className="relative p-6 bg-white shadow-xl border-gray-500 border-2 rounded-lg max-w-lg mx-auto" style={{ width: '400px', height: '600px' }}>
      <div className='flex flex-row items-center justify-center mb-4'>
        <span className="font-['Press_Start_2P'] text-2xl text-gray-700 mr-auto">Nback</span>
        <i className="text-gray-500 hover:text-gray-700 mr-1 text-lg"><FaBook /></i>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-gray-500 hover:text-gray-700 text-lg"
        >
          <i><FaGear /></i>
        </button>
      </div>

      <Scoreboard time={time} score={score} nBackLevel={nBackLevel} />


      <div className="grid grid-cols-3 gap-4" style={{ height: '60%' }}>
        {Array.from({ length: 9 }).map((_, idx) => (
          <div key={idx} className="w-full h-full bg-gray-100 border border-gray-300 flex items-center justify-center rounded-lg">
            {stimuli.color && <div className="w-full h-full bg-red-500" />}
            {stimuli.position && <span className="text-lg font-semibold">{idx + 1}</span>}
          </div>
        ))}
      </div>

      {isGameStarted ? (
        <div className="mt-2 font-bold text-sm" style={{ height: '30%' }}>
          <button
            onClick={handleStop}
            className="p-2 bg-red-500 text-white rounded-md hover:bg-red-700"
          >
            Stop
          </button>
          <div className="flex flex-row space-x-2">
            <button className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700">1: Position</button>
            <button className="p-3 bg-green-500 text-white rounded-md hover:bg-green-700">2: Audio</button>
            <button className="p-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-700">3: Shape</button>
            <button className="p-3 bg-purple-500 text-white rounded-md hover:bg-purple-700">4: Color</button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleStart}
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
