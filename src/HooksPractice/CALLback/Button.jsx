import React from 'react'

 function Button({click, val}) {
    console.log("button-"+ val)
  return (
    <div>
      <button onClick={click} >{val}</button><br></br>
    
    </div>
  )
}
export default  React.memo( Button);