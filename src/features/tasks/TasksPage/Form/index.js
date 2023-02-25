import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTask } from '../../tasksSlice';
import { Button, StyldeForm } from './styled';
import Input from '../Input';

const Form = () => {
  const [newTaskContent, setContent] = useState('');
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!newTaskContent.trim()) {
      return;
    }

    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );

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
