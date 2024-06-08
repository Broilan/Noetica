import React from 'react';

interface TaskCardProps {
    taskName: string;
    description: string;
    imageUrl: string;
}


const TaskCard: React.FC<TaskCardProps> = ({ taskName, description, imageUrl }) => {
    return (
        <div className="max-w-sm rounded-xl shadow-xl bg-white border border-gray-300 m-4">
          <img src={imageUrl} alt={taskName} />
          <div className="px-6 py-4 border-t-2">
            <div className="font-bold text-2xl mb-2 text-gray-800">{taskName}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">Cognitive Training</button>
            <button className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">Task</button>
          </div>
        </div>
      );
};

export default TaskCard;