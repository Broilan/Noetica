import React, {useState, useEffect, useContext} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Tasks} from './pages'; 
import {Navbar, Footer} from './components'; 
import { NBack } from './games';
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
          <Route path="/tasks/n-back" element={<NBack />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </DataContext.Provider>
    </>
  )
}

export default App
