import React, {useContext,useState} from 'react'
import { stores } from './App';


const Shoppinglist = () => {
    const[data,setData]=useContext(stores)
    const[name,setName]=useState("")
    const submitHandler =e=>{e.preventDefault();
        setData([...data,{brand:name}])
    }

  return (
    <div>
      {data.map(i=> <h3>brand:{i.brand}</h3> )}
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="enter brand name" onChange={(e)=>setName(e.target.value)}></input>
        <input type="submit" value="Add"/>
        <input type="button" value="delete" onClick={(e)=>(e.target.value)}></input>

      </form>

    </div>
  )
}
export default Shoppinglist
