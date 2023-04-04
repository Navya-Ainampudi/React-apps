import React from 'react'

export default function Linklist() {
    const arrLink=['https://www.w3schools.com/','https://www.javatpoint.com/','https://stackblitz.com/edit/js-6fv3x8?file=index.js']
  return (
    <div>
        list
        {arrLink.map((lin)=><li>{lin}</li>)}
        

    </div>
  )
}
