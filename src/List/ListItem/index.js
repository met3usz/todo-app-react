import { ToggleDoneButton, RemoveButton, Content, Item } from './styled';

const ListItem = ({ task, hideDone, removeTask, toggleTaskDone }) => (
  <Item key={task.id} hiden={task.done && hideDone}>
    <ToggleDoneButton onClick={() => toggleTaskDone(task.id)}>
      <p>{task.done ? '\u2713' : ''}</p>
    </ToggleDoneButton>
    <Content done={task.done}>{task.content}</Content>
    <RemoveButton onClick={() => removeTask(task.id)}>
      <p>{'\uD83D\uDDD1'}</p>
    </RemoveButton>
  </Item>
);

export default ListItem;
