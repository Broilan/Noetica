export interface AudioStimulus {
    type: 'phoneme' | 'word' | 'letter' | 'number';
  }
  
  export interface ImageStimulus {
    type: 'shape' | 'gabor' | 'letter' | 'pentominoes';
  }
  
  export interface StimuliState {
    position: boolean;
    audio: AudioStimulus | null;
    color: boolean;
    image: ImageStimulus | null;
  }
  
  export interface SettingsState {
    nBackLevel: number;
    progression: 'plural' | 'unitary';
    mode: string;
    miscSettings: { name: string; value: boolean }[];
    stimuli: StimuliState;
  }
  
  export type ActionType =
    | { type: 'SET_PROGRESSION'; payload: 'plural' | 'unitary' }
    | { type: 'SET_MODE'; payload: string }
    | { type: 'TOGGLE_MISC_SETTING'; payload: string }
    | { type: 'TOGGLE_STIMULUS'; payload: { name: 'position' | 'color' | 'audio' | 'image'; value: boolean } }
    | { type: 'SET_SUB_TYPE'; payload: { stimulusType: 'audio' | 'image'; value: AudioStimulus['type'] | ImageStimulus['type'] } }
    | { type: 'LOAD_SETTINGS'; payload: SettingsState };