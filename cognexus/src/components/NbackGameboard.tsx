import React, { useState, useContext, useRef } from 'react';
import { GameContext } from '../pages/games/Nback';
import { GaborPatchVisual, LettersVisual, NumbersVisual, ShapesVisual, RandomVisual} from './Nback-Visual-Settings';
import { WordsAudio, NumbersAudio, LettersAudio, PhonemesAudio, RandomAudio } from './Nback-Audio-Settings';

const NbackGameboard: React.FC = () => {
    const {checkStimuli, state, dispatch} = useContext(GameContext);
    const [gameState, setGameState] = useState(false);
    const [stimuli, setStimuli] = useState();
    
    const handleStart = () => {
        setGameState(true);
        let numOfStimuli = 0;
        const timer = setInterval(() => {
            console.log("oioi", state.concatenatedStimuli, stimuli, state.concatenatedStimuli[numOfStimuli], numOfStimuli)

            if(numOfStimuli === state.concatenatedStimuli.length - 1) {
                setStimuli(state.concatenatedStimuli[0]?.stimulusName);
                numOfStimuli = 0;
            } else {
                setStimuli(state.concatenatedStimuli[numOfStimuli]?.stimulusName);
                numOfStimuli++;
            }

        }, state.iSInterval * 1000);
        

        
    }

    return (
        <div className='flex flex-col rounded-2xl mx-auto shadow-2xl justify-between bg-gray-400 w-[30rem] h-[40rem]'>
            <h1 className='text-4xl font-bold text-black text-center my-10'>dual-2-Back</h1>

            <div className="grid grid-cols-3 h-full">
                <div className='w-full h-full pb-full relative bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        STIMULI
                    </div>
                </div>
                <div className='w-full h-full pb-full relative bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        STIMULI
                    </div>
                </div>
                <div className='w-full h-full pb-full relative bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        STIMULI
                    </div>
                </div>
                <div className='w-full h-full pb-full relative bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        STIMULI
                    </div>
                </div>
                <div className='w-full h-full pb-full relative bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        STIMULI
                    </div>
                </div>
                <div className='w-full h-full pb-full relative bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        STIMULI
                    </div>
                </div>
                <div className='w-full h-full pb-full relative bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        STIMULI
                    </div>
                </div>
                <div className='w-full h-full pb-full relative bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        STIMULI
                    </div>
                </div>
                <div className='w-full h-full pb-full relative bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        STIMULI
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                {gameState ?
                    <>
                        <button 
                        className="bg-gray-300 rounded-xl p-8 text-xl font-semibold mx-6 my-2">
                        Visual
                        </button>

                        <button 
                        className="bg-gray-300 rounded-xl p-8 text-xl font-semibold mx-6 my-2">
                        Audio
                        </button>

                        <button 
                        onClick={() => setGameState(false)} 
                        className="bg-red-500 ml-[26.7rem] mt-1 rounded-lg absolute p-1 h-fit w-fit text-sm text-white font-semibold">
                        Abort
                        </button>

                    </>
                    :
                    <button 
                    onClick={() => handleStart()} 
                    className="bg-gray-300 rounded-xl p-8 text-xl font-semibold mx-6 my-2">
                    Begin
                    </button>
                }


            </div>
        </div>
    );
}

export default NbackGameboard;
