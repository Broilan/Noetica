import React, { useEffect, useReducer } from 'react';

interface ControlPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StimuliState {
  position: boolean;
  audio: AudioStimulus | null;
  color: boolean;
  image: ImageStimulus | null;
}

interface AudioStimulus {
  type: 'phoneme' | 'word' | 'letter' | 'number';
}

interface ImageStimulus {
  type: 'shape' | 'gabor' | 'letter' | 'pentominoes';
}

interface SettingsState {
  nBackLevel: number;
  mode: string;
  miscSettings: { name: string; value: boolean }[];
  stimuli: StimuliState;
}

type ActionType =
  | { type: 'SET_N_BACK_LEVEL'; payload: number }
  | { type: 'SET_MODE'; payload: string }
  | { type: 'TOGGLE_MISC_SETTING'; payload: string }
  | { type: 'TOGGLE_STIMULUS'; payload: { name: 'position' | 'color' | 'audio' | 'image'; value: boolean } }
  | { type: 'SET_SUB_TYPE'; payload: { stimulusType: 'audio' | 'image'; value: AudioStimulus['type'] | ImageStimulus['type'] } }
  | { type: 'LOAD_SETTINGS'; payload: SettingsState };

const initialState: SettingsState = {
  nBackLevel: 1,
  mode: 'Normal',
  miscSettings: [
    { name: 'Auto Progression', value: false },
    { name: 'Arithmetic', value: false },
    { name: 'Distractors', value: false },
  ],
  stimuli: {
    position: false,
    audio: null,
    color: false,
    image: null,
  },
};

function settingsReducer(state: SettingsState, action: ActionType): SettingsState {
  switch (action.type) {
    case 'SET_N_BACK_LEVEL':
      return { ...state, nBackLevel: action.payload };
    case 'SET_MODE':
      return { ...state, mode: action.payload };
    case 'TOGGLE_MISC_SETTING':
      return {
        ...state,
        miscSettings: state.miscSettings.map((setting) =>
          setting.name === action.payload
            ? { ...setting, value: !setting.value }
            : setting
        ),
      };
    case 'TOGGLE_STIMULUS':
      return {
        ...state,
        stimuli: {
          ...state.stimuli,
          [action.payload.name]: action.payload.value 
            ? (action.payload.name === 'audio' ? { type: 'phoneme' } : action.payload.name === 'image' ? { type: 'shape' } : true)
            : null,
        },
      };
    case 'SET_SUB_TYPE':
      return {
        ...state,
        stimuli: {
          ...state.stimuli,
          [action.payload.stimulusType]: { type: action.payload.value },
        },
      };
    case 'LOAD_SETTINGS':
      return action.payload; 
    default:
      return state;
  }
}

const LOCAL_STORAGE_KEY = 'nBackSettings';

const ControlPanel: React.FC<ControlPanelProps> = ({ isOpen, onClose }) => {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  useEffect(() => {
    const savedSettings = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        dispatch({ type: 'LOAD_SETTINGS', payload: parsedSettings });
      } catch (error) {
        console.error('Error loading settings from local storage:', error);
      }
    }
  }, []);


  const handleNBackLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_N_BACK_LEVEL', payload: Number(e.target.value) });
  };

  const handleModeClick = (mode: string) => {
    dispatch({ type: 'SET_MODE', payload: mode });
  };

  const handleMiscClick = (name: string) => {
    dispatch({ type: 'TOGGLE_MISC_SETTING', payload: name });
  };

  const handleStimuliChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    dispatch({
      type: 'TOGGLE_STIMULUS',
      payload: {
        name: name as 'position' | 'color' | 'audio' | 'image',
        value: checked,
      },
    });
  };

  const handleSubTypeChange = (stimulusType: 'audio' | 'image', value: AudioStimulus['type'] | ImageStimulus['type']) => {
    dispatch({ type: 'SET_SUB_TYPE', payload: { stimulusType, value } });
  };


  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSave = () => {
    // Save settings to local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    // Close the modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold mb-4">Settings</h2>

        {/* Mode */}
        <label className="block mb-4">
          <h1 className='text-xl font-bold'>Mode</h1>
          <div className="flex flex-row flex-wrap space-x-4">
            {['Normal', 'Synesthesia', 'Contextual'].map((mode) => (
              <div
                key={mode}
                className="h-fit p-2 rounded-lg cursor-pointer transition-colors duration-200"
                style={{ 
                  backgroundColor: state.mode === mode ? '#2563eb' : '#d1d5db',
                  color: state.mode === mode ? "white" : "black"
                }}
                onClick={() => handleModeClick(mode)}
              >
                {mode}
              </div>
            ))}
          </div>
        </label>
        
        {/* N-Level */}
        <label className="block mb-4">
          <h1 className='text-xl font-bold'>N-Level</h1>
          <input
            type="number"
            min={1}
            value={state.nBackLevel}
            onChange={handleNBackLevelChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </label>

        {/* Misc Settings */}
        <label className="block mb-4">
          <h1 className='text-xl font-bold'>Misc Settings</h1>
          <div className="flex flex-row flex-wrap space-x-4">
            {state.miscSettings.map((setting) => (
              <div
                key={setting.name}
                className="h-fit p-2 rounded-lg cursor-pointer transition-colors duration-200"
                style={{ 
                  backgroundColor: setting.value ? '#2563eb' : '#d1d5db',
                  color: setting.value ? "white" : "black"
                }}
                onClick={() => handleMiscClick(setting.name)}
              >
                {setting.name}
              </div>
            ))}
          </div>
        </label>

        <div className="mb-6">
      <h1 className='text-xl font-bold'>Stimuli</h1>
      <hr />
      <label className="block mb-2">
        <input
          type="checkbox"
          name="position"
          checked={state.stimuli.position}
          onChange={handleStimuliChange}
          className="mr-2"
        />
        <span className="text-gray-700">Position</span>
      </label>

      <label className="block mb-2">
        <input
          type="checkbox"
          name="color"
          checked={state.stimuli.color}
          onChange={handleStimuliChange}
          className="mr-2"
        />
        <span className="text-gray-700">Color</span>
      </label>

      <label className="block mb-2">
        <input
          type="checkbox"
          name="image"
          checked={state.stimuli.image !== null}
          onChange={handleStimuliChange}
          className="mr-2"
        />
        <span className="text-gray-700">Image</span>
      </label>
      {state.stimuli.image !== null && (
        <div className="ml-6 mt-2">
          {['shape', 'gabor', 'letter', 'pentominoes'].map((type) => (
            <label key={type} className="block mb-2">
              <input
                type="radio"
                name="imageType"
                value={type}
                checked={state.stimuli.image?.type === type}
                onChange={() => handleSubTypeChange('image', type as ImageStimulus['type'])}
                className="mr-2"
              />
              <span className="text-gray-700">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </label>
          ))}
        </div>
      )}

      <label className="block mb-2">
        <input
          type="checkbox"
          name="audio"
          checked={state.stimuli.audio !== null}
          onChange={handleStimuliChange}
          className="mr-2"
        />
        <span className="text-gray-700">Audio</span>
      </label>
      {state.stimuli.audio !== null && (
        <div className="ml-6 mt-2">
          {['phoneme', 'word', 'letter', 'number'].map((type) => (
            <label key={type} className="block mb-2">
              <input
                type="radio"
                name="audioType"
                value={type}
                checked={state.stimuli.audio?.type === type}
                onChange={() => handleSubTypeChange('audio', type as AudioStimulus['type'])}
                className="mr-2"
              />
              <span className="text-gray-700">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </label>
          ))}
        </div>
      )}
    </div>

        <button onClick={onClose} className="px-4 py-2 mr-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition-colors duration-200">
          Cancel
        </button>
        <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Save
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;