import { useState, useRef } from 'react';
import './style.css';

const Form = ({ addNewTask }) => {
  const [newTaskContent, setContent] = useState('');
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!newTaskContent.trim()) {
      return;
    }
    addNewTask(newTaskContent.trim());
    setContent('');
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        value={newTaskContent}
        autoFocus
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setContent(target.value)}
      />
      <button className="form__button" onClick={() => inputRef.current.focus()}>
        Dodaj zadanie
      </button>
    </form>
  );
};

export default Form;
