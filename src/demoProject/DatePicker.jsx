import React,{useEffect,useState} from 'react';
import Calendar from 'react-calendar';

export default function DatePicker() {
    const[date,setDate]=useState()
    // useEffect(()=>{
    //     const today=new Date(),
    //     day=today.getDate(),
    //     month=today.getMonth()+1,
    //     year=today.getFullYear()
    //     console.log(day,month,year)
    //     setDate([day,month,year].join("-"))
    // })
  return (
    <div>
      <h1>selected date:{date}</h1>
      <input type='date' maxDate={new Date()} onChange={(e)=>{setDate(e.target.value)}}></input>
      
    </div>
  )
}
