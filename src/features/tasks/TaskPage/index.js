import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '../../../common/Container/styled';
import Header from '../../tasks/TasksPage/Header';
import { getTaskById } from '../tasksSlice';

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header
        title={'Szczegóły zadania'}
        header={task ? task.content : 'Nie znaleziono zadania 😢'}
        body={
          !!task && (
            <>
              <strong>Ukończono:</strong> {task.done ? 'Tak' : 'Nie'}
            </>
          )
        }
      />
    </Container>
  );
}

export default TaskPage;
