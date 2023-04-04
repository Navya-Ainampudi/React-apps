import React from 'react'

export default function ChildButton({click}) {
  return (
    <div>
      <button onClick={click}>child</button>
    </div>
  )
}
