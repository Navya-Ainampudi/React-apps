import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BirthdayForm = () => {
    const[name,setname]=useState('')
  const [bday,setBday]=useState()
  const [mail,setMail]=useState('')
  const [bdaydetails,setdetails]=useState([])
  const[todayBday,setTodayBday]=useState([])
  const [toogle,setToogle]=useState(false)
  const date=new Date()
  //  console.log(bday + "=====")
 
  const today=date.getFullYear()+"-"+String(date.getMonth() + 1).padStart(2, '0')+"-"+String(date.getDate()).padStart(2, '0');

  // console.log(today)
  
  const submitHanddler=(e)=>{
    e.preventDefault()
    setBday('')
    setname('')
    setMail('')
    console.log('submitted')
    axios.post( ' http://localhost:3011/data',{Name:name,DOB:bday,Email:mail})
  }
  useEffect(()=>{
    axios.get('  http://localhost:3011/data').then(res=>setdetails(res.data))
  },[])
  const todayBdaylist=()=>{
  const foundBday=bdaydetails.filter(s=>s.DOB==today)
  setTodayBday(foundBday)
  }
 
  const addbday=()=>{
 setToogle(true)
  }
  const deleteBday=(id)=>{
     setTodayBday(todayBday.filter(s=>(s.id !== id)))
  }
  return (
    <div className='container-fluid'>
    <button onClick={addbday} className='btn btn-info mt-5'>Add BirthdayDetails</button>
    {
      toogle?
      <div className='col-4 offset-4  p-3 border border-dark rounded mt-4 Bday'>
     <h1>Add Birthday Details</h1>
      <form onSubmit={submitHanddler}>
        <h5 className='form-label' style={{textAlign:'left'}}>Name</h5>
        <input required type='input'placeholder='Enter Name' className='form-control 'value={name} onChange={e=>setname(e.target.value)}></input>
        <h5 className='form-label' style={{textAlign:'left'}}>Email Id</h5>
        <input required type='email' placeholder='Enter Email Id' className='form-control 'value={mail} onChange={e=>setMail(e.target.value)}></input>
        <h5 className='form-label mt-2' style={{textAlign:'left'}}>Date of birthday</h5>
        <input required type='date' className='form-control' value={bday} onChange={e=>setBday(e.target.value)}></input>
        <br/>
        <button className='btn btn-primary'>submit</button>
      </form>
      </div>:<h1></h1>
    }
    
      
      <button className='btn btn-info mt-5' onClick={todayBdaylist}>Birthdays today</button>
      <div className='mt-5 d-flex flex-wrap justify-content-around'>
      {todayBday.map(s=>
      <div className='card'>
        <img class="card-img" style={{height:'200px',width:'300px'}}
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blurred-happy-birthday-background-design-template-4fe959fbde9d522c5323a3ea98b337ea_screen.jpg?ts=1610281156" alt="Card image"/>
      <div className="card-img-overlay">
      <button className='btn btn-outline-danger btn-sm' onClick={()=>deleteBday(s.id)}  style={{transform:'translate(110px, 2px)' }}>X</button>
       <h4 className='card-text ' style={{transform:'translate(8px, 80px)',color:'purple' }}>{s.Name}</h4> 
      
      </div>
      </div>
      )}
     
      </div>

      <div className='mt-5'>
           <table className='table table-info'>
           <thead style={{}}>
            <tr>
                <th>ID</th>
                <th>Person Name</th>
                <th>Email Id</th>
                <th>Birth Date</th>
               
            </tr>
           </thead>
           <tbody>
           {bdaydetails.map(person=>
           <tr key={person.id}>
           <td>{person.id}</td>
            <td>{person.Name}</td>
            <td>{person.Email}</td>
            <td>{person.DOB}</td>
           </tr>
           )}
           </tbody>
           </table>
      </div>
  
    </div>
  )
}

export default BirthdayForm
