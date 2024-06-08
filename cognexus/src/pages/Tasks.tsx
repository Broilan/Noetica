import React from 'react';
import TaskCard from '../components/TaskCard';
import brainImg from '../assets/brain.webp';
const Tasks = () => {

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"


    const cognitiveTrainingParadigms = [
        { id: 1, name: 'Paradigm 1', description: loremIpsum, imageUrl: brainImg},
        { id: 2, name: 'Paradigm 2', description: loremIpsum, imageUrl: brainImg},
        { id: 3, name: 'Paradigm 3', description: loremIpsum, imageUrl: brainImg},
        { id: 4, name: 'Paradigm 4', description: loremIpsum, imageUrl: brainImg},
        { id: 5, name: 'Paradigm 5', description: loremIpsum, imageUrl: brainImg},
        { id: 6, name: 'Paradigm 6', description: loremIpsum, imageUrl: brainImg},
        { id: 7, name: 'Paradigm 7', description: loremIpsum, imageUrl: brainImg},
        { id: 8, name: 'Paradigm 8', description: loremIpsum, imageUrl: brainImg},

        // Add more paradigms as needed
    ];

    return (

        <div className='flex flex-wrap justify-between mx-20 sm:mx-0'>

            {cognitiveTrainingParadigms.map(paradigm => (

                <TaskCard taskName={paradigm.name} description={paradigm.description} imageUrl={brainImg}></TaskCard>

            ))}

        </div>

    );
};

export default Tasks;