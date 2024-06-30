import { SettingsState, ActionType } from './types';

export const initialState: SettingsState = {
  nBackLevel: 1,
  progression: 'plural',
  mode: 'Normal',
  miscSettings: [
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

export const LOCAL_STORAGE_KEY = 'nBackSettings';

export function settingsReducer(state: SettingsState, action: ActionType): SettingsState {
  switch (action.type) {
    case 'SET_PROGRESSION':
      return { ...state, progression: action.payload };
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