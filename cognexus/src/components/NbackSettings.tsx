import React, { useContext } from 'react';
import {GameContext} from '../pages/games/Nback';
import { GaborPatchVisual, LettersVisual, NumbersVisual, ShapesVisual, RandomVisual} from './Nback-Visual-Settings';
import { WordsAudio, NumbersAudio, LettersAudio, PhonemesAudio, RandomAudio } from './Nback-Audio-Settings';

const NbackSettings: React.FC = () => {
    const {state, dispatch} = useContext(GameContext);

    const checkStimuliTypes = (e: any) => {
      dispatch({ type: 'stimuliTypes', value: { ...state.stimuliTypes, [e.target.value]: e.target.checked } });
        };

    const checkStimuli = (e: any) => {
          if( e.target.checked ) {
            dispatch({ type: 'stimuli', value: { ...state.stimuli, [e.target.value]: [...state.stimuli[e.target.value], e.target.name] } });
          } else {
            dispatch({ type: 'stimuli', value: { ...state.stimuli, [e.target.value]: state.stimuli[e.target.value].filter((el: string) => el !== e.target.name) } });
        }
        console.log("20", e.target, state)
      };
    

    const handleSave = () => {
    //     const stimuliNum = state.audio.length + state.visual.length + state.tactile.length;
    //     if (stimuliNum < state.prefixValue) {
    //         alert(`Please select at least ${state.prefixValue} stimuli`);
    //         return;
    //     } else if (stimuliNum > state.prefixValue) {
    //         alert(`Please select no more than ${state.prefixValue} stimuli`);
    //         return;
    //     } else if (state.tactile.length > 0) {
    //         alert('Oops, tactile stimuli aren\t available yet. In the meantime, please select something else to continue. Thank you!');
    //     } else {
    //       let arr = [];
    //       for (let i = 0; i < Math.max(state.audio.length, state.visual.length, state.tactile.length); i++) {
    //         if(state.audio[i] !== undefined) {
    //           arr.push(state.audio[i]);
    //         }
    //         if(state.visual[i] !== undefined) {
    //           arr.push(state.visual[i]);
    //         }
    //         if(state.tactile[i] !== undefined) {
    //           arr.push(state.tactile[i]);
    //         }
    //     } 
    //     dispatch({ type: 'concatenatedStimuli', value: arr });
    //     alert('Settings saved');
    //     console.log('arr', arr)
    //   }
    //     console.log(state)
    };




return (
<div className="bg-gray-400 shadow-2xl rounded-lg p-6 w-full max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-black">Settings</h2>

    {/* N-VALUE, INTERSTIMULUS INTERVAL, AND DURATION INPUTS START */}

      <div className="mb-4">
        <label htmlFor="nValue" className="block text-md font-bold mb-1">N value</label>
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

      <div className="mb-4">
        <label htmlFor="duration" className="block text-md font-bold mb-1"> Duration (s)</label>
        <input
          type="number"
          id="duration"
          min={30}
          max={180}
          value={state.duration}
          onChange={(e) => dispatch({ type: 'duration', value: e.target.value })}
          className="w-full border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div> 
    {/* N-VALUE, INTERSTIMULUS INTERVAL, AND DURATION INPUTS END */}

      <div className='flex flex-col space-y-4 mb-2'>

          {/* STIMULI TYPES INPUTS */}
          <div>
      <h1 className='font-bold'>Stimuli Types</h1>


      <form onChange={(e) => checkStimuliTypes(e)} className='flex space-x-2 flex-wrap'>
      <input
      type="checkbox" 
      value="Audiological" 
      name="Audiological" 
      id="Audiological"
      checked={state.stimuliTypes['Audiological']}
      />
      <label htmlFor="Audiological" className="block text-sm font-medium text-gray-700 mb-1">Audiological</label>

      <input 
      type="checkbox" 
      value="Positional" 
      name="Positional" 
      id="Positional" 
      checked={state.stimuliTypes['Positional']}
      />
      <label htmlFor="Positional" className="block text-sm font-medium text-gray-700 mb-1">Positional</label>

      <input 
      type="checkbox" 
      value="Imagistic" 
      name="Imagistic" 
      id="Imagistic" 
      checked={state.stimuliTypes['Imagistic']}
      />
      <label htmlFor="Imagistic" className="block text-sm font-medium text-gray-700 mb-1">Imagistic</label>

      <input 
      type="checkbox" 
      value="Color" 
      name="Color" 
      id="Color" 
      checked={state.stimuliTypes['Color']}
      />

      <label htmlFor="Color" className="block text-sm font-medium text-gray-700 mb-1">Color</label>
      </form>

      </div>
      {/* STIMULI TYPES INPUTS END */}   

     {/* AUDIOLOGICAL STIMULI INPUTS */}
      <div>
      <h1 className='font-bold'>Audiological Stimuli</h1>


      <form onChange={(e) => checkStimuli(e)} className='flex space-x-2 flex-wrap'>
      <input
      type="checkbox" 
      value="Audiological" 
      name="Words" 
      id="Words"
      checked={state.stimuli['Audiological']?.includes('Words')}
      />
      <label htmlFor="Words" className="block text-sm font-medium text-gray-700 mb-1">Words</label>

      <input 
      type="checkbox" 
      value="Audiological" 
      name="Numbers" 
      id="Numbers" 
      checked={state.stimuli['Audiological']?.includes('Numbers')}
      />
      <label htmlFor="Numbers" className="block text-sm font-medium text-gray-700 mb-1">Numbers</label>

      <input 
      type="checkbox" 
      value="Audiological" 
      name="Letters" 
      id="Letters" 
      checked={state.stimuli['Audiological']?.includes('Letters')}
      />
      <label htmlFor="Numbers" className="block text-sm font-medium text-gray-700 mb-1">Letters</label>

      <input 
      type="checkbox" 
      value="Audiological" 
      name="Phonemes" 
      id="Phonemes" 
      checked={state.stimuli['Audiological']?.includes('Phonemes')}
      />
      <label htmlFor="Phonemes" className="block text-sm font-medium text-gray-700 mb-1">Phonemes</label>
      </form>

      </div>
      {/* AUDIOLOGICAL STIMULI INPUTS END */}

      {/* VISUAL STIMULI INPUTS START */}
      <div>
      <h1 className='font-bold'>Visual Stimuli</h1>

      <form onChange={(e) => checkStimuli(e)} className='flex space-x-2 flex-wrap'>

      <input 
      type="checkbox" 
      value="Visual" 
      name="Highlight" 
      id="Highlight" 
      />
      <label htmlFor="Highlight" className="block text-sm font-medium text-gray-700 mb-1">Highlight</label>

      <input
      type="checkbox" 
      value="Visual" 
      name="Gabor" 
      id="Gabor" />
      <label htmlFor="Gabor" className="block text-sm font-medium text-gray-700 mb-1">Gabor</label>

    <input 
      type="checkbox" 
      value="Visual" 
      name="Shapes" 
      id="Shapes" />
      <label htmlFor="Shapes" className="block text-sm font-medium text-gray-700 mb-1">Shapes</label>

        <input 
      type="checkbox" 
      value="Visual" 
      name="Images" 
      id="Images" />
      <label htmlFor="Shapes" className="block text-sm font-medium text-gray-700 mb-1">Images</label>

      </form>
      </div>
      {/* VISUAL STIMULI INPUTS END */}

      {/* TACTILE STIMULI INPUTS START */}
      <div>
      <h1 className='font-bold'>Tactile Stimuli (mobile only)</h1>

      <form onChange={(e) => checkStimuli(e)} className='flex space-x-2 flex-wrap'>

        <input 
        type="checkbox" 
        value="Tactile" 
        name="Vibrations" 
        id="Vibrations" />
        <label htmlFor="Vibrations" className="block text-sm font-medium text-gray-700 mb-1">Vibrations</label>

      </form>

      </div>
      {/* TACTILE STIMULI INPUTS END */}

      </div>


      <button
        onClick={handleSave}
        className="w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save Settings
      </button>
    </div>
    );
}

    export default NbackSettings;
