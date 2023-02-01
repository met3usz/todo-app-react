import { useState, useEffect } from 'react';
import Container from './Container';
import Wrapper from './Wrapper';
import Section from './Section';
import List from './List';
import Buttons from './Buttons';
import Form from './Form';
import { useTasks } from './utils/useTasks';

const getLocalStorageTasks = () => {
  const localStorageTasks = localStorage.getItem('tasks');

  return localStorageTasks ? JSON.parse(localStorageTasks) : [];
};

function App() {
  const [hideDone, setHide] = useState(false);
  const [tasks, setTasks] = useState(getLocalStorageTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleHide = () => {
    setHide((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

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

  return (
    <Container>
      <Wrapper body={<Form addNewTask={addNewTask} />} title={'Lista zadań'} />
      <Section
        tasks={tasks}
        hideDone={hideDone}
        contentControlButtons={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHide={toggleHide}
            setAllDone={setAllDone}
          />
        }
        tasksList={
          <List
            tasks={tasks}
            hideDone={hideDone}
            key={tasks.id}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </Container>
  );
}

export default App;
