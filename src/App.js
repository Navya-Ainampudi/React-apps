
import { useState } from 'react';
import './App.css';
import EffectHook from './HOOKS/EffectHook';
import MemoPractice from './HOOKS/MemoPractice';
import ErrorBoundary from './PracticeApp/ErrorBoundary';
import GoogleMaps from './PracticeApp/GoogleMaps';
import PracticeApp from './PracticeApp/PracticeApp';
import BasicProps from './practiceProps/BasicProps';
import Comp3 from './practiceProps/Comp3';
import FuncProps from './practiceProps/FuncProps';
import Parent from './practiceProps/Parent';
import User from './practiceProps/User';
import UserList from './practiceProps/UserList';
import UserProp from './practiceProps/UserProp';
import CompA from './HOOKS/Context/CompA';
import Toogle from './PracticeApp/Toogle';
import ReducerPrac from './HOOKS/ReducerPrac';
import FormFirbase from './PracticeApp/FormFirbase';
import CascadingDropdown from './PracticeApp/CascadingDropdown';
import FormTable from './PracticeApp/FormTable';
import AreaCalculator from './PracticeApp/AreaCalculator';
import PracCalender from './kishore/PracCalender';
import Authentication from './PracticeApp/Authentication';
import AuthHome from './PracticeApp/AuthHome';

function App() {
  
  return (
    <div className="App">
      {/* <FuncProps/> */}
      {/* <UserProp/> */}
      {/* <UserList/> */}
      {/* <PracticeApp/> 
        <Comp3 name2={{age:22,name1:"Kishore"}}/> */}
      
      {/* <BasicProps/> */}
      {/* <MemoPractice/> */}
      {/* <EffectHook/> */}
      {/* <ErrorBoundary/> */}
      {/* <GoogleMaps/> */}
      {/* <ReducerPrac/> */}
       {/* <Parent/>  */}
       {/* <CompA/> */}
       {/* <Toogle/> */}
       {/* <FormFirbase/> */}
       {/* <CascadingDropdown/> */}
       {/* <FormTable/> */}
       {/* <AreaCalculator/> */}
       {/* <PracCalender/> */}
       <AuthHome/>
    </div>
  );
}

export default App;
