import React, { useState, useEffect, useReducer } from 'react';

interface settings {  
  nValue: number;
  prefixValue: number;
}

const reducer = (state: settings, action: any) => {
  switch (action.type) {
    case 'nValue':
      return { ...state, nValue: action.value };

    case 'prefixValue':
      return { ...state, prefixValue: action.value };

    default:
      return state;
  }
};

const Nback: React.FC = () => {
  
  const [state, dispatch] = useReducer(reducer, {
    nValue: 1,
    prefixValue: 1,
  });


  return (
    <>
    <div className='flex items-center py-20'>

    {/* BEGIN GAMEBOARD COMPONENT*/}
    <div className='flex flex-col rounded-2xl mx-auto shadow-2xl justify-between bg-gray-400 w-[30rem] h-[40rem] '>

      <h1 className='text-4xl font-bold text-black text-center my-10'>{state.prefixValue}-{state.nValue}-Back</h1>

      <div className={`grid grid-cols-3 grid-3 h-full `}>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      <div className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>1</div>
      </div>

      <div className="flex justify-center">
        <button className="bg-blue-200 rounded-full px-3 text-xl font-semibold text-blue-700 mr-2 my-2">Start</button>
        <button className="bg-red-200 rounded-full px-3 text-xl font-semibold text-red-700 mr-2 my-2">Stop</button>
      </div>
    
    </div>
    {/* END GAMEBOARD COMPONENT*/}


    {/* BEGIN SETTINGS COMPONENT*/}
          <div className="bg-gray-400 shadow-2xl rounded-lg p-6 w-full max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-black">Settings</h2>


      <div className="mb-4">
        <label htmlFor="prefixValue" className="block text-sm font-medium text-gray-700 mb-1">Prefix</label>
        <input
          type="number"
          min="1"
          max="5"
          id="prefixValue"
          value={state.prefixValue}
          onChange={(e) => dispatch({ type: 'prefixValue', value: e.target.value })}
          className="w-full border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nValue" className="block text-sm font-medium text-gray-700 mb-1">N Value</label>
        <input
          type="number"
          id="nValue"
          value={state.nValue}
          onChange={(e) => dispatch({ type: 'nValue', value: e.target.value })}
          className="w-full border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <button
        // onClick={handleSave}
        className="w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save Settings
      </button>
    </div>
    {/* END SETTINGS COMPONENT*/}

    </div>
    </>
  );
}
export default Nback;

