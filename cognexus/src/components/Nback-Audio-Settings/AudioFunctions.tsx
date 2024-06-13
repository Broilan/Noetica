import React, { useEffect, useState } from "react";

const AudioFunctions: React.FC = () => {
    const [randomIndex, setRandomIndex] = useState<number>(0);

    const random = [
        "apple", "bicycle", "crimson", "dog", "elephant", "forest", "grape", "house", 
        "island", "jacket", "kangaroo", "lemon", "mountain", "notebook", "ocean", 
        "pencil", "quartz", "river", "sunshine", "tiger", "umbrella", "violin", 
        "whisper", "xylophone", "yellow", "zebra", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
        "U", "V", "W", "X", "Y", "Z", "b", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", 
        "w", "z", "ch", "sh", "th", "ng", "ee", "ay", "oo", "ow", "oy", "ar", "er", "or"
    ]
    useEffect(() => {
        const utterWord = () => {
            const speechSynthesis = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(random[randomIndex]);
            speechSynthesis.speak(utterance);
        };

        utterWord();
    }, [randomIndex]);

    const handleButtonClick = () => {
        const newIndex = Math.floor(Math.random() * random.length);
        setRandomIndex(newIndex);
    };

    return (
        <div>
            <h1>random Component</h1>
            <p>Current word: {random[randomIndex]}</p>
            <button onClick={handleButtonClick}>Change Word</button>
        </div>
    );
};

export default AudioFunctions;