import React from 'react';
import GaborPatch from './GaborPatch-Visual';
import Numbers from './Numbers-Visual';
import Letters from './Letters-Visual';
import Shapes from './Shapes-Visual';

const RandomVisual: React.FC = () => {

    const items = [
        <GaborPatch />,
        <Numbers />,
        <Letters />,
        <Shapes />
    ];

    return (
        <div>
            <p>{items[Math.floor(Math.random() * items.length)]}</p>
        </div>
    );
};

export default RandomVisual;