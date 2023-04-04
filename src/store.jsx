import React from 'react';
import { useContext } from 'react';
import { stores } from './App';

const Store = () => {
  const[data,setData]=useContext(stores)
  return (
    <div>
      <h1>count:{data.length}</h1>
    </div>
  )
}

export default Store;
