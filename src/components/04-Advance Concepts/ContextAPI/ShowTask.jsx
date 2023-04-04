import React, {useContext} from 'react';
import TaskContext from '../../../store/task-context';

const ShowTask = () => {
  const taskCTX = useContext(TaskContext);

  return (
    <>
      <h3>Today's task is: </h3>
      <p>{taskCTX.task}</p>
    </>
  );
};

export default ShowTask;
