import React from 'react';
import { Link,Outlet } from 'react-router-dom';

const AboutComponent = () => {
  return (
    <>
    <Link to="/about/users">Users</Link>
    <div>
    <Link to="/about/users/userDetails">Details</Link>
    </div>
    
     <div>
      about component data
    </div>
    <Outlet/>

    </>
   
  )
}

export default AboutComponent
