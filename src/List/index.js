import './style.css';
import './listItem.css';

const List = ({ tasks, hide }) => (
  <ul className="list">
    {tasks.map((task) => (
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
        <button className="list__item__button list__item__button-remove">
          🗑️
        </button>
      </li>
    ))}
  </ul>
);

export default List;
