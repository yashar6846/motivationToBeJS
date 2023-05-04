import React, { useEffect, useState} from 'react';

import useHttp from './hooks/use-http';
import Tasks from './Tasks/Tasks';
import NewTask from './NewTask/NewTask';

function HookList() {

  const [tasks, setTasks] = useState([]);

  const {isLoading, error, sendRequest: fetchTasks} = useHttp();

  useEffect(() => {
    const transformTasks =(taskObj) => {
      const loadedTasks = [];
  
        for (const taskKey in taskObj) {
          loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
        }
  
        setTasks(loadedTasks);
    }
    fetchTasks({url: 'http://localhost:2000/shop'},transformTasks);
  }, [fetchTasks]); 

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  );
}

export default HookList;
