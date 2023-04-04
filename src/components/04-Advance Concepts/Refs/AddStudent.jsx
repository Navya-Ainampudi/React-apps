import React, {useState, useRef} from 'react';

import StudentsList from './StudentsList';

const AddStudent = () => {
  const [studentsList, setStudentsList] = useState([]);

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserList = (uName, uAge) => {
    setStudentsList((prevUserList) => {
      return [
        ...prevUserList,
        {name: uName, age: uAge, id: Math.random().toString()},
      ];
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    addUserList(enteredName, enteredUserAge);

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <>
      <h2 className="text-left mt-4">Refs</h2>

      <p className="text-left text-secondary mb-4">
        <strong>Refs</strong> is an attribute which makes it possible to store a
        reference to particular DOM nodes or React elements. <br />
        It provides a way to access React DOM nodes or React elements and how to
        interact with it. It is similar to state but you should have to avoid overuse
        of the Refs.
      </p>

      <section className="example-section">
        <form onSubmit={addUserHandler}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="name">Student Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  ref={nameInputRef}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="age">Student Age (years)</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  ref={ageInputRef}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-50">
            Add User
          </button>

          <StudentsList students={studentsList} />
        </form>
      </section>
    </>
  );
};

export default AddStudent;
