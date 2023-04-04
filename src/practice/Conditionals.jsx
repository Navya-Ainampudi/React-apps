function Userlogin (){
    return <h2>welocome</h2>
}
function Guestlogin(){
    return <h2>plz signup</h2>
}
function Greeting1 (props){
    const isLogedin= props.isLogedin;
if(isLogedin){
return <Userlogin/>
}
    return <Guestlogin/>
}
export default Greeting1;
    
