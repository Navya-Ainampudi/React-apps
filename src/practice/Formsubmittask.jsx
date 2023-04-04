import React,{useState} from "react";

function Formsubmittask() {
// const formData= [
//     {name:"navya",
//     age:29,
//     gender:"female"},
//      {name:"minnu",
//      age:2,
//      gender:"female"},
//      {name:"saketh",
//      age:4,
//      gender:"male"}];

     const[data,setData]=useState([{name:"navya",
         age:29,
         gender:"female"},
          {name:"minnu",
          age:2,
          gender:"female"},
          {name:"saketh",
          age:4,
          gender:"male"}]);
     const [name,setName]=useState("");
     const [age,setAge]=useState(0);
     const[gender,setgender]=useState("");
         
      const changeName=(e)=>{setName(e.target.value)} ;     
      const changeAge=(e)=>{setAge(e.target.value)} ; 
      const changeGender=(e)=>{setgender(e.target.value)};

      const submitHandler=(e)=>{
        e.preventDefault();
        const addData=data;
        addData.push({name:name,age:age,gender:gender})
        setData([...data])
      }

      const editHandler=(e)=>{
        const editData=data;
       let e1= editData[e].name;
        let e2=editData[e].age;
        let e3=editData[e].gender
    
        setName(e1)
        setAge(e2)
        setgender(e3)
        setData([...editData])
      }

      const deleteHandler=(e)=>{
        const deleteData=data;
        deleteData.splice(e,1)
        setData([...data])
      }

  return (
    
    <div class="container">
    
        <form onSubmit={submitHandler} >
            <label>Name</label>
            <input type= "text " name="name" placeholder="enter name" onChange={changeName}></input>
            <label>age</label>
            <input type= "text" name="age" placeholder="enter age" onChange={changeAge}></input>
            <label>gender</label>
            <input type= "text " name="gender" placeholder="enter gender" onChange={changeGender}></input>
            <button type="submit">Add data</button>
            
        </form>
             
  <h2> Table</h2>
             
  <table class="table table-bordered">
        <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Button</th>
      </tr>
    </thead>
    <tbody>
        {data.map((s,i)=>{return(<>
        <tr><td>{s.name}</td>
        <td>{s.age}</td>
        <td>{s.gender}</td>
        <td><button type="button" class="btn btn-success" onClick={()=>editHandler(i)}>Edit</button>
        <button type="button" class="btn btn-danger" onClick={()=>deleteHandler(i)}>Delete</button>
        </td>
            </tr></>)})}
        </tbody>
  </table>
  <add/>
</div>
  )
}



// function Add ({setData }){
// function SubmitIt(e){e.preventDefault();
//     const name = e.target.name.value;
//     const age = e.target.age.value;
//     const gender = e.target.gender.value;
//     const newAdd={
//         name:name,
//         age:age,
//         gender:gender,
//     }
// setData(data=>data.push(newAdd))
// }
//     return(
//         <form  onSubmit={SubmitIt}>
//             <label>Name</label>
//             <input type= "text " name="name" placeholder="enter name" onChange={Add}></input>
//             <label>age</label>
//             <input type= "text" name="age" placeholder="enter age" onChange={Add}></input>
//             <label>gender</label>
//             <input type= "text " name="gender" placeholder="enter gender" onChange={Add}></input>
//             <button type="submit">Add data</button>
            
//         </form>
//     )

export default Formsubmittask;
