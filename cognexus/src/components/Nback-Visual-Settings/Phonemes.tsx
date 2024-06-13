import React from 'react';

const Phonemes: React.FC = () => {
    const phonemes = ["oo", "ow", "oy", "ar", "er", "or"];
    const randomPhoneme = phonemes[Math.floor(Math.random() * phonemes.length)];

    return (
        <div>
            <h1>{randomPhoneme}</h1>
        </div>
    );
};

export default Phonemes;

