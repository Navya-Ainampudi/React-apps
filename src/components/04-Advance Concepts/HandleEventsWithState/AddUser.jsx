import React, {useState} from 'react';

import UsersList from './UsersList';

const AddUser = () => {
  const [usersList, setUsersList] = useState([]);

  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserList = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        {name: uName, age: uAge, id: Math.random().toString()},
      ];
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    addUserList(enteredUserName, enteredAge);
    setEnteredUserName('');
    setEnteredAge('');
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <>
      <h2 className="text-left mt-4">Event handling with state</h2>

      <p className="text-left text-secondary mb-4">
        In this example we are handling <strong>onChange</strong> and{' '}
        <strong>onClick</strong> events by adding username and age in the array.
        <br />
        Rendering the list with help of <strong>state and events</strong>.
      </p>

      <section className="example-section">
        <form onSubmit={addUserHandler}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="userName">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  value={enteredUserName}
                  onChange={userNameChangeHandler}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="userAge">Age (years)</label>
                <input
                  type="number"
                  className="form-control"
                  id="userAge"
                  value={enteredAge}
                  onChange={ageChangeHandler}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-50">
            Add User
          </button>

          <UsersList users={usersList} />
        </form>
      </section>
    </>
  );
};

export default AddUser;
