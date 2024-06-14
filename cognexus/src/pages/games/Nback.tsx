import React, {useContext, useReducer} from 'react';
import NbackGameboard from '../../components/NbackGameboard';
import { GaborPatch, Shapes, Letters, Phonemes, Random, Numbers } from '../../components/Nback-Visual-Settings';
import { WordsAudio, NumbersAudio, LettersAudio, PhonemesAudio, RandomAudio } from '../../components/Nback-Audio-Settings';
import NbackSettings from '../../components/NbackSettings';

interface settings {  
  nValue: number;
  duration: number;
  iSInterval: number;
  stimuliTypes?: {
    Audiological: boolean;
    Positional: boolean;
    Color: boolean;
    Tactile: boolean;
    Imagistic: boolean;
  };
  stimuli?: {
    Audiological: string[];
    Visual: string[];
    Tactile: string[];
  };
}

const reducer = (state: settings, action: any) => {
  switch (action.type) {
    case 'nValue':
      return { ...state, nValue: action.value };

    case 'duration':
      return { ...state, duration: action.value };  

    case 'iSInterval':
      return { ...state, iSInterval: action.value };  
      
    case 'stimuliTypes':
      return { ...state, stimuliTypes: action.value };   

    case 'stimuli':
      return { ...state, stimuli: action.value };

    default:
      return state;
  }
};

export const GameContext = React.createContext({});

const Nback: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    nValue: 1,
    duration: 60,
    iSInterval: 2,
    stimuliTypes: {
      Audiological: false,
      Positional: false,
      Color: false,
      Tactile: false,
      Imagistic: false
    },
    stimuli: {
      Audiological: [],
      Visual: [],
      Tactile: []
    }
  });

  // const checkStimuli = ({type, value}: any) => {
  //     case "stimuliTypes":
  //       if (value.target.checked) {
  //         dispatch({ type: 'stimuliTypes', value: [...state.stimuliTypes, value.target.name] });
  //       } else {
  //         dispatch({ type: 'stimuliTypes', value: state.stimuliTypes.filter((item: any) => item !== value.target.name) });
  //       }
  //       break;
  //     default:
  //       break;
  //   } 
  // }



  return (
    <>
    <div className='flex items-center py-20'>
      <GameContext.Provider value={{ state, dispatch }}>
        <NbackGameboard/>
        <NbackSettings/>
      </GameContext.Provider>

    </div>
    </>
  );
}
export default Nback;

