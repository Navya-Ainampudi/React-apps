import React, { useContext } from 'react'
import { contextName } from './CompA'

export default function CompB() {
    const consume=useContext(contextName)
  return (
    <div>
      <h1>compB</h1>
      <h3>{consume}</h3>
    </div>
  )
}
