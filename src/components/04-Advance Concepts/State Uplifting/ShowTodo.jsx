import React, {useState} from 'react';

import AddTodo from './AddTodo';
import TodoCount from './TodoCount';
import TodoList from './TodoList';

const ShowTodo = () => {
  const [todos, setTodos] = useState(['item 1', 'item 2', 'item 3']);

  return (
    <>
      <h2 className="text-left mt-4">Lifting State Up</h2>

      <p className="text-left text-secondary mb-4">
        In this example we are maintaining four component (todo count, todo list,
        adding todo and parent component). Newly added todo needs to be reflect is
        todo list and todo count component. We can achieve that by{' '}
        <strong>lifting state up</strong>.
      </p>

      <section className="example-section">
        <TodoCount todos={todos} />
        <TodoList todos={todos} />
        <AddTodo setTodos={setTodos} />
      </section>
    </>
  );
};

export default ShowTodo;
