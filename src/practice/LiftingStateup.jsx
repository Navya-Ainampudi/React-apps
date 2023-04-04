import React from 'react'
import Liftingstatechild from './Liftingstatechild';

const LiftingStateup = () => {
    const getState=(state)=>{
        alert(state)
    }
    
  return (
    <div>
    
   <Liftingstatechild onSubmit={getState}/>
      
    </div>
  )
}

export default LiftingStateup;
