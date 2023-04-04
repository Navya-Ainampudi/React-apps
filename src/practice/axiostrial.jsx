import {useEffect, useState} from 'react'
import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

 export default function Axiostrial() {
  const [post, setPost] = React.useState(null);


  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
        });
  }, []);
    
    function handleDelete(id,e){
     axios
     .delete(`${baseURL}/${id}`).then((response)=>{
          alert("deleted")
     })
  }
  function createPost() {
     axios
       .post(baseURL, {
         title: "Hello",
         body: "This is a new post."
       })
       .then((response) => {
         setPost(response.data);
       });
   }
  function updatepost(id,e){
     axios
     .put(`${baseURL}/${id}`, {
        title: "Mouritech",
        body: "This is an updated post."
      })
      .then((response) => {
          alert('updated')
        setPost(response.data);
      });
  }
  function deletepost(id,e){
     axios
     .put(`${baseURL}/${id}`)
      .then((response) => {
          alert("post deleted")
          setPost(null);
        });
  }
  function receivedpost(id,e){
     axios
     .get(`${baseURL}/${id,e}`)
     .then((response) =>{
          alert("post received")  
     })
  }
  if (!post) return "No post!"
  
  return (
    <div>
      
      <table>
          <tr>
               <th>id</th>
               <th>title</th>
               <th>body</th>
               <th>actions</th>
          </tr>
          {    post.map(x=>{
                    return(
                         <tr key={x.id}>
                              <td>{x.id}</td>
                              <td>{x.title}</td>
                              <td>{x.body}</td>
                    <td>
                         {/* <button onClick={e=> receivedpost(x.id,e)}>Received </button>  */}
                         <button onClick={e=> updatepost(x.id,e)}>Update </button>
                         <button onClick={e=> deletepost(x.id,e)}>Delete </button> 
                    </td>
                         </tr>
                    )
               })
          }
      </table>
    </div>
  );
}