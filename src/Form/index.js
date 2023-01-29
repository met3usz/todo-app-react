import { useState } from 'react';
import './style.css';

const Form = ({ addNewTask }) => {
  const [newTaskContent, setContent] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!newTaskContent) {
      return;
    }
    addNewTask(newTaskContent.trim());
    setContent('');
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        autoFocus
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
