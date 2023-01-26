import './style.css';

const Buttons = ({ tasks, hide }) =>
  tasks.length > 0 && (
    <div className="buttons">
      <button className="button__button">
        {hide ? 'Pokaż' : 'Ukryj'} wykonane
      </button>
      <button
        className="button__button"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );

export default Buttons;
