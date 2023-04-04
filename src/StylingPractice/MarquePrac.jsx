import React from "react";
import Marquee from "react-fast-marquee";
function MarquePrac(){

    return(
        <div>
         
         <Marquee speed={50}  pauseOnHover={true}  pauseOnClick={true} gradientWidth={500} gradientColor={[209,25,0]}>
         <h1>React</h1>

          
         </Marquee>
        </div>
    )
}
export default MarquePrac;