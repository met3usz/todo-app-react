import React from 'react';
import './style.css';

const Buttons = ({ tasks, hideDone, toggleHide, setAllDone }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHide} className="button__button">
          {hideDone ? 'Pokaż' : 'Ukryj'} wykonane
        </button>
        <button
          onClick={setAllDone}
          className="button__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
