import React, { useState, useEffect, useReducer } from 'react';

interface settings {  
  nValue: number;
  prefixValue: number;
  xValue: number;
  yValue: number;
  arrayOfValues: number[];
}

const reducer = (state: settings, action: any) => {
  switch (action.type) {
    case 'nValue':
      return { ...state, nValue: action.value };
    case 'prefixValue':
      return { ...state, prefixValue: action.value };
    case 'xValue':
      return { ...state, xValue: action.value };
    case 'yValue':
      return { ...state, yValue: action.value };
    case 'arrayOfValues':
      return { ...state, arrayOfValues: action.value };
    default:
      return state;
  }
};

const Nback: React.FC = () => {
  
  const [state, dispatch] = useReducer(reducer, {
    nValue: 1,
    prefixValue: 1,
    xValue: 3,
    yValue: 3,
    arrayOfValues: Array.from({ length:9 }, () => { return Math.floor(Math.random() * 10)}),
  });

  console.log(state.arrayOfValues)

  return (
    <>
    <div className='flex bg-gray-300'>

    {/* BEGIN GAMEBOARD COMPONENT*/}
    <div className='bg-gray-400 w-96'>
      <h1 className='text-4xl font-bold text-gray-800 text-center my-10'>{state.prefixValue}-{state.nValue}-Back</h1>

      <div className={`grid grid-cols-${state.xValue} grid-rows-${state.yValue} bg-black h-full w-full`}>
        {state.arrayOfValues.map((value:number, index:number) => (
          <div key={index} className='bg-white text-black border-gray-200 border-2 text-4xl flex justify-center items-center'>{value}</div>
        ))}
      </div>

      <div className="flex justify-center border-gray-300 border-2">
        <button className="bg-blue-200 rounded-full px-3 text-sm font-semibold text-blue-700 mr-2 my-2">Start</button>
        <button className="bg-red-200 rounded-full px-3 text-sm font-semibold text-red-700 mr-2 my-2">Stop</button>
      </div>
    </div>
    {/* END GAMEBOARD COMPONENT*/}


    {/* BEGIN SETTINGS COMPONENT*/}
          <div className="bg-gray-400 shadow-2xl rounded-lg p-6 w-full max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Settings</h2>
      <div className="mb-4">
        <label htmlFor="xValue" className="block text-sm font-medium text-gray-700 mb-1">X Value</label>
        <input
          type="number"
          id="xValue"
          value={state.xValue}
          onChange={(e) => dispatch({ type: 'xValue', value: e.target.value })}
          className="w-full border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="yValue" className="block text-sm font-medium text-gray-700 mb-1">Y Value</label>
        <input
          type="number"
          id="yValue"
          value={state.yValue}
          onChange={(e) => dispatch({ type: 'yValue', value: e.target.value })}
          className="w-full border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="prefixValue" className="block text-sm font-medium text-gray-700 mb-1">Prefix</label>
        <input
          type="number"
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

