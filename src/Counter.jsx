import React, {useState} from "react";

function Counter() {
    const [Count, setCount] =useState(0);
    return(
        <div>
            <p>clicking count is {Count}</p>
            <button onClick={() => setCount(Count+1)}>Click</button>
        </div>
    );

} 
export default Counter;