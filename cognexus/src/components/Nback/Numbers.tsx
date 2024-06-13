import React from 'react';

const Numbers: React.FC = () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNum = numbers[randomIndex];

    return (
        <div>
            <h1>{randomNum}</h1>
        </div>
    );
};

export default Numbers;