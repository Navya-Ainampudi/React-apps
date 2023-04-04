import React from 'react'


const Button = (props) => {
    console.log(`${props.value}`)
  return (
    <div>
        <button onClick={props.click}>{props.value}</button>
      
    </div>
  )
}

export default (Button);
