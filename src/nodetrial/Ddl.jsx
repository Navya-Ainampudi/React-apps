import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Ddl() {
    const [nodeData,setData]=useState([])
    const [selectedCountry, setCountry]=useState('');
    const [selectedState,setState]=useState('');
    const [stateoptions,setstatesoptions]=useState([]);

    useEffect((e)=>{
        axios.get('http://localhost:8000/').then((res)=>{setData(res.data)})
    },[])

const countrychangeHandler=(e)=>{
 setCountry(e.target.value)

 const country = nodeData.find((countryObj) => countryObj.country === e.target.value);

 if(country.country===e.target.value){
    setstatesoptions(country.states)
 }
 
}

console.log(stateoptions)
 

    // console.log(nodeData.map(e=>{console.log(e.country)}))
  return (
    <div>
      <h1>hiii</h1>
    <select value={selectedCountry} onChange={countrychangeHandler}>
        <option>select country</option>
        {nodeData.map(e=><option key={e.country} value={e.country}>{e.country}</option>)}
    </select>
    {
        selectedCountry&&(
            <div>
                <select value={selectedState} onChange={e=>{setState(e.target.value)}}>
                    <option>select state</option>
            {stateoptions.map(e=> <option>{e}</option>)}
                </select>
            </div>
        )
    }

    <h1>{selectedCountry}</h1>
    <h2>{selectedState}</h2>
    </div>
  )
}
