import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Bdaydetails() {
    const [bdaydetails,setdetails]=useState([])
    const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedDOB, setEditedDOB] = useState('');
//    const history= useNavigate()
  
    useEffect(()=>{
        axios.get('  http://localhost:3011/data').then(res=>setdetails(res.data))
      },[])

    //   const delete=()=>{}
      const deletebday = (id) => {
        // const updatedTodayBday = todayBday.filter((s) => s.id !== id);
        // setTodayBday(updatedTodayBday);
        axios.delete(` http://localhost:3011/data/${id}`).then(
            setdetails(bdaydetails.filter(s=>s.id!==id))
        )
      };
      const editbday=(id,name,mail,dob)=>{
        setEditingId(id)
        setEditedName(name)
        setEditedEmail(mail)
        setEditedDOB(dob)

      }
      
    const saveEdit=(id)=>{
      axios.put(` http://localhost:3011/data/${id}`, {Name:editedName,Email:editedEmail,DOB:editedDOB})
      .then(res=> { setEditingId(null)
        setdetails(bdaydetails.map(person => (person.id === id ? { ...person, Name: editedName, Email: editedEmail, DOB: editedDOB } : person)));
      
    })
    }
  return (
    <div style={{backgroundColor:'paleturquoise',height:'100vh',width:'100vw'}}>
     <Link style={{position:'fixed', left:'1200px'}} to={'/'} > Home</Link>
      <h1>Birthday Details</h1>
      
      <div className='mt-4'>
           <table className='table table-info'>
           <thead style={{}}>
            <tr>
                <th>ID</th>
                <th>Person Name</th>
                <th>Email Id</th>
                <th>Birth Date</th>
                <th>Action</th>
               
            </tr>
           </thead>
           <tbody>
           {bdaydetails.map(person=>
           <tr key={person.id}>
           <td>{person.id}</td>
            <td>
            {editingId === person.id?
             <input type='text' value={editedName} onChange={(e)=>setEditedName(e.target.value)} ></input>
             :<p>{person.Name}</p>}
            </td>
            <td> {editingId === person.id?
             <input type='email' value={editedEmail} onChange={(e)=>setEditedEmail(e.target.value)} ></input>
             :<p>{person.Email}</p>}</td>
            <td> {editingId === person.id?
             <input type='text' value={editedDOB} onChange={(e)=>setEditedDOB(e.target.value)} ></input>
             :<p>{person.DOB}</p>}
            </td>
            <td>
            
                              {editingId === person.id ? (
                    <>
                      <button className='btn btn-success' onClick={() => saveEdit(person.id)}>Save</button>
                      <button className='btn btn-danger' onClick={() => setEditingId(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className='btn btn-danger sm' onClick={() => deletebday(person.id)}>Delete</button>
                      <button className='btn btn-success' onClick={() => editbday(person.id, person.Name, person.Email, person.DOB)}>Edit</button>
                    </>
                  )}

            </td>
           </tr>
           )}
           </tbody>
           </table>
      </div>
    </div>
  )
}
