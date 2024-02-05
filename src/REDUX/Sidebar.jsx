import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toogleSidebar } from '../store/SidebarSlice';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const options= useSelector(state=>state.sidebar.options)
    const  {isOpen}= useSelector(state=>state.sidebar)
    const dispatch =useDispatch();

    const handltoogleSidebar=()=>{
      dispatch(toogleSidebar())
    }
    // console.log(isOpen)
    const handleClick=()=>{
      console.log('clicked')
    }
  return (
<>
    {isOpen? <div onClick={handltoogleSidebar} style={{position:'fixed',alignItems:'center',justifyContent:'center',display:'flex', height:'65px',width:'20%',backgroundColor:'lightblue'}}>Toogle Sidebar</div>:
    <div className='sidebar' style={{position:'fixed', width:'20%', backgroundColor:'lightblue' ,height:"100vh",}}>
    <br/>
    
       {options.map(e=>
       <Link to={`/home/${e.id}`} key={e.id}>
       <button className='btn btn-info d-flex' 
       style={{margin:"0px 60px 30px 60px", width:'150px',justifyContent:'center'}}
       onClick={handleClick} >
       {e.name}</button>
       </Link>
       )}
       <button className='btn btn-info d-flex' onClick={handltoogleSidebar} style={{margin:"0px 60px 30px 60px", width:'150px',justifyContent:'center'}}>close sidebar</button>
     </div>
     }
     </>
  )
}

export default Sidebar
