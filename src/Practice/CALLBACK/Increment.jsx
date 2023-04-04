import React from 'react'

const Increment = ({text,num}) => {
    console.log(`${text}rendered`)
  return (
  
    <div>
      {text}:{num}
    </div>
  )
}

export default React.memo(Increment);
