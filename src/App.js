
import './App.css';
import DatePicker from './demoProject/DatePicker';
import Home from './demoProject/Home';
import Header from './demoProject/Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Create from './demoProject/Create';
import Details from './demoProject/Details';
import Edit from './demoProject/Edit';
import { useState } from 'react';
import  { Calendar } from 'react-calendar'
import AddInput from './demoProject/AddInput';
import Calender from './demoProject/Calender';
import CallbackPractice from './HooksPractice/CallbackPractice';
import Memopractice from './HooksPractice/Memopractice';
import Book from './Book';
import HomePage from './routingPractice/HomePage';
import Reducer from './HooksPractice/Reducer';
import Memoprac from './HooksPractice/Memoprac';
import Contextprac from './HooksPractice/usecontext/Contextprac';
import MarquePrac from './StylingPractice/MarquePrac';
import UsestatePrac from './HooksPractice/UsestatePrac';
import LiftupState from './HooksPractice/LiftupState';
import PracReducer from './HooksPractice/PracReducer';
import MemoEval from './HooksPractice/MemoEval';
import AxiosEval from './HooksPractice/AxiosEval';
import Axios from './Axios';
import Sample from './HooksPractice/Sample';
import Pagination from './HooksPractice/Pagination';
import Praccontext from './contextprac/Praccontext';
import StoragePrac from './contextprac/StoragePrac';
import Evaluation from './Evaluation';
import Effect from './Effect';
import Formseval from './Formseval';
import Crud from './StylingPractice/Crud';
import UseIncrement from './HooksPractice/CustomHook';



function App() {
  const data= "navya krishna"
  const[color,setColor]=useState('')
  const[date,setDate]=useState(new Date())
  const styleobj={backgroundColor:color,
    // backgroundImage: `url("https://images.all-free-download.com/images/graphiclarge/golden_background_311002.jpg")`
  }
  const time= UseIncrement('')
  return (
    <div className='App'>
    <div className="container" style={styleobj} >
      <form  >
        <input type='text' placeholder='enter bg color' value={color} onChange={(e)=>{setColor(e.target.value)}}  ></input>
      </form>
      <div>
        <calendar value={date} onChange={setDate} ></calendar>
      </div>
      <MarquePrac/>
      
      {/* <Home/> */}
      {/* <h1>crud operations</h1> */}
      {/* <DatePicker/> */}
      {/* <Header title="practice react" name={data}/> */}
      {/* <AddInput/> */}
      {/* <Calender/> */}
         {/* <Memopractice/> */}
      {/* <Book/> */}
      {/* <Reducer/>
      <Memoprac/>
         <CallbackPractice/>
         <Contextprac/>  */}
        {/* <UsestatePrac/> */}
        {/* <LiftupState/> */}
        {/* <PracReducer/>
        <MemoEval/>
        <AxiosEval/> */}
        {/* <Axios/> */}
        {/* <Sample/> */}
        {/* <Pagination/> */}
        {/* <Praccontext/> */}
        {/* <StoragePrac/> */}
        {/* <Evaluation/> */}
        {/* <Effect/> */}
        {/* <Formseval/> */}
        {/* <Crud/> */}
        {/* <UseIncrement/> */}
        <h1>time:{time}</h1>

       {/* <HomePage/> 
     <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/employee/create' element={<Create/>}/>
    <Route path='/employee/details/:id' element={<Details/>}/>
    <Route path='/employee/edit/:id' element={<Edit/>}/>
    <Route/>
  </Routes>
  </BrowserRouter>  */}
    </div>
    </div>
  );
  
}

export default App;
