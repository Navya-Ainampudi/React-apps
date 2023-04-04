import React from 'react';
import './Area.css';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import Triangle from './areaCalcComponents/Triangle';
import Rectangle from './areaCalcComponents/Rectangle';
import Circle from './areaCalcComponents/Circle';
import Polygonal from './areaCalcComponents/Polygonal';
import {BrowserRouter, Route,Link, Routes} from "react-router-dom";
import Home from './areaCalcComponents/Home';



export default function AreaCalculator() {
  return (
    <div className='ki'>    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/triangle' element={ <Triangle/>}></Route>
          <Route path='/rectangle' element={<Rectangle/>}></Route>
          <Route path='/circle' element={<Circle/>}></Route>
          <Route path='/polygonal' element={<Polygonal/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
