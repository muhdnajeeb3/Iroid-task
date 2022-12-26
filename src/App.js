
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/Details/Details';
import Launches from './components/Launches/Launches';

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Details /> */}
    <Routes>
   
      <Route path='/' element={<Launches/>} />
      <Route  path='/details' element={<Details/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
