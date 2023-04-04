import React, {useState} from 'react';

const TaskContext = React.createContext({
  task: '',
  onUpdateTask: () => {},
});

export const TaskContextProvider = (props) => {
  const [task, setTask] = useState('');

  const handleUpdateTask = (text) => {
    setTask(text);
  };

  return (
    <TaskContext.Provider value={{task: task, onUpdateTask: handleUpdateTask}}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
