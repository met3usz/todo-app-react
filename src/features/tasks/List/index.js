import ListItem from './ListItem';
import { ListWrapper } from './styled';

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
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

export default List;
