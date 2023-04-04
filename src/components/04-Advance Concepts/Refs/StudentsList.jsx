import React from 'react';

const StudentsList = (props) => {
  return (
    <ul className='list-group mt-5'>
      {props.students.map((student) => (
        <li className='list-group-item' key={student.id}>
          {student.name} ({student.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default StudentsList;
