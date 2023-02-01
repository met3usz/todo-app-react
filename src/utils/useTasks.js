import { useState, useEffect } from 'react';

const getLocalStorageTasks = () => {
  const localStorageTasks = localStorage.getItem('tasks');

  return localStorageTasks ? JSON.parse(localStorageTasks) : [];
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(getLocalStorageTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const setAllDone = () =>
    setTasks((tasks) => tasks.map((tasks) => ({ ...tasks, done: true })));

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  return { tasks, toggleTaskDone, setAllDone, addNewTask, removeTask };
};
