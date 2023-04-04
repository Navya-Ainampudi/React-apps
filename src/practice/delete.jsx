[12-12 21:41] Navya Krishna AINAMPUDI
thank you anitha

[Thursday 14:19] Navya Krishna AINAMPUDI
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


[12:00] Anitha MEDIBOYINA
import { Button } from "bootstrap";
import React from "react";
import { useState } from "react";

function ApiData() {
    const [Name, setName] = useState("")
    const [Age, setAge] = useState("")
    // const [Gender, setGender] = useState("")
    const [Data, setData] = useState([])
    const submithandler = (e) => {
        e.preventDefault();
        let newData = Data
        newData.push({ Name: Name, Age: Age })
        setData([...newData])
        // setName("")
        // setAge("")

    }
    const ageHandler = (e) => {
        setAge(e.target.value)

    }
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    // const genderHandler = (e) => {
    //     setGender(e.target.value)
    // }
    const changeData = (i) => {
        let update = Data
        update[i].Name = Name;
        update[i].Age = Age
        setData([...update])

    }
    const deleteData = (i) => {

        let s = Data

        s.splice(i, 1)
        setData([...s])

    }
    return (
        <>
            <form >
                <input type="text" value={Name} onChange={nameHandler} /><br></br>
                <input type="number" value={Age} onChange={ageHandler} /><br></br>
                {/* <input type="radio" name="gender" value="female" checked onClick={genderHandler} />female<br></br>
                <input type="radio" name="gender" value="male" checked onclick={genderHandler} />male<br></br> */}
                <button onClick={submithandler}>add</button>

            </form>
            <div >

                <table className="table">

                    <thead>
                        <tr>

                            <th scope="col" >Name</th>
                            <th scope="col">Age</th>
                            {/* <th scope="col">Gender</th> */}
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>

                        {Data.map((s, i) => {
                            return (

                                <tr>

                                    <td > {s.Name}</td>
                                    <td>{s.Age}</td>
                                    {/* <td>{s.gender}</td> */}
                                    <td> <button type="button" className="btn btn-success" onClick={() => changeData(i)}>Edit</button></td>
                                    <td> <button type="button" className="btn btn-danger" onClick={() => deleteData(i)}>Delete</button></td>

                                </tr>

                            )

                        })
                        }

                    </tbody>
                </table>
            </div></>

    )
}
export default ApiData
