import './App.css';
// import Shop from './Shop';
// import Count from './count';
import Shoppinglist from './Shoppinglist';
import Store from './store';
import React,{createContext, useState} from 'react';


export const stores= createContext()


function App() {
  const[data,setData]=useState(
  [{brand:"abh"},{brand:"hdj"},{brand:"hdsd"}])
  // const [data, setData]= useState(0)
  return (
    // <stores.Provider value={[data,setData]}>
    // <div className="App">
    //   <Shop/>
    //   <Count/>
    //   <button onClick={()=>setData(data+1)}> click</button>
      
    // </div>
    // </stores.Provider>
    <stores.Provider value={[data,setData]}>
    <div className='App'>
      <Shoppinglist/>
      <Store/>

    </div>
    </stores.Provider>

  );
}

export default App;
