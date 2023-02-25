import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '../../../common/Container/styled';
import Wrapper from '../../tasks/TasksPage/Wrapper';
import { getTaskById } from '../tasksSlice';

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Wrapper
        title={'Szczegóły zadania'}
        header={task ? task.content : 'Nie znaleziono zadania 😢'}
        body={
          <>
            <strong>Ukończono:</strong> {task.done ? 'Tak' : 'Nie'}
          </>
        }
      />
    </Container>
  );
}

export default TaskPage;
