import React from 'react'

export default function Header(props) {
    const title=props.title;
  return (
    <div>
      {title}
      <p>{props.name}</p>
    </div>
  )
}
