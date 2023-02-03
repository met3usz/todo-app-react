import { useState } from 'react';
import { useTasks } from './utils/useTasks';
import { Container } from './Container/styled';
import Wrapper from './Wrapper';
import Section from './Section';
import List from './List';
import StyledButtons from './StyledButtons';
import Form from './Form';

function App() {
  const [hideDone, setHide] = useState(false);

  const toggleHide = () => {
    setHide((hideDone) => !hideDone);
  };

  const { tasks, toggleTaskDone, setAllDone, addNewTask, removeTask } =
    useTasks();

  return (
    <Container>
      <Wrapper body={<Form addNewTask={addNewTask} />} title={'Lista zadań'} />
      <Section
        tasks={tasks}
        hideDone={hideDone}
        contentControlButtons={
          <StyledButtons
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
