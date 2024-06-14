import React, { useState, useContext, useRef, useEffect } from 'react';
import { GameContext } from '../pages/games/Nback';

const NbackGameboard: React.FC = () => {
    const { state } = useContext(GameContext);
    const [gameState, setGameState] = useState(false);
    const [stimuli, setStimuli] = useState<string | undefined>(undefined);
    const stimuliRef = useRef<string | undefined>(undefined);
    const numOfStimuliRef = useRef(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (gameState) {
            timerRef.current = setInterval(() => {
                console.log("oioi", state.concatenatedStimuli, stimuliRef.current, state.concatenatedStimuli[numOfStimuliRef.current], numOfStimuliRef.current);

                if (state.concatenatedStimuli && state.concatenatedStimuli.length > 0) {
                    if (numOfStimuliRef.current >= state.concatenatedStimuli.length - 1) {
                        setStimuli(() => {
                            const newStimulus = state.concatenatedStimuli[0]?.stimulusName;
                            stimuliRef.current = newStimulus;
                            return newStimulus;
                        });
                        numOfStimuliRef.current = 0;
                    } else {
                        setStimuli(() => {
                            const newStimulus = state.concatenatedStimuli[numOfStimuliRef.current]?.stimulusName;
                            stimuliRef.current = newStimulus;
                            return newStimulus;
                        });
                        numOfStimuliRef.current++;
                    }
                }
            }, state.iSInterval * 1000);
        }

        // Cleanup interval on component unmount or when gameState changes
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [gameState, state.concatenatedStimuli, state.iSInterval]);

    const handleStart = () => {
        setGameState(true);
    };

    return (
        <div className='flex flex-col rounded-2xl mx-auto shadow-2xl justify-between bg-gray-400 w-[30rem] h-[40rem]'>
            <h1 className='text-4xl font-bold text-black text-center my-10'>dual-2-Back</h1>

            <div className="grid grid-cols-3 h-full">
                {[...Array(9)].map((_, index) => (
                    <div key={index} className='w-full h-full pb-full relative bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>
                        <div className='absolute inset-0 flex justify-center items-center'>
                            {stimuli ? stimuli : 'STIMULI'}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                {gameState ?
                    <>
                        <button className="bg-gray-300 rounded-xl p-8 text-xl font-semibold mx-6 my-2">Visual</button>
                        <button className="bg-gray-300 rounded-xl p-8 text-xl font-semibold mx-6 my-2">Audio</button>
                        <button onClick={() => setGameState(false)} className="bg-red-500 ml-[26.7rem] mt-1 rounded-lg absolute p-1 h-fit w-fit text-sm text-white font-semibold">Abort</button>
                    </>
                    :
                    <button onClick={handleStart} className="bg-gray-300 rounded-xl p-8 text-xl font-semibold mx-6 my-2">Begin</button>
                }
            </div>
        </div>
    );
}

export default NbackGameboard;
