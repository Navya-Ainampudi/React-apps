import React, { useEffect, useState } from 'react'
import Authentication from './Authentication'
import {getAuth, onAuthStateChanged } from 'firebase/auth'
import FormFirbase from './FormFirbase'
export default function AuthHome() {
    const [check,setCheck]= useState(null)
    useEffect(()=>{
        const auth=getAuth()
       onAuthStateChanged(auth,(user)=>{
       if(user){
        setCheck(
            user.email
        )
       } else{
        setCheck(null)
       }

        
       })
    },[check])

  return (
    <div>
        {console.log(check)}
        {check?<FormFirbase/>:<Authentication/>}
      {/* <Authentication/> */}
    </div>
  )
}
