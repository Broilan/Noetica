import React, { useState, useEffect } from 'react';
import Scoreboard from './Scoreboard';
import ControlPanel from '../Settings/ControlPanel';
import Guidelines from './Guidelines';
import {Tooltip, TicketModal} from '../../../components';

import { FaGear } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { IoStop } from "react-icons/io5";
import { TbHelpTriangleFilled } from "react-icons/tb";

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
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isGuidelinesModalOpen, setIsGuidelinesModalOpen] = useState(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  
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
    setTime(0);
  };

  const handleStart = () => {
    setIsGameStarted(true);
    setTime(0);
  };

  return (
    <div className="relative p-6 bg-white shadow-xl border-gray-500 border-2 rounded-lg max-w-lg mx-auto" style={{ width: '400px', height: '600px' }}>
      <div className='flex flex-row items-center justify-center'>
        <span className="font-['Press_Start_2P'] text-2xl text-gray-700 mr-auto mb-2">Nback</span>
        {!isGameStarted && (
          <>
            <Tooltip text="Issue">
              <button
                onClick={() => setIsTicketModalOpen(true)}
                className="text-gray-500 hover:text-gray-700 text-xl mr-2"
              >
                <TbHelpTriangleFilled />
              </button>
            </Tooltip>

            <Tooltip text="Guide">
              <button
                onClick={() => setIsGuidelinesModalOpen(true)}
                className="text-gray-500 hover:text-gray-700 text-lg mr-2"
              >
                <FaBook />
              </button>
            </Tooltip>
            
            <Tooltip text="Settings">
              <button
                onClick={() => setIsSettingsModalOpen(true)}
                className="text-gray-500 hover:text-gray-700 text-lg"
              >
                <FaGear />
              </button>
            </Tooltip>
          </>
        )}
        {isGameStarted && (
          <button
            onClick={handleStop}
            className="p-1 bg-red-700 mb-2 text-white rounded-md"
          >
            <IoStop />
          </button>
        )}
      </div>

      <Scoreboard time={time} score={score} nBackLevel={nBackLevel} />

      <div className="grid grid-cols-3 gap-4" style={{ height: '70%' }}>
        {Array.from({ length: 9 }).map((_, idx) => (
          <div key={idx} className="w-full h-full bg-gray-100 border border-gray-300 flex items-center justify-center rounded-lg">
            {stimuli.color && <div className="w-full h-full bg-red-500" />}
            {stimuli.position && <span className="text-lg font-semibold">{idx + 1}</span>}
          </div>
        ))}
      </div>

      {isGameStarted ? (
        <div className=" font-bold text-sm">
          <div className="mt-4 flex flex-row space-x-5">
            <button className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700">1: Position</button>
            <button className="p-3 bg-green-500 text-white rounded-md hover:bg-green-700">2: Audio</button>
            <button className="p-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-700">3: Shape</button>
            <button className="p-3 bg-purple-500 text-white rounded-md hover:bg-purple-700">4: Color</button>
          </div>
        </div>
      ) : (
        <div
          onClick={handleStart}
          className="hover:cursor-pointer font-['Press_Start_2P'] mt-8 px-4 py-2 text-black rounded-md border-2 border-black hover:bg-green-500"
        >
          Press here to start
        </div>
      )}

      {isSettingsModalOpen && <ControlPanel isOpen={isSettingsModalOpen} onClose={() => setIsSettingsModalOpen(false)} />}
      {isGuidelinesModalOpen && <Guidelines isOpen={isGuidelinesModalOpen} onClose={() => setIsGuidelinesModalOpen(false)} />}
      {isTicketModalOpen && <TicketModal isOpen={isTicketModalOpen} onClose={() => setIsTicketModalOpen(false)} onSubmit={function (ticketData: TicketData): void {
        throw new Error('Function not implemented.');
      } } />}
    </div>
  );
};

export default GameBoard;