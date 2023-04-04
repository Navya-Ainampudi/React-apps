import React,{Component} from "react";
import Classforms from "./Classforms";
import "./form.css";

class Form extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         date:""
    //     }
    //     this.dateChange=this.dateChange.bind(this);
    // }
state={userInput:"",
        userPassword:"",
        phone:"",
        gender:"",
        date:"",
}
dateChange=(e)=>{this.setState({date:e.target.value})}
onChange = e =>{this.setState({userInput:e.target.value})}
passwordChange= e=> {this.setState({userPassword:e.target.value})}
genderChange= e =>{this.setState({gender:e.target.value})}
numberChange= e=> {this.setState({phone:e.target.value})}
// dateChange(e){
//     this.setState({date:e.target.value})
// }

submitHandler = e=> {e.preventDefault();
alert("user name: "+this.state.userInput + "\n" + "password: "+this.state.userPassword+ "\n"+
 "gender: "+this.state.gender+ "\n"+ "phone no: "+ this.state.phone +"\n" + "date:" + this.state.date+ "\n"+
 this.state.textArea)
// if(this.onChange.length<=5){
// alert("enter correct user name")
// }else 
// if(this.numberChange.length >10){
//     alert("enter valid number")
// }
}

    render(){
        // const{userInput}=this.state;
        // const{userPassword}=this.state
        return(
            <div className="container" >
                <h1>Forms</h1>
                <form onSubmit={this.submitHandler}>
                    <label>User Name: </label>
                    <input type="text" placeholder="entername" 
                    onChange={this.onChange}  ></input><br></br>
                    {this.state.userInput.length <3 ? <p>user name not valid</p>:null}
                    <label> Password: </label>
                    <input type="password"placeholder="enter Password"   onChange={this.passwordChange}></input><br/>
                    {this.state.userPassword.includes("@")||this.state.userPassword.includes("$")
                    ||this.state.userPassword.includes("!")?null:<p> password should includes char !,@,$</p>}
                    <label>Gender</label>
                        <input type="radio" name="gender" value ="male"onChange={this.genderChange}/> Male
                        <input type="radio" name="gender" value="female"onChange={this.genderChange}/>female
                        <input type="radio"name="gender" value="others"onChange={this.genderChange}/>others<br></br>

                    
                    <label>Phone Number:</label>
                    <input type="number" name="phone"onChange={this.numberChange}/><br></br>
                    {this.state.phone.length !==  10 ? <p>enter correct number</p>:null}
                    <label>Date: </label>
                    <input type="date" name="date"  onChange={this.dateChange}/><br>
                    </br><br></br>
                    <Classforms/><br></br>
                    <button type="submit"> Submit </button>
                 </form>

            </div>

        )
    }
} 
export default Form;