import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newTask.trim() === '') {
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/tasks', {
        title: newTask,
        completed: false,
      });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleToggleComplete = async (taskId) => {
    try {
      const response = await axios.put(`http://localhost:3001/tasks/${taskId}`, {
        completed: !tasks.find((task) => task.id === taskId).completed,
      });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, completed: response.data.completed } : task
        )
      );
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={handleInputChange} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => handleToggleComplete(task.id)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
