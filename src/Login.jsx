import React from "react";
function User (){
    return(
<h3>welcome</h3>
    );
}
function Guest (){
    return(
        <h3>please login</h3>
    )
}
function Login (props){
const isLogIn= props.isLogIn 
if (isLogIn){
    return<User/>;
}
return<Guest/>
}
export default Login;