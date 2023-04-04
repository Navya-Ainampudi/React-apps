import React from 'react';

const AddTodo = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    props.setTodos((prevTodos) => [...prevTodos, todo]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group w-25 mx-auto">
        <input className="form-control" type="text" id="todo" placeholder='Add more items' />
        <button className="btn btn-secondary mt-2" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
