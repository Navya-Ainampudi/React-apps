import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function MainApp() {
    const[search,setSearch]=useState("")
    const[data,setData]=useState([])

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(search)
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{response.json()})
        .then((data)=>{setData(data.response)})
        }
    
  return (
    <div>
      <form onSubmit={submitHandler}>
      <input type="text"  value={search} onChange={(e)=>{setSearch(e.target.value)}}></input><br/><br/>
      <input type='submit'></input>
      </form>
      {data.map((d)=>{<p>{d.category}</p>})}
      
    </div>
  )
  
}
