import ListItem from '../ListItem';
import './style.css';

const List = ({ tasks, hideDone }) => (
  <ul className="list">
    {tasks.map((task) => (
      <ListItem task={task} hideDone={hideDone} key={task.id} />
    ))}
  </ul>
);

export default List;
