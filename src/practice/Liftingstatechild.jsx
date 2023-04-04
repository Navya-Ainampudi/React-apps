import React,{useState} from 'react'

const Liftingstatechild = (props) => {

    const[state,setState]= useState("")
    const changeHandler=(e)=>{setState(e.target.value)}
    const submitHandler=(e)=>{e.preventDefault();
    props.onSubmit(state)
    }
  return (
    <div>
      child
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="enter state" value={state} onChange={changeHandler} ></input>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Liftingstatechild
