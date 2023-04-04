import React from 'react'

 function Count({text,count}) {
    console.log(`${count}`)
  return (
    <div>
    {count}:   {text}
    </div>
  )
}

export default React.memo(Count);