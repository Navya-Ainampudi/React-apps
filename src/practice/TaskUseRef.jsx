import React, {useRef, useEffect} from 'react'

function TaskUseRef() {
  const data = useRef('');
  const newdata=useRef("");
  const addeddata=useRef('');
  const submitHandler= (e)=>{e.preventDefault();
  console.log(data.current.value);
  // data.current.value="hello"
  console.log(newdata.current.value);
   addeddata.current.value=data.current.value+newdata.current.value
   console.log(addeddata.current.value);
  };
  // useEffect(()=>{data.current.focus()},[])


  return (
    <div>
      <form onSubmit={submitHandler}>
        <input ref={data} type="text" placeholder="enter name "></input>
        <input ref={newdata} type="text" placeholder='enter input' ></input>
        <input type="text" ref={addeddata}></input>
        <input type="submit" ></input>
      </form>
    </div>
  )
}

export default TaskUseRef
