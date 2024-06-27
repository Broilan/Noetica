// Scoreboard.tsx
import React from 'react';
import { IoMdStopwatch } from "react-icons/io";
import { LuGauge } from "react-icons/lu";

interface ScoreboardProps {
  time: number;
  score: number;
  nBackLevel: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ time, score, nBackLevel }) => {
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex justify-between items-center mb-4 text-lg">
      <div className="flex items-center">
        <IoMdStopwatch className="mr-2" />
        <span>{formatTime(time)}</span>
      </div>
      <div className="flex items-center">
        <LuGauge className="mr-2" />
        <span>{score}</span>
      </div>
      <div>
        <span className="font-bold">N: {nBackLevel}</span>
      </div>
    </div>
  );
};

export default Scoreboard;