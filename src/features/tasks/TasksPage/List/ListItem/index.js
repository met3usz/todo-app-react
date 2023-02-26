import {
  ToggleDoneButton,
  RemoveButton,
  Content,
  Item,
  StyledLink,
} from './styled';
import { removeTask, toggleTaskDone } from '../../../tasksSlice';
import { useDispatch } from 'react-redux';

const ListItem = ({ task, hideDone }) => {
  const dispatch = useDispatch();

  return (
    <Item hiden={task.done && hideDone}>
      <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
        <p>{task.done ? '\u2713' : ''}</p>
      </ToggleDoneButton>
      <Content done={task.done}>
        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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
