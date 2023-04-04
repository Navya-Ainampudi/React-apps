import React, { useContext } from 'react';
import { newContext } from './Contextprac';

export default function ContextCompA() {
    const contextA=useContext(newContext)
  return (
    <div>
      conent from A
      <h3>{`hello ${contextA}- context ok`}</h3>
      
    </div>
  )
}
