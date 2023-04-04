import React, { useState } from "react";
import Winner from "./App";
function Person(props){
return <li style={{color : (props.selectedIndex == props.index) ? "green" : "red"}}>name of person in the list is { props.name }</li>
}
function People (){
    const persons=['navya','anitha','geetha','nav'];
    const [selectedIndex, setClickedIndex]= useState(-1);

    function clickHandler(){
        let newIndex = selectedIndex+1;
        if(newIndex > persons.length - 1){
            newIndex = 0;
        }
        setClickedIndex(newIndex);
    }
    return(
      <>  <ol>
            {persons.map((p,i)=> <Person name ={p} index={i} selectedIndex={selectedIndex}/>)}
        </ol>
        <button  onClick={clickHandler}>click</button>
    </>
    );
    
    } 

    export default People;