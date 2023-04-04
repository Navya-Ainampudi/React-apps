import React, {usState} from "react"
import { useState } from "react"
function Forms (){
    
    const [name,setName]=useState("");
    const[password,setPassword] = useState("");
    const[mail,setMail]= usState("");
    const[date,setDate]= useState("")
    const[gender,setGender]=useState("");
    const[location,setLocation]=useState("");
    // const[comment,setcomment]= useState("");


    const nameChange= (e)=> {setName(e.target.value)};
    const passwordChange = (e) => {setPassword(e.target.value)};
    const mailChange= (e)=> {setMail(e.target.value)};
    const dateChange= (e)=>{setDate(e.target.value)};
    const locationChange=(e)=>{setLocation(e.target.value)};
    // const textChange=(e)=>{setcomment(e.target.value)};
    const genderChange=(e)=>{setGender(e.target.value)}

    return(
        <div>
            <form>
                <label>User name: </label>
                <input type="text" placeholder="enter name" value={name} onChange={nameChange}></input>
                <label>Password:: </label>
                <input type="password" placeholder="enter password" value={password} onChange={passwordChange}></input>
                <label>User name: </label>
                <input type="email" placeholder="enter mail ID" value={mail} onChange={mailChange}></input>
                <label>date of birth: </label>
                <input type="date" placeholder="enter name" value={date} onChange={dateChange}></input>
                
                <label>Select Gender: </label>
                <input type="radio" value="male" checked={gender==="male"} onChange={genderChange}></input>
                <input type="radio" value="female" checked={gender==="female"}onChange={genderChange}></input>
                <input type="radio"value="others" checked={gender==="others"} onChange={genderChange}></input>

                <label>select location:</label>
                <select onChange={locationChange}>
                    <option value="Hyd"  checked={location==="hyd"}> Hyd</option>
                    <option value="vizag"checked={location==="vizag"} > vizag</option>
                    <option value="vij" checked={location==="vij"}> vij</option>
                </select>


                <label>Add comments: </label>
                {/* <textarea type="text" value={comment} onChange={textChange}></textarea> */}
                <input type="submit" value="submit"/>
            </form>

        </div>
    )
}export default Forms;