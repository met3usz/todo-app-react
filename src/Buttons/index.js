import React from 'react';
import './style.css';

const Buttons = ({ tasks, hide }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button className="button__button">
          {hide ? 'Pokaż' : 'Ukryj'} wykonane
        </button>
        <button
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
