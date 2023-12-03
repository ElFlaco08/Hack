import { tasks as data } from './tasks';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { useState, useEffect } from 'react';

export const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTaks(taskTitle) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        descripcion: 'Nueva Tarea',
      },
    ]);
  }

  return (
    <>
      <TaskForm createTaks={createTaks} />
      <TaskList tasks={tasks} />
    </>
  );
};
