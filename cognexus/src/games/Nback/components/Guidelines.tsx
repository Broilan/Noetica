import React from 'react';
import Tooltip from '../../../components/Tooltip';

interface GuidelinesProps {
  isOpen: boolean;
  onClose: () => void;
}

const Guidelines: React.FC<GuidelinesProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-hidden">
        <h1 className="text-2xl font-semibold mb-4">Guidelines</h1>
        
        <div className="mb-6 overflow-auto h-96 custom-scrollbar">
        <hr className='mb-2 bg-[#ccc] h-[2px]'/>
            <h2 className="text-xl font-semibold mb-2">Intro</h2>
            <p className="mb-4">The N-back task is a continuous performance task that was designed by Wayne Kirchner in 1958 to assess working memory maintenance, updating, and monitoring.</p>
            <h2 className="text-xl font-semibold mb-2">How to Play</h2>
            <p className='mb-4'>Upon beginning the game, you'll see a 3 by 3 matrix, and new stimuli will arise in each segment of it every round according to your settings. Each round, it's your job to determine whether you've seen any of the current stimuli <em>n</em> rounds ago. If you have, you'll select which one(s) using the the buttons below the board. You may also use the <kbd>a</kbd>, <kbd>s</kbd>, <kbd>d</kbd>, <kbd>f</kbd>, <kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>, and <kbd>4</kbd> keys if you're using a keyboard.  </p>
            <h1 className="text-2xl font-semibold mb-2">Settings</h1>
            <hr className='mb-2 bg-[#ccc] h-[2px]'/>
            <p className='mb-4'>Below are descriptions of the various settings you can manipulate to customize your game.</p>
            <h2 className='text-xl font-semibold mb-2 underline'>Audiological</h2>
            <ol>

                <Tooltip text='Smallest units of meaning in a language'>
                <li className='mb-2'><a href="https://en.wikipedia.org/wiki/Phoneme">
                <strong className='text-blue-600'>Phonemes:</strong> English phonemes 
                </a>
                </li>
                </Tooltip>

                <li className='mb-2'><strong>Words:</strong> Polysyllabic English words </li>
                <li className='mb-2'><strong>Letters:</strong> Alphabetic characters</li>
                <Tooltip text='These are the numbers we use globally'>
                 <li className='mb-2'><strong>Numbers:</strong> Hindu-Arabic numerals</li> 
                </Tooltip>
            </ol>
            <h2 className='text-xl font-semibold mb-2 underline'>Imagistic</h2>
            <ol>
              <li className='mb-2'><strong>Shapes:</strong> Various geometric forms</li>
              <li className='mb-2'>
                <a  href="https://en.wikipedia.org/wiki/Gabor_filter">
                  <strong className="text-blue-600">Gabor Patches:</strong> Visual patterns used in neuroscience
                </a>
                </li>
              <li className='mb-2'><strong>Letters:</strong> Alphabetic characters</li>

              <Tooltip text="Tetris blocks">
              <li className='mb-2'>
              <a href="https://en.wikipedia.org/wiki/Pentomino">
                <strong className='text-blue-600'>Pentominoes:</strong> A polygon comprised of 5 tiles
              </a>
              </li>
              </Tooltip>

            </ol>
            <h2 className='text-xl font-semibold mb-2 underline'>Positional</h2>
            <p className='mb-4'>When this setting's on, if you're using imagistic stimuli, chromatic stimuli, or both, you'll simply select the "position" button if you've seen either of the formentioned stimuli <em>n</em> turns ago.</p>
            <h2 className='text-xl font-semibold mb-2 underline'>Chromatic</h2>
            <p className='mb-4'> When this setting's turned on alongside imagistic mode, the images will take on various colors, and you'll need to determine whether you've seen that color <em>n</em> turns ago. Without imagistic stimuli turned on, the squares themselves will be highlighted. </p>
        </div>

        <button onClick={onClose} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Close
        </button>
      </div>
    </div>
  );
};

export default Guidelines;
