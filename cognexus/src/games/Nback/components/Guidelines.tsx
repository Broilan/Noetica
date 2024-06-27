// src/components/Guidelines.tsx
import React from 'react';

interface GuidelinesProps {
  isOpen: boolean;
  onClose: () => void;
}

const Guidelines: React.FC<GuidelinesProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4">Guidelines</h1>
        
        <div className="mb-6">
            <h3>Intro</h3>
            <p className="mb-2">The N-back task is a continuous performance task that was designed by Wayne Kirchner in 1958 for the purpose of assessing working memory maintenance, updating, and monitoring.</p>
            <h2>How to Play</h2>
            <p>Upon beginning the game, you'll see a 3 by 3 matrix, and new stimuli will arise in each segment of it every round according to your settings. Each round, it's your job to determine whether you've seen any of the current stimuli <em>n</em> rounds ago. If you have, you'll select which one(s) using the the buttons below the board. You may also use the a, s, d, f, 1, 2, 3, and 4 if you're using a PC.  </p>
          <p className="mb-2">2. Your task is to remember the stimulus from N steps back.</p>
          <p className="mb-2">3. If the current stimulus matches the one from N steps back, press the corresponding button.</p>
          <p className="mb-2">4. The game includes various types of stimuli: position, audio, shape, and color.</p>
          <p className="mb-2">5. As you progress, the N-back level may increase, making the game more challenging.</p>
          <p className="mb-2">6. Try to respond as quickly and accurately as possible.</p>
        </div>

        <button onClick={onClose} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Close
        </button>
      </div>
    </div>
  );
};

export default Guidelines;