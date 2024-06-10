import React from 'react';
import TaskCard from '../components/TaskCard';
import brainImg from '../assets/brain.webp';
const Tasks = () => {

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"


    const cognitiveTrainingParadigms = [
        { id: "n-back", name: 'Paradigm 1', description: loremIpsum, imageUrl: brainImg, tags: ['Memory', 'Attention', 'Problem Solving']},
        { id: 2, name: 'Paradigm 2', description: loremIpsum, imageUrl: brainImg, tags: ['Memory', 'Attention', 'Problem Solving']},
        { id: 3, name: 'Paradigm 3', description: loremIpsum, imageUrl: brainImg, tags: ['Memory', 'Attention', 'Problem Solving']},
        { id: 4, name: 'Paradigm 4', description: loremIpsum, imageUrl: brainImg, tags: ['Memory', 'Attention', 'Problem Solving']},
        { id: 5, name: 'Paradigm 5', description: loremIpsum, imageUrl: brainImg, tags: ['Memory', 'Attention', 'Problem Solving']},
        { id: 6, name: 'Paradigm 6', description: loremIpsum, imageUrl: brainImg, tags: ['Memory', 'Attention', 'Problem Solving']},
        { id: 7, name: 'Paradigm 7', description: loremIpsum, imageUrl: brainImg, tags: ['Memory', 'Attention', 'Problem Solving']},
        { id: 8, name: 'Paradigm 8', description: loremIpsum, imageUrl: brainImg, tags: ['Memory', 'Attention', 'Problem Solving']},
    ];

    return (
        <>
        <h1 className='text-4xl font-bold text-gray-800 text-center my-10'>Training Paradigms</h1>
        <div className='flex flex-wrap justify-between mx-20 sm:mx-0'>

            {cognitiveTrainingParadigms.map(paradigm => (

                <TaskCard taskId={paradigm.id} taskName={paradigm.name} description={paradigm.description} imageUrl={brainImg} tags={paradigm.tags}></TaskCard>

            ))}

        </div>
        </>

    );
};

export default Tasks;