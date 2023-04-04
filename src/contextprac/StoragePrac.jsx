import React from 'react'

export default function StoragePrac() {
    localStorage.setItem("name",'navya')
    sessionStorage.setItem('name','krishna')
  return (
    <div>
        <h1>storage</h1>
        <h2>local:{localStorage.getItem('name')}</h2>
        <h3>session:{sessionStorage.getItem('name')}</h3>

      
    </div>
  )
}
