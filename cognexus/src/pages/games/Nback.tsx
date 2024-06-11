import React, { useState, useEffect, useReducer } from 'react';
import { GaborPatch } from '../../components';

interface settings {  
  nValue: number;
  prefixValue: number;
  iSInterval: number;
  audio?: string[];
  visual?: string[];
  tactile?: string[];
}

const reducer = (state: settings, action: any) => {
  switch (action.type) {
    case 'nValue':
      return { ...state, nValue: action.value };

    case 'prefixValue':
      return { ...state, prefixValue: action.value };

    case 'iSInterval':
      return { ...state, iSInterval: action.value };  

    case 'audio':
      return { ...state, audio: action.value };

    case 'visual':
      return { ...state, visual: action.value };

    case 'tactile':
      return { ...state, tactile: action.value };

    default:
      return state;
  }
};

const Nback: React.FC = () => {
  
  const [state, dispatch] = useReducer(reducer, {
    nValue: 1,
    prefixValue: 2,
    iSInterval: 2,
    audio: [],
    visual: [],
    tactile: []
  });

  const checkStimuli = ({type, value}: any) => {
    switch (value.target.value) {
      case "audio":
        if (value.target.checked) {
          dispatch({ type: 'audio', value: [...state.audio, value.target.name] });
        } else {
          dispatch({ type: 'audio', value: state.audio.filter((item) => item !== value.target.name) });
        }
        break;

      case "visual":
        if (value.target.checked) {
          dispatch({ type: 'visual', value: [...state.visual, value.target.name] });
        } else {
          dispatch({ type: 'visual', value: state.visual.filter((item) => item !== value.target.name) });
        }        
        break;

      case "tactile":
          if (value.target.checked) {
          dispatch({ type: 'tactile', value: [...state.tactile, value.target.name] });
        } else {
          dispatch({ type: 'tactile', value: state.tactile.filter((item) => item !== value.target.name) });
        }        
        break;

      default:
        break;
    }
    console.log("after", state.audio)
    console.log("after", state.visual)
    console.log("after", state.tactile)
  }


  return (
    <>
    <div className='flex items-center py-20'>

    {/* BEGIN GAMEBOARD COMPONENT*/}
    <div className='flex flex-col rounded-2xl mx-auto shadow-2xl justify-between bg-gray-400 w-[30rem] h-[40rem] '>

      <h1 className='text-4xl font-bold text-black text-center my-10'>{state.prefixValue}-{state.nValue}-Back</h1>

      <div className={`grid grid-cols-3 grid-3 h-full `}>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>
        <GaborPatch
        frequency={6}
        orientation={45}
        phase={5}
        size={100}
      /></div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      </div>

      <div className="flex justify-center">
        <button className="bg-blue-200 rounded-full px-3 text-xl font-semibold text-blue-700 mr-2 my-2">Start</button>
        <button className="bg-red-200 rounded-full px-3 text-xl font-semibold text-red-700 mr-2 my-2">Stop</button>
      </div>
    
    </div>
    {/* END GAMEBOARD COMPONENT*/}


    {/* BEGIN SETTINGS COMPONENT*/}
          <div className="bg-gray-400 shadow-2xl rounded-lg p-6 w-full max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-black">Settings</h2>


      <div className="mb-4">
        <label htmlFor="prefixValue" className="block text-md font-bold mb-1">Prefix</label>
        <input
          type="number"
          min="1"
          max="5"
          id="prefixValue"
          value={state.prefixValue}
          onChange={(e) => dispatch({ type: 'prefixValue', value: e.target.value })}
          className="w-full border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="nValue" className="block text-md font-bold mb-1">N Value</label>
        <input
          type="number"
          id="nValue"
          value={state.nValue}
          onChange={(e) => dispatch({ type: 'nValue', value: e.target.value })}
          className="w-full border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>  

      <div className="mb-4">
        <label htmlFor="iSInterval" className="block text-md font-bold mb-1">Interstimulus Interval (s)</label>
        <input
          type="number"
          id="iSInterval"
          min={1}
          max={5}
          value={state.iSInterval}
          onChange={(e) => dispatch({ type: 'iSInterval', value: e.target.value })}
          className="w-full border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div> 

      <div className='flex flex-col space-y-4 mb-2'>
      <div>
      <h1 className='font-bold'>Audiological Stimuli</h1>

      <div className='flex space-x-2 flex-wrap'>


      {/* AUDIOLOGICAL STIMULI INPUTS */}
      <input
      onChange={(e) => checkStimuli({ type: 'audio', value: e })} 
      type="checkbox" 
      value="audio" 
      name="Words" 
      id="Words"/>
      <label htmlFor="Words" className="block text-sm font-medium text-gray-700 mb-1">Words</label>

      <input 
      onChange={(e) => checkStimuli({ type: 'audio', value: e })}
      type="checkbox" 
      value="audio" 
      name="Numbers" 
      id="Numbers" />
      <label htmlFor="Numbers" className="block text-sm font-medium text-gray-700 mb-1">Numbers</label>

      <input 
      onChange={(e) => checkStimuli({ type: 'audio', value: e })}
      type="checkbox" 
      value="Letters" 
      name="Letters" 
      id="Letters" 
      />
      <label htmlFor="Numbers" className="block text-sm font-medium text-gray-700 mb-1">Letters</label>

      <input 
      onChange={(e) => checkStimuli({ type: 'audio', value: e })}
      type="checkbox" 
      value="audio" 
      name="Phonemes" 
      id="Phonemes" />
      <label htmlFor="Phonemes" className="block text-sm font-medium text-gray-700 mb-1">Phonemes</label>

      <input 
      onChange={(e) => checkStimuli({ type: 'audio', value: e })}
      type="checkbox" 
      value="audio" 
      name="Random" 
      id="Random" />
      <label htmlFor="Random" className="block text-sm font-medium text-gray-700 mb-1">Random</label>

      </div>

      </div>
      {/* AUDIOLOGICAL STIMULI INPUTS END */}

      {/* VISUAL STIMULI INPUTS START */}
      <div>
      <h1 className='font-bold'>Visual Stimuli</h1>

      <div className='flex space-x-2 flex-wrap'>

      <input 
      onChange={(e) => checkStimuli({ type: 'visual', value: e })}
      type="checkbox" 
      value="visual" 
      name="Highlight" 
      id="Highlight" 
      />
      <label htmlFor="Highlight" className="block text-sm font-medium text-gray-700 mb-1">Highlight</label>

      <input 
      onChange={(e) => checkStimuli({ type: 'visual', value: e })}
      type="checkbox" 
      value="visual" 
      name="Gabor" 
      id="Gabor" />
      <label htmlFor="Gabor" className="block text-sm font-medium text-gray-700 mb-1">Gabor</label>

      <input 
      onChange={(e) => checkStimuli({ type: 'visual', value: e })}
      type="checkbox" 
      value="visual" 
      name="Shapes" 
      id="Shapes" />
      <label htmlFor="Shapes" className="block text-sm font-medium text-gray-700 mb-1">Shapes</label>

      <input 
      onChange={(e) => checkStimuli({ type: 'visual', value: e })}
      type="checkbox" 
      value="visual" 
      name="Phonemes" 
      id="Phonemes" />
      <label htmlFor="Phonemes" className="block text-sm font-medium text-gray-700 mb-1">Phonemes</label>

      <input 
      onChange={(e) => checkStimuli({ type: 'visual', value: e })}
      type="checkbox" 
      value="visual" 
      name="Numbers" 
      id="Numbers" />
      <label htmlFor="Numbers" className="block text-sm font-medium text-gray-700 mb-1">Numbers</label>

      <input 
      onChange={(e) => checkStimuli({ type: 'visual', value: e })}
      type="checkbox" 
      value="visual" 
      name="Letters" 
      id="Letters" />
      <label htmlFor="Letters" className="block text-sm font-medium text-gray-700 mb-1">Letters</label>

      <input 
      onChange={(e) => checkStimuli({ type: 'visual', value: e })}
      type="checkbox" 
      value="visual" 
      name="Random" 
      id="Random" />
      <label htmlFor="Random" className="block text-sm font-medium text-gray-700 mb-1">Random</label>

      </div>
      </div>
      {/* VISUAL STIMULI INPUTS END */}

      {/* TACTILE STIMULI INPUTS START */}
      <div>
      <h1 className='font-bold'>Tactile Stimuli (mobile only)</h1>

      <div className='flex space-x-2 flex-wrap'>

      <input 
      onChange={(e) => checkStimuli({ type: 'tactile', value: e })}
      type="checkbox" 
      value="tactile" 
      name="Vibrations" 
      id="Vibrations" />
      <label htmlFor="Vibrations" className="block text-sm font-medium text-gray-700 mb-1">Vibrations</label>

      </div>

      </div>
      {/* TACTILE STIMULI INPUTS END */}
      </div>


      <button
        // onClick={handleSave}
        className="w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save Settings
      </button>
    </div>
    {/* END SETTINGS COMPONENT*/}

    </div>
    </>
  );
}
export default Nback;

