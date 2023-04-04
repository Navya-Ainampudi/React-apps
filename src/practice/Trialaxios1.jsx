import React,{useEffect,useState} from "react";
import axios from "axios";


const Axios2 = () => {
     const [details,setDetails]=useState([])
function getDetails(){
 axios.get('http://localhost:3000/posts')
 .then((response)=>{
 setDetails(response.data)
 })
 }
useEffect(()=>{
getDetails()
},[])
 console.log(details)
 function update(id){
    axios.put(`${"http://localhost:3000/posts"}/${id}`).then(()=>{ alert("post updated");getDetails();})
 }

function deletePost(id) {
 axios.delete(`${'http://localhost:3000/posts'}/${id}`).then(() => {
 alert("Post deleted!");
getDetails(); }); }
 return (
<div>
<button>ADD</button> 
 <table class="table">
 <thead>
<tr>
 <th scope="col">Id</th>
 <th scope="col">username</th>
 <th scope="col">name</th>
 <th scope="col">email</th>
 <th scope="col">city</th>
 <th scope="col">button</th>
 
</tr>
</thead>

<tbody>
{
 details.map((val,i)=>{
 return (<>
 <tr>
 <td>{val.id}</td>
 <td>{val.username}</td>
 <td>{val.name}</td>
 <td>{val.email}</td>
 <td>{val.city}</td>
 <td><button className='btn btn-danger' onClick={()=>deletePost(val.id)}>Delete</button></td>
 <td><button className='btn btn' onClick={()=>update(val.id)}>Update</button></td>
 </tr>
 </>)
 })
}
 </tbody>
</table>
 </div>
 )
}

export default Axios2

