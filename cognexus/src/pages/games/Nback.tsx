import React, {useContext, useReducer} from 'react';
import NbackGameboard from '../../components/NbackGameboard';
import { GaborPatch, Shapes, Letters, Phonemes, Random, Numbers } from '../../components/Nback-Visual-Settings';
import { WordsAudio, NumbersAudio, LettersAudio, PhonemesAudio, RandomAudio } from '../../components/Nback-Audio-Settings';
import NbackSettings from '../../components/NbackSettings';

interface settings {  
  nValue: number;
  duration: number;
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

    case 'duration':
      return { ...state, duration: action.value };  

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

export const GameContext = React.createContext({});

const Nback: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    nValue: 1,
    duration: 60,
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
          dispatch({ type: 'audio', value: state.audio.filter((item: any) => item !== value.target.name) });
        }
        break;

      case "visual":
        if (value.target.checked) {
          dispatch({ type: 'visual', value: [...state.visual, value.target.name] });
        } else {
          dispatch({ type: 'visual', value: state.visual.filter((item: any) => item !== value.target.name) });
        }        
        break;

      case "tactile":
          if (value.target.checked) {
          dispatch({ type: 'tactile', value: [...state.tactile, value.target.name] });
        } else {
          dispatch({ type: 'tactile', value: state.tactile.filter((item: any) => item !== value.target.name) });
        }        
        break;

      default:
        break;
    } 
  }



  return (
    <>
    <div className='flex items-center py-20'>
      <GameContext.Provider value={{ checkStimuli, state, dispatch }}>
        <NbackGameboard/>
        <NbackSettings/>
      </GameContext.Provider>

    </div>
    </>
  );
}
export default Nback;

