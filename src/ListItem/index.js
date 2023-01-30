import './style.css';

const ListItem = ({ task, hideDone, removeTask, toggleTaskDone }) => (
  <li
    key={task.id}
    className={`list__item ${task.done && hideDone ? 'list__item--hiden' : ''}`}
  >
    <button
      onClick={() => toggleTaskDone(task.id)}
      className="list__item__button list__item__button-done"
    >
      <p>{task.done ? '\u2713' : ''}</p>
    </button>
    <p
      className={`list__item__content 
    ${task.done ? 'list__item--lineThrough' : ''}
  `}
    >
      {task.content}
    </p>
    <button
      className="list__item__button list__item__button-remove"
      onClick={() => removeTask(task.id)}
    >
      <p>{'\uD83D\uDDD1'}</p>
    </button>
  </li>
);

export default ListItem;
