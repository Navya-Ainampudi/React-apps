import React from 'react';

const Hello = (props) => {
  /* For receiving props we have to mention it in the parenthesis of this component
     In 'props.name' name is the property we are receiving from parent component
     props.children show body which we are receiving from parent component */
  return (
    <div>
      My name is {props.name}. I'm {props.children}. 
    </div>
  );
};

export default Hello;
