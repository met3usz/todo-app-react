import './style.css';

const ListItem = ({ task, hide }) => (
  <li
    key={task.id}
    className={`list__item ${task.done && hide ? 'list__item--hiden' : ''}`}
  >
    <button className="list__item__button list__item__button-done">
      <p>{task.done ? '✔️' : ''}</p>
    </button>
    <p
      className={`list__item__content 
    ${task.done ? 'list__item--lineThrough' : ''}
  `}
    >
      {task.content}
    </p>
    <button className="list__item__button list__item__button-remove">
      <p>🗑️</p>
    </button>
  </li>
);

export default ListItem;
