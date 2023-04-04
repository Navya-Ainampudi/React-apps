import React, {useState} from 'react';

const UserEvents = () => {
  const [name, setName] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const handleClearName = (event) => {
    event.preventDefault(); // To stop page from refreshing
    setName(''); // Reset name
  };

  return (
    <>
      <h2 className="text-left mt-4">Events</h2>

      <p className="text-left text-secondary mb-4">
        This example is implementation of <strong>onChange</strong> and{' '}
        <strong>onClick</strong> events. <br />
        Entered value is dynamic variable which will render on onChange event of
        input. Clear button is part of onClick event.
      </p>

      <section className="example-section">
        <form>
          <div className="row">
            <div className="col-8">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={nameChangeHandler} //onChange event works on every change in text
                />
              </div>
            </div>
            <div className="col-4">
              <button
                type="submit"
                className="btn btn-primary w-100"
                onClick={handleClearName} //onClick event triggers when click event occurs
              >
                Clear
              </button>
            </div>
          </div>
          <p className="text-left">Entered value: {name}</p>{' '}
          {/* dynamically showing "name" value */}
        </form>
      </section>
    </>
  );
};

export default UserEvents;
