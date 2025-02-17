import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
    const [subj,setSubj]= useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]= useState('')
  
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${subj}, ${email}, ${message}`);
        const emaildata= {sub:subj,greet:"Greeting", mail:email,message:message }
        
        emailjs
        .send('service_t2eamzv', 'template_gejuvqj', emaildata, 'dHQ4iDwfb4-WZA_sQ')
         
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );

    };
  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <label>Form</label><br></br><br></br>
        <label>Subject</label>
        <input placeholder='subject' value={subj} onChange={(e)=>setSubj(e.target.value)} ></input>
        <br></br><br></br>
        <label>Email</label>
        <input placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <br></br><br></br>
        <label>Message</label>
        <input placeholder='message' value={message} onChange={(e)=>{setMessage(e.target.value)}}></input>
        <br></br>
        <button type='submit'>submit</button>
      </form>
      {subj}{email}{message}
    </div>
  )
}

export default EmailForm
