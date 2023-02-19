import { useState, useRef } from 'react';
import { Button, Input, StyldeForm } from './styled';

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
    <StyldeForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        autoFocus
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setContent(target.value)}
      />
      <Button onClick={() => inputRef.current.focus()}>Dodaj zadanie</Button>
    </StyldeForm>
  );
};

export default Form;
