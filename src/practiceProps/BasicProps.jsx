import React from 'react'
import ChildComp from './ChildComp'

export default function BasicProps() {
  return (
    <div>
        <h3> parent</h3>
        
        <ChildComp  name='navya' age='30' tech adress={{state:'ap',city:'hyd'}}/>
        <ChildComp altName='explore' size='300'
        image='https://images.pexels.com/photos/2423159/pexels-photo-2423159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
         <ChildComp altName='explore' size='400'
        image='https://images.unsplash.com/photo-1530063297084-9094b840c8e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'/>
         <ChildComp/>
     
    </div>
  )
}
