import React, {useReducer} from 'react';

const initialCountState = {count: 0};

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [countState, dispatch] = useReducer(countReducer, initialCountState);

  return (
    <>
      <h2 className="text-left mt-4">Use Reducer</h2>

      <p className="text-left text-secondary mb-4">
        The <strong>useReducer</strong> Hook is similar to the useState Hook. It
        allows for custom state logic. If you find yourself keeping track of multiple
        pieces of state that rely on complex logic, useReducer may be useful.
      </p>

      <section className="example-section">
        <p>
          Count: <strong>{countState.count}</strong>
        </p>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({type: 'decrement'})}
        >
          -
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch({type: 'increment'})}
        >
          +
        </button>
      </section>
    </>
  );
};

export default Counter;
