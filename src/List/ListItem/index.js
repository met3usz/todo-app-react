import { Button, Content, Item } from './styled';

const ListItem = ({ task, hideDone, removeTask, toggleTaskDone }) => (
  <Item key={task.id} hiden={task.done && hideDone}>
    <Button done onClick={() => toggleTaskDone(task.id)}>
      <p>{task.done ? '\u2713' : ''}</p>
    </Button>
    <Content done={task.done}>{task.content}</Content>
    <Button remove onClick={() => removeTask(task.id)}>
      <p>{'\uD83D\uDDD1'}</p>
    </Button>
  </Item>
);

export default ListItem;
