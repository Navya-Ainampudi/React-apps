import React from 'react'

function Propspractice(props) {

  return (
    <div>
      {props.name}
      <App tech="react"/>
      <App lang="javascript"/>
    <formdate dt />
    </div>
  )
}
function App(props){
    
    return(
        <div>
            {props.lang}
            {props.tech}
            
        </div>
    )
}
const formdate=(props)=>{
    const date= new Date() ;
    const dt= date.toDateString
 
 return(
    <div> 
        {props.dt}

    </div>
 )}

export default Propspractice;
