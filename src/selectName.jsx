import React, {useState} from "react";

function SelectName (){
    const [Name,setName] = useState('');
    const [age,setAge] = useState('')
    return (
        <div>
            <label> Enter name 
            <input value={Name} name="Name" onChange={event => setName(event.target.value)}></input>
            <p> entered value= {Name}</p>
            </label>
            <label>Enter age
            <input value={age} onChange={e => setAge(e.target.value)}></input>
        
            </label>
        </div>

    );

}
export default SelectName;