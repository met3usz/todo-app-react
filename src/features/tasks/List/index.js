import ListItem from './ListItem';
import { useSelector } from 'react-redux';
import { ListWrapper } from './styled';
import { selectTasks } from '../tasksSlice';

const List = ({ removeTask, toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    <ListWrapper>
      {tasks.map((task) => (
        <ListItem
          task={task}
          hideDone={hideDone}
          key={task.id}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />
      ))}
    </ListWrapper>
  );
};

export default List;
