import React, { useEffect, useMemo, useState } from 'react'

const factorial=(num)=>{
  let ans=1
  for (let i=0; i<=num; i--){
    console.log('slow')
  //  ans=ans*i;
  }
 return ans
}
export default function Memopractice() {
    const[num,setNum]=useState(0);
    const[theme,setTheme]=useState(false);
    const number= useMemo(()=> factorial(num),[num]) ;
    const themeHandler= useMemo(()=>{ return  {color: theme? 'red': 'black'}},[theme]);
    useEffect(()=>{console.log(theme)},[themeHandler])
  return (
    <div>
      <input type="number" name="number" placeholder='number' value={num} onChange={(e)=>{setNum(Number(e.target.value))}}></input>
      {/* {console.log(num)} */}
      <br></br><br></br>
      <button onClick={()=>{setTheme(!theme)}}>select theme</button>
      {/* {console.log('theme changed')} */}
      <h1 style={themeHandler}>factorial number:{number}</h1>
    
    </div>
  )
}
