import React from 'react';
import Tooltip from '../../../components/Tooltip';

interface GuidelinesProps {
  isOpen: boolean;
  onClose: () => void;
}

const Guidelines: React.FC<GuidelinesProps> = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-hidden relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h1 className="text-3xl font-semibold mb-4">Guidelines</h1>
        
        <div className="mb-6 overflow-auto h-96 custom-scrollbar">
        <hr className='mb-2 bg-[#ccc] h-[2px]'/>
            <h2 className="text-xl font-semibold mb-2">Intro</h2>
            <p className="mb-4">The N-back task is a continuous performance task that was designed by Wayne Kirchner in 1958 to assess working memory maintenance, updating, and monitoring.</p>
            <h2 className="text-xl font-semibold mb-2 border-b-2 border-b-gray-200">How to Play</h2>
            <p className='mb-4'>Upon beginning the game, you'll see a 3 by 3 matrix, and new stimuli will arise in each segment of it every round according to your settings. Each round, it's your job to determine whether you've seen any of the current stimuli <em>n</em> rounds ago. If you have, you'll select which one(s) using the the buttons below the board. You may also use the <kbd>a</kbd>, <kbd>s</kbd>, <kbd>d</kbd>, <kbd>f</kbd>, <kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>, and <kbd>4</kbd> keys if you're using a keyboard.  </p>
            <h1 className="text-3xl font-semibold mb-2">Settings</h1>
            <hr className='mb-2 bg-[#ccc] h-[2px]'/>
           
            <p className='mb-4'>Below are descriptions of the various settings you can manipulate to customize your game.</p>
            
            <h1 className='text-2xl font-bold mb-2 border-b-2 border-b-gray-200'>Modes</h1>
            <p className='mb-3'>Below is information on the various modes you can choose from.</p>
            <ol>
            <li className='mb-2'><strong>Normal:</strong> Refer to "How to Play" </li>
            <li className='mb-2'><strong>Synesthesia:</strong> Placeholder</li>
            <li className='mb-4'><strong>Contextual:</strong> Placeholder</li>
            </ol>
            <h1 className='text-2xl font-semibold mb-2 border-b-2 border-b-gray-200'><em>N</em>-Level</h1>
            <ol>
              <li className='mb-2'><strong>Normal:</strong>Your <em>n</em> automatically decrements or increments in accordance with your success. </li>
              <li className='mb-2'><strong>Unitary Progression:</strong>Your <em>n</em> automatically decrements or increments in accordance with your success. </li>
              <li className='mb-2'><strong>Plural Progression:</strong>Your <em>n</em> splits into several (n<sub>1</sub>, n<sub>2</sub>, n<sub>3</sub>, n<sub>4</sub>) that are associated with their own stimuli, and they'll decrement and increment independent of one another. </li>
            </ol> 
            
            <h1 className='text-2xl font-bold mb-2 border-b-2 border-b-gray-200'>Miscellaneous</h1>
            <ol>
              <li className='mb-2'><strong>Arithmetic:</strong>Placeholder. </li>
              <li className='mb-2'><strong>Distractors:</strong>Random, unimportant stimuli will arise to distract you. </li>
            </ol>            
          
            
            <h1 className='text-2xl font-bold mb-2 border-b-2 border-b-gray-200'>Stimuli</h1>
            <h2 className='text-xl font-semibold mb-2 border-b-2 border-b-gray-200'>Audiological Stimuli</h2>
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
                 <li className='mb-4'><strong>Numbers:</strong> Hindu-Arabic numerals</li> 
                </Tooltip>
            </ol>
            <h2 className='text-xl font-semibold mb-2 border-b-2 border-b-gray-200'>Imagistic Stimuli</h2>
            <ol>
              <li className='mb-2'><strong>Shapes:</strong> Various geometric forms</li>
              <li className='mb-2'>
                <a  href="https://en.wikipedia.org/wiki/Gabor_filter">
                  <strong className="text-blue-600">Gabor Patches:</strong> Visual patterns used in neuroscience
                </a>
                </li>
              <li className='mb-2'><strong>Letters:</strong> Alphabetic characters</li>

              <Tooltip text="Tetris blocks">
              <li className='mb-4'>
              <a href="https://en.wikipedia.org/wiki/Pentomino">
                <strong className='text-blue-600'>Pentominoes:</strong> A polygon comprised of 5 tiles
              </a>
              </li>
              </Tooltip>

            </ol>
            <h2 className='text-xl font-semibold mb-2 border-b-2 border-b-gray-200'>Positional Mode</h2>
            <p className='mb-4'>When this setting's on, if you're using imagistic stimuli, chromatic stimuli, or both, you'll simply select the "position" button if you've seen either of the formentioned stimuli <em>n</em> turns ago.</p>

            <h2 className='text-xl font-semibold mb-2 border-b-2 border-b-gray-200'>Chromatic Mode</h2>
            <p className='mb-4'> When this setting's turned on alongside imagistic mode, the images will take on various colors, and you'll need to determine whether you've seen that color <em>n</em> turns ago. Without imagistic stimuli turned on, the squares themselves will be highlighted. </p>
        </div>

      </div>
    </div>
  );
};

export default Guidelines;
