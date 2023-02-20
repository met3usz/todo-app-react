import { ToggleDoneButton, RemoveButton, Content, Item } from './styled';
import { removeTask, toggleTaskDone } from '../../tasksSlice';
import { useDispatch } from 'react-redux';

const ListItem = ({ task, hideDone }) => {
  const dispatch = useDispatch();

  return (
    <Item key={task.id} hiden={task.done && hideDone}>
      <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
        <p>{task.done ? '\u2713' : ''}</p>
      </ToggleDoneButton>
      <Content done={task.done}>{task.content}</Content>
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
