import React, { useRef, useState } from 'react'
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calender() {
    const[date,setDate]=useState(new Date())
    {console.log(date)}
    const ref= useRef('njgndjnkdhkf')
  return (
    <div>
      <h1>calendar</h1>
      <div inputRef={ref} >
      <Calendar  defaultView='month'  maxDate={new Date(2023,1,28)} minDate={new Date(2023,1,1)}
       value={date} onChange={(date)=>{setDate(date)}}></Calendar>
      {/* {date.length>0 ? <p>start:{date[0].toString()} {" "} end:{date[1].toString()}</p>:<p></p>} */}
      {date.toString()}
      
      </div>
    </div>
  )
}
