import React, {useContext} from "react";
import { stores } from "./App";
function Count() {
    const[data,setData]= useContext(stores)
  return (
    <div className="">
    hello navya for count
    navaya
    {data}
    </div>
  )
}

export default Count;
