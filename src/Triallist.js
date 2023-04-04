import React from "react";
import Winner from "./App";

function Trial(){
    const employee= ['navya','anitha'];
    return(
        <div>
        {employee.length>0 && (
            <ol>
            <h2>employees list:</h2>
            <ol>
            {employee.map((emp)=><li>{emp}</li>)}
            </ol>
            </ol>
        )}
        </div>
    )
}export default Trial;
