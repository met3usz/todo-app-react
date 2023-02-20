import { useTasks } from '../../utils/useTasks';
import { Container } from '../../common/Container/styled';
import Wrapper from './Wrapper';
import Section from './Section';
import List from './List';
import StyledButtons from './StyledButtons';
import Form from './Form';

function Tasks() {
  const { setAllDone, removeTask } = useTasks();

  return (
    <Container>
      <Wrapper body={<Form />} title={'Lista zadań'} />
      <Section
        contentControlButtons={<StyledButtons setAllDone={setAllDone} />}
        tasksList={<List removeTask={removeTask} />}
      />
    </Container>
  );
}

export default Tasks;
