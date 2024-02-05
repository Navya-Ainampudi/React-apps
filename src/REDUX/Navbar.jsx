import React from 'react';
import { logout } from '../store/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../store/UserSlice';
import { toggle } from '../store/toogleSlice';

const Navbar = () => {
    const user= useSelector(selectUser)
    const dispatch= useDispatch(logout);
    const navigate= useNavigate();
    const isOpen=useSelector(state=>state.toogle.isOpen)
    const handleLogout=()=>{
     dispatch(logout())
      navigate("/")
    }
    const toggleProfile=()=>{
    //     
            dispatch(toggle())
    //     
        
    }
  return (
    <div style={{position:'fixed',left:'20%' ,backgroundColor:'coral',width:'80%',height:'10%', display:'flex',alignItems:'center'}}>
      <span style={{whiteSpace:'nowrap', textTransform:'capitalize'}}>Welcome {user && user.name}</span>
     {
       isOpen?
       <div style={{marginLeft:'70%', marginTop:'20%'}}>
      {user && <>
      <h5>{user.name}</h5>
      <h6>{user.email}</h6>
      </>
      }
            <button className='btn btn-dark' onClick={handleLogout}>logout</button><br/>
            <button className='btn btn-danger' onClick={toggleProfile}>close profile</button>
      </div>:<button style={{marginLeft:'70%'}} onClick={toggleProfile}>profile</button>
     }

      
      
    </div>
  )
}

export default Navbar
