import React from 'react';
import GaborPatch from './GaborPatch';
import Numbers from './Numbers';
import Letters from './Letters';
import Phonemes from './Phonemes';
import Shapes from './Shapes';

const Random: React.FC = () => {

    const items = [
        <GaborPatch />,
        <Numbers />,
        <Letters />,
        <Phonemes />,
        <Shapes />
    ];

    return (
        <div>
            <p>{items[Math.floor(Math.random() * items.length)]}</p>
        </div>
    );
};

export default Random;