import './style.css';

const ListItem = ({ task, hide }) => (
  <li
    key={task.id}
    className={`list__item ${task.done && hide ? 'list__item--hiden' : ''}`}
  >
    <button className="list__item__button list__item__button-done">
      {task.done ? '✔️' : ''}
    </button>
    <p
      className={`list__item__content 
    ${task.done ? 'list__item--lineThrough' : ''}
  `}
    >
      {task.content}
    </p>
    <button className="list__item__button list__item__button-remove">🗑️</button>
  </li>
);

export default ListItem;
