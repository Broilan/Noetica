import React, { useEffect, useState } from "react";

const WordsAudio: React.FC = () => {
    const [randomIndex, setRandomIndex] = useState<number>(0);

    const words = [
        "apple", "bicycle", "crimson", "dog", "elephant", "forest", "grape", "house", 
        "island", "jacket", "kangaroo", "lemon", "mountain", "notebook", "ocean", 
        "pencil", "quartz", "river", "sunshine", "tiger", "umbrella", "violin", 
        "whisper", "xylophone", "yellow", "zebra"
    ];

    useEffect(() => {
        const utterWord = () => {
            const speechSynthesis = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(words[randomIndex]);
            speechSynthesis.speak(utterance);
        };

        utterWord();
    }, [randomIndex]);

    const handleButtonClick = () => {
        const newIndex = Math.floor(Math.random() * words.length);
        setRandomIndex(newIndex);
    };

    return (
        <div>
            <h1>Words Component</h1>
            <p>Current word: {words[randomIndex]}</p>
            <button onClick={handleButtonClick}>Change Word</button>
        </div>
    );
};

export default WordsAudio;