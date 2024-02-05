import { Delete, Edit } from '@mui/icons-material'
import { Button, FormControl, Input, InputLabel } from '@mui/material'
import React, { useState } from 'react'

export default function Trial1() {
    const [text,setText]=useState('')
    const [addedtext,setAdded]=useState([])
    const [editindex,seteditindex]=useState(null) 

    const textHandler=(e)=>{setText(e.target.value)}
    const submitHandler=(e)=>{
      e.preventDefault()
      if (editindex != null){
        const editedtext=[...addedtext]
        editedtext[editindex]=text
        setAdded(editedtext)
        seteditindex(null)
      }else{
        setAdded([...addedtext,text])
      }
   setText('')
    }
     const edithandler=(i)=>{
       seteditindex(i)
       setText(addedtext[i])
     }
    const deletehandler=(i)=>{
        const deltext=[...addedtext]
     deltext.splice(i,1)
     setAdded(deltext)
    }
   
  return (
    <div>
    <form onSubmit={submitHandler}>
      <Input autoFocus={true} placeholder='enter text here' value={text} onChange={textHandler}></Input>
      <Button color='secondary' variant='outlined' type='submit' >Add</Button>
      </form>
      {addedtext.map((e,i)=><li key={i}>
      {e} 
      <Button onClick={()=>deletehandler(i)}><Delete/></Button>
      <Button onClick={()=>edithandler(i)}><Edit/></Button>
      </li>)}
     
    </div>
  )
}
