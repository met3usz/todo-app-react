import ListItem from '../ListItem';
import './style.css';

const List = ({ tasks, hide }) => (
  <ul className="list">
    {tasks.map((task) => (
      <ListItem task={task} hide={hide} key={task.id} />
    ))}
  </ul>
);

export default List;
