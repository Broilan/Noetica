import React, {useState, useEffect, useContext} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Tasks, Nback} from './pages'; 
import Navbar from './components/Navbar'; 
import './index.css'

export const DataContext = React.createContext({});

const App = () => {
  const [gameList , setGameList] = useState([])


  return (
    <>
    <DataContext.Provider value={{ gameList, setGameList}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/1" element={<Nback n={2} />} />
        </Routes>
      </BrowserRouter>
      </DataContext.Provider>
    </>
  )
}

export default App
