import React, {useState} from "react";
import "./form.css";
<form action="" className="css"></form>
function Forms (){
    const[data,setData]= useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        gender:''
    });
    const [comments,setcomments]= useState("");
    
    const{username,email,password,confirmPassword,gender}=data;
    const changehandler= e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const Texthandler = e =>{
        setcomments(e.target.value)
    }
    const [technology, setTechnology]= useState("");
    const Selecthandler = e => {
        setTechnology(e.target.value)
    }
    const [check, setCheck]= useState("")
    const Boxhandler = e =>{
        setCheck(e.target.value)
    }
    const Submithandler= e=>{
        e.preventDefault();
        console.log(data)
        // alert({data})
        // alert({technology})
        alert("username: "+ username+ "\n" +
        "email: " +email+ "\n" +
        "password: "+password + "\n"+
        "reentered password: "+confirmPassword+ "\n"+
        "technology: "+technology+ "\n"
        +"text area content: "+comments+ "\n"+
        "selected gender :"+gender + "\n"+ "checkbox:"+ check);
        if (username.length<=3){
            alert("username length not matched")
        } 
        // else if(password!==confirmPassword){
        //     alert("passwords not matching")
        // }  
                
    }
    return(
        <div className="container">
            <h1>Registration Forms</h1>
            <form onSubmit={Submithandler} className="form">
                <label>Username</label>
                <input type= "text" name="username" placeholder="enter name" value={username} onChange={changehandler }required/><br/>
                <label>Email ID</label>
                <input type="email" name="email"placeholder="email" value={email} onChange={changehandler} required/><br/>
                <label>Password</label>
                <input type="password" name="password"placeholder="enter password" value={password} onChange={changehandler}required/><br/>
                {(password.includes("@")||password.includes("!")||password.includes("&"))&&(password.includes(1)||password.includes(2)||
                password.includes(3)||password.includes(4)||password.includes(5)||password.includes(6)||password.includes(7)||
                password.includes(8)||password.includes(9))? null:<p>password include any symbol @, !,& and numbers</p>}
                <label>confirmPassword</label>
                <input type="password" name="confirmPassword"placeholder="reenter password" value={confirmPassword} onChange={changehandler}required/><br/>
               {password!==confirmPassword?<p>passwords not matching</p>:null}
               <br/>
                <label>select your technology:
                    <select onChange={Selecthandler} required>  
                        <option value="react"  checked={technology==="react"}>react</option>
                        <option value="angular"checked={technology==="angular"} >angular</option>
                        <option value="java" checked={technology==="java"} >java</option>
                        <option value="python"checked={technology==="python"}>python</option>
                    </select>
                </label><br/><br/>
                <label> Add comments:</label>
                    <textarea value={comments} onChange={Texthandler}required></textarea><br/>
                
                <label>Select gender:
                    <input type="radio"  name="gender" value="Male" checked={gender === "Male"} onChange={changehandler}/> Male
                    <input type="radio"  name="gender" value="Female" checked={gender === "Female"} onChange={changehandler}/> Female
                    <input type="radio"  name="gender"value="Others" checked={gender === "Others"} onChange={changehandler}/> Others
                </label><br/>
                
                <label>select location</label>
                <input type= "checkbox" value="vizag" checked={check==="vizag"}  onChange={Boxhandler}/> Vizag
                <input type= "checkbox" value="Hyd" checked={check ==="Hyd"} onChange={Boxhandler}/>Hyd
                <br/>
                <input type="submit" name="submit"/>
            </form>
        </div>
    )
} export default Forms;