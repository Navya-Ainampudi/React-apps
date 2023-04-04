import axios from "axios";
import React,{useEffect, useState} from 'react'

const baseURL='https://jsonplaceholder.typicode.com/posts';

function Axiospractice() {
    const[data,setData]=useState([]);
  

    useEffect(()=>{
axios.get(`${baseURL}`).then(Response=>setData(Response.data),(console.log(data)))
    },[])

    function CreatePost (){
        axios.post(baseURL,{title:"hello", body:"new post"}).then(Response=>{setData(Response.data)});
    }

    function updatePost(){
        axios.put(`${baseURL}/2`,{post:"hi", newpost:"updated post"}).then(Response=>{setData(Response.data)});
    };
    
    function deletePost (){
        axios.delete(`${baseURL}/1`).then(Response=>{setData(null)})
    }
    if (!data)return "no posts"
  return (
    <div>

        
      {data.map((i)=><li key={i.id}>{i.title} </li>)}
      
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <h1>{data.post}</h1>
      <p>{data.newpost}</p>
      <button onClick={CreatePost}>create post</button>
      <button onClick={updatePost } >update post</button>
      <button onClick={deletePost}>delete post</button>
    </div>
  )
}
export default Axiospractice;
