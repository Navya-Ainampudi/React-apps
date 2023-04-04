import React,{useContext} from 'react';
import { stores } from './App';

function Shop() {
    const[data,setData]= useContext(stores)
  return (
    <div>
      componenet A for shop
      {data}
    </div>
  )
}

export default Shop;
