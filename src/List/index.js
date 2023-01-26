import ListItem from '../ListItem';
import './style.css';

const List = ({ tasks, hide }) => (
  <ul className="list">
    {tasks.map((task) => (
      <ListItem task={task} hide={hide} />
    ))}
  </ul>
);

export default List;
