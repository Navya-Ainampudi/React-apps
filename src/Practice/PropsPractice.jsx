import React from 'react'

export default function PropsPractice(props) {
  return (
    <div>
      hi {props.name} {props.age} {props.rule}
      <p>{props.info}</p>
    </div>
  )
}
