import ListItem from '../ListItem';
import './style.css';

const List = ({ tasks, hideDone, removeTask }) => (
  <ul className="list">
    {tasks.map((task) => (
      <ListItem
        task={task}
        hideDone={hideDone}
        key={task.id}
        removeTask={removeTask}
      />
    ))}
  </ul>
);

export default List;
