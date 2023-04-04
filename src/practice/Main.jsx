import React from "react";

// function Home (props){
//     const name = props.name;
//     const tech = props.tech;
//     return(
//         <div>
//             <h1>Webpage</h1>
//             <p> My name is {name}.</p>
//             <p> {name} was in {tech}.</p>
//         </div>
//     );
// } using destructuring
function Home({name,tech}){
    return(
        <div>
            <p>
                My name is {name}<br></br>
                {name} was in {tech}
            </p>
        </div>
    );
}
Home.defaultProps= { 
    name : "navya",
    tech : "react"
}
export default Home;