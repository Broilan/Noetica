import React from 'react';

interface MiscSetting {
  name: string;
  value: boolean;
}

interface MiscSettingsProps {
  miscSettings: MiscSetting[];
  onMiscSettingToggle: (name: string) => void;
}

const MiscSettings: React.FC<MiscSettingsProps> = ({ miscSettings, onMiscSettingToggle }) => {
  return (
    <div className="mb-4">
      <h1 className='text-xl font-bold'>Misc Settings</h1>
      <div className="flex flex-row flex-wrap space-x-4">
        {miscSettings.map((setting) => (
          <div
            key={setting.name}
            className="h-fit p-2 rounded-lg cursor-pointer transition-colors duration-200"
            style={{ 
              backgroundColor: setting.value ? '#2563eb' : '#d1d5db',
              color: setting.value ? "white" : "black"
            }}
            onClick={() => onMiscSettingToggle(setting.name)}
          >
            {setting.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiscSettings;