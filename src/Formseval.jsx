import React, { useState } from 'react'

export default function Formseval() {
  const[name,setName]=useState('')
  const[radio,setRadio]= useState('')
  const radioHandler=(e)=>{setRadio(e.target.value)}

  const [dropDown,setDropdown]= useState([])
   const selectHandler=(e)=>{setDropdown(e.target.value)}
   const[text,setText]=useState("")

  const submitHandler=(e)=>{
    e.preventDefault()
    alert(name+ "\n"+radio+ "\n"+dropDown+ '\n'+text)
    if(radio===""){
      alert(`choose gender`)
    }
  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={submitHandler}>
        <input type= 'text' placeholder='name' value={name} required onChange={(e)=>{setName(e.target.value)}}></input>
        {name.length<=5?<p>enter correct user name</p>:null}
         <br></br>
        <label >gender
        <input type='radio' name='gender' value='female' checked={radio==='female'} id='female' onChange={radioHandler}/>female
        <input type='radio' name='gender' value='male' checked={radio==='male'}id='male'onChange={radioHandler}/>male
        <input type='radio' name='gender' value='other'checked={radio==='other'} id='other'onChange={radioHandler}/>others
        </label><br/>
        <label> select background color
          <select onChange={selectHandler} required>
            <option value='blue' checked={dropDown==='blue'} >blue</option>
            <option value='black'  checked={dropDown==='black'} >black</option>
            <option value='red' checked={dropDown==='red'} >red</option>
            <option value='green' checked={dropDown==='green'} >green</option>
          </select>

        </label><br/>
        <textarea value={text} required onChange={(e)=>{setText(e.target.value)}}></textarea><br/>


        <button>submit</button>
        
      </form>
    </div>
  )
}
