import './style.css';

const ListItem = ({ task, hideDone, removeTask }) => (
  <li
    key={task.id}
    className={`list__item ${task.done && hideDone ? 'list__item--hiden' : ''}`}
  >
    <button className="list__item__button list__item__button-done">
      <p>{task.done ? '✓' : ''}</p>
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
      <p>🗑</p>
    </button>
  </li>
);

export default ListItem;
