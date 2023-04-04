import React, {useContext, useState} from 'react';
import TaskContext from '../../../store/task-context';
import ShowTask from './ShowTask';

const UpdateTask = () => {
  const [todayTask, setTodayTask] = useState('');

  const taskCTX = useContext(TaskContext);

  const addTodayTask = (event) => {
    event.preventDefault();
    taskCTX.onUpdateTask(todayTask);
    setTodayTask('');
  };

  const taskChangeHandler = (event) => {
    setTodayTask(event.target.value);
  };

  return (
    <>
      <h2 className="text-left mt-5">Context API</h2>

      <p className="text-left text-secondary mb-4">
        <strong>Context</strong> provides a way to pass data through the component
        tree without having to pass props down manually at every level. <br />
        In this example we are adding today's task to context so that it will be
        available to every component.
      </p>

      <section className="example-section">
        <form onSubmit={addTodayTask}>
          <div className="row">
            <div className="col-8">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  placeholder="Add todays task"
                  value={todayTask}
                  onChange={taskChangeHandler}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <button type="submit" className="btn btn-outline-success w-100">
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
        {taskCTX.task && <ShowTask />}
      </section>
    </>
  );
};

export default UpdateTask;
