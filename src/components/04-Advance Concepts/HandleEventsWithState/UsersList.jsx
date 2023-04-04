import React from 'react';

const UsersList = (props) => {
  return (
    <ul className='list-group mt-5'>
      {props.users.map((user) => (
        <li className='list-group-item' key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
