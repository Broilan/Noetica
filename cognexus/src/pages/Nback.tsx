import React, { useState, useEffect } from 'react';

type Position = [number, number];

const Nback: React.FC<{ n: number }> = ({ n }) => {
  const [sequence, setSequence] = useState<Position[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const grid = document.getElementById('game');
    if (grid) {
      for (let i = 0; i < 9; i++) {
        const div = document.createElement('div');
        div.className = 'w-full h-full bg-gray-300';
        grid.appendChild(div);
      }
    }
    nextRound();
  }, []);

  useEffect(() => {
    if (currentIndex > 0 && currentIndex >= n) {
      checkPosition();
    }

    if (currentIndex < 20) { // Example game length
      const timeout = setTimeout(() => {
        nextRound();
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      alert('Game Over!');
    }
  }, [currentIndex]);

  const randomPosition = (): Position => {
    return [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
  };

  const highlightPosition = (position: Position) => {
    const [row, col] = position;
    const grid = document.getElementById('game');
    if (grid) {
      const index = row * 3 + col;
      grid.children[index].classList.add('bg-blue-500');
    }
  };

  const resetGrid = () => {
    const grid = document.getElementById('game');
    if (grid) {
      Array.from(grid.children).forEach(child => {
        child.classList.remove('bg-blue-500');
      });
    }
  };

  const nextRound = () => {
    resetGrid();
    const position = randomPosition();
    setSequence(prev => [...prev, position]);
    setCurrentIndex(prev => prev + 1);
    highlightPosition(position);
  };

  const checkPosition = () => {
    const current = sequence[currentIndex - 1];
    const previous = sequence[currentIndex - 1 - n];

    if (JSON.stringify(current) === JSON.stringify(previous)) {
      console.log('Correct!');
    } else {
      console.log('Incorrect.');
    }
  };

  return (
    <div id="game" className="w-64 h-64 grid grid-cols-3 grid-rows-3 gap-2"></div>
  );
};

export default Nback;
