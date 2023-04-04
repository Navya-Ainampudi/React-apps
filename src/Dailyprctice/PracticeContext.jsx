import React,{createContext} from 'react';
import ComponentA from './ComponentA';

export const contextName = React.createContext('')

export default function PracticeContext() {
  return (
    <div>
      <contextName.Provider>
        <ComponentA/>
      </contextName.Provider>
    </div>
  )
}
