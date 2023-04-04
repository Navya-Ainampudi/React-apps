import React,{useState} from "react";
function EventClick (){
    const[name,setName]= useState("navya")
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={()=>setName("Navya krishna")}>click</button>
        </div>
    );
}
export  default EventClick;