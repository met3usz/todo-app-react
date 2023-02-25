import { ToggleDoneButton, RemoveButton, Content, Item } from './styled';
import { removeTask, toggleTaskDone } from '../../../tasksSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ListItem = ({ task, hideDone }) => {
  const dispatch = useDispatch();

  return (
    <Item hiden={task.done && hideDone}>
      <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
        <p>{task.done ? '\u2713' : ''}</p>
      </ToggleDoneButton>
      <Content done={task.done}>
        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
      </Content>
      <RemoveButton
        onClick={() => {
          dispatch(removeTask(task.id));
        }}
      >
        <p>{'\uD83D\uDDD1'}</p>
      </RemoveButton>
    </Item>
  );
};

export default ListItem;
