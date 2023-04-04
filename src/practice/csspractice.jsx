import React from 'react';
import styles from './Style.module.css';
import styled from 'styled-components';  


const sbutton= styled.button`
  border: 2px;
  background-color: #c02da8;
  text-align:center;
  padding: 2px;

`

const Csspractice = () => {
        
  return (
    <div>

      <h1 className={styles.headingStyle} >Webpage</h1>
      
      <p className={styles.paraStyle} >use show all locations code action from a issue</p>
      {/* <button>click</button> */}
      <sbutton>click</sbutton>
    </div>
  )
}

export default Csspractice;
