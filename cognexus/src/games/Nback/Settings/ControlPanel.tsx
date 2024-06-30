import React, { useEffect, useReducer, useRef } from 'react';
import Alert, { AlertRef } from '../../../components/Alert';
import ModeSelector from './ModeSettings/ModeSelector';
import ProgressionSelector from './MiscSettings/ProgressionSelector';
import MiscSettings from './MiscSettings/MiscSettings';
import StimuliSettings from './Stimuli/StimuliSettings';
import { settingsReducer, initialState, LOCAL_STORAGE_KEY } from './settingsReducer';
import { SettingsState } from './types';

interface ControlPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ isOpen, onClose }) => {
  const [state, dispatch] = useReducer(settingsReducer, initialState);
  const alertRef = useRef<AlertRef>(null);

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

  const handleProgressionChange = (progression: 'plural' | 'unitary') => {
    dispatch({ type: 'SET_PROGRESSION', payload: progression });
  };

  const handleModeClick = (mode: string) => {
    dispatch({ type: 'SET_MODE', payload: mode });
  };

  const handleMiscClick = (name: string) => {
    dispatch({ type: 'TOGGLE_MISC_SETTING', payload: name });
  };

  const handleStimuliChange = (name: keyof SettingsState['stimuli'], checked: boolean) => {
    dispatch({
      type: 'TOGGLE_STIMULUS',
      payload: { name, value: checked },
    });
  };

  const handleSubTypeChange = (stimulusType: 'audio' | 'image', value: any) => {
    dispatch({ type: 'SET_SUB_TYPE', payload: { stimulusType, value } });
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSave = () => {
    const hasSelectedStimulus = Object.values(state.stimuli).some(value => value !== null && value !== false);

    if (!hasSelectedStimulus) {
      alertRef.current?.openAlert('error', 'Please select at least one stimulus type!');
      return;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    alertRef.current?.openAlert('success', 'Settings saved successfully!');
    
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
        onClick={handleBackdropClick}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
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

          <ModeSelector mode={state.mode} onModeChange={handleModeClick} />
          <ProgressionSelector progression={state.progression} onProgressionChange={handleProgressionChange} />
          <MiscSettings miscSettings={state.miscSettings} onMiscSettingToggle={handleMiscClick} />
          <StimuliSettings 
            stimuli={state.stimuli} 
            onStimuliChange={handleStimuliChange}
            onSubTypeChange={handleSubTypeChange}
          />

          <button onClick={onClose} className="px-4 py-2 mr-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition-colors duration-200">
            Cancel
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
            Save
          </button>
        </div>
      </div>
      <Alert ref={alertRef} type="success" message="" />
    </>
  );
};

export default ControlPanel;