import { useTasks } from '../../utils/useTasks';
import { useSelector } from 'react-redux';
import { Container } from '../../common/Container/styled';
import Wrapper from './Wrapper';
import Section from './Section';
import List from './List';
import StyledButtons from './StyledButtons';
import Form from './Form';
import { selectTasks } from './tasksSlice';

function Tasks() {
  const { tasks } = useSelector(selectTasks);

  const { setAllDone, addNewTask, removeTask } = useTasks();

  return (
    <Container>
      <Wrapper body={<Form addNewTask={addNewTask} />} title={'Lista zadań'} />
      <Section
        contentControlButtons={<StyledButtons setAllDone={setAllDone} />}
        tasksList={<List key={tasks.id} removeTask={removeTask} />}
      />
    </Container>
  );
}

export default Tasks;
