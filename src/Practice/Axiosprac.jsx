import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './styleAxios.css';
export default function Axiosprac() {
    const[Data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((response)=>{setData(response.data)})
    },[])
    // function createPost(){
    //     axios.post('https://fakestoreapi.com/products',{category:"new"}).then((response)=>{setData(response.data)})
    // }
  
  return (
    <div className='container-fluid'>
      <div class='row'>      
      <h1>axios</h1>
      {Data.map((s)=>{return(
        <div class="col-2">
         <div class='card' >
          <div class='card-header'>
          <li>{s.category}</li>
          </div>

          <div class='card-body'>
         <img src={s.image} alt="product"></img>
         <li>price-{s.price}</li>
         </div>
         </div>
         </div>  
        )})}
          
      {/* <button onClick={createPost}>create post</button> */}
      </div>
      </div>   
  )
}
