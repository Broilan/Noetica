import React from 'react';
import { Link } from 'react-router-dom';
interface TaskCardProps {
    taskName: string;
    description: string;
    imageUrl: string;
    tags: string[];
    taskId: number;
}


const TaskCard: React.FC<TaskCardProps> = ({ taskName, description, imageUrl, tags, taskId }) => {
    return (
        <div className="max-w-sm rounded-xl shadow-xl bg-white border border-gray-300 m-4">
          <img src={imageUrl} alt={taskName} />
          <div className="px-6 py-4 border-t-2">

            <div className="flex justify-between">
                <div className="font-bold text-2xl mb-2 text-gray-800">{taskName}</div>
                <div className='bg-purple-200 px-3 py-1 mr-2 mb-2 rounded-full font-bold text-purple-700 text-sm'>{tags[0]}</div>
                <div className='bg-red-200 px-3 py-1 mr-2 mb-2 rounded-full font-bold text-red-700 text-sm'>{tags[1]}</div>
                <button className="font-bold text-gray-500 pb-2">?</button>
            </div>

            <p className="text-gray-700 text-base">{description}</p>

          </div>
          <div className="px-6 pt-4 pb-2">
            <Link to={`/tasks/${taskId}`}>
            <button className="bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">Begin</button>
            </Link>
          </div>
        </div>
      );
};

export default TaskCard;