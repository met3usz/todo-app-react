import './style.css';
import './listItem.css';

const List = (props) => (
  <ul className="list">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={`list__item ${
          task.done && props.hideDoneTask ? 'list__item--hiden' : ''
        }`}
      >
        <button className="list__item__button list__item__button-done">
          {task.done ? '✔️' : ''}
        </button>
        <p
          className={`"list__item__content" ${
            task.done ? 'style = "text-decoration: line-through"' : ''
          }`}
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
