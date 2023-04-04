import React from 'react'

export default function User(props) {
    
  return (
    <div>
              <h3>props user:{props.name}</h3>
              {props.children}
    </div>
  )
}
