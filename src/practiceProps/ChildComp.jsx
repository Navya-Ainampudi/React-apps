import React from 'react'

export default function ChildComp(props,{tech=['ui','react']}) {
   
  return (
    <div>
      <h4>child</h4>
      <h5>{props.name} age is {props.age}<br/> <span>tech:{tech.map((s,id)=><p key={id}>{s}</p>)}</span></h5>
      {/* <h5>adress is {props.adress.city} & {props.adress.state}</h5> */}
      <img  src={props.image}
      alt={props.altName}
      height={props.size}
      width={props.size}
      ></img>
      
    </div>
  )
}

