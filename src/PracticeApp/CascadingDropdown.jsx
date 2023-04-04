import React, { useState } from 'react'

export default function CascadingDropdown() {
    const countries=[{
        countryname:'India',
        states:['ap','telagana']
    },
    {  
        countryname:'USA',
        states:['CA','texas']

    }
            
    ];
   const [country,setCountry]=useState('')
   const [state,setState]=useState([]) 

    const countryHandler=(e)=>{
      setCountry(e.target.value)
          setState(countries.find((s)=>s.countryname===e.target.value).states)
    
    }

    const[selectstate,setSelectstate]=useState('')
    const stateHandler=(e)=>{
      setSelectstate(e.target.value)
    }
   console.log(selectstate)
  return (
    <div>
      <h1>CascadingDropdown</h1>
      <h2>country:      {country}</h2>
      <h3> selected state :{selectstate}</h3>

      <select onChange={countryHandler}>
        <option>countries</option>
        {countries.map((s,i)=><option key={i} >{s.countryname}</option> )}
      </select>
      <select onChange={stateHandler}>
        <option>state</option>
        {state.map((s)=> <option>{s}</option>)}
      </select>
    </div>
  )
}
