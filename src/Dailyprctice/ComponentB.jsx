import React from 'react'
import { userContext } from './Usecontext'

function ComponentB() {
  return (
    <div>
        <userContext.Consumer>
            {value=><div>{value}</div>}
        </userContext.Consumer>
      
    </div>
  )
}

export default ComponentB
