import ListItem from './ListItem';
import { ListWrapper } from './styled';
import { useSelector } from 'react-redux';
import { selectTasks } from '../tasksSlice';

const List = () => {
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    <ListWrapper>
      {tasks.map((task) => (
        <ListItem task={task} hideDone={hideDone} key={task.id} />
      ))}
    </ListWrapper>
  );
};

export default List;
