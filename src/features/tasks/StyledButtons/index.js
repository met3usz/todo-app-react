import React from 'react';
import { StyledButtons, Button } from './styled';

const Buttons = ({ tasks, hideDone, toggleHide, setAllDone }) => (
  <StyledButtons>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHide}>
          {hideDone ? 'Pokaż' : 'Ukryj'} wykonane
        </Button>
        <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
          Ukończ wszystkie
        </Button>
      </>
    )}
  </StyledButtons>
);

export default Buttons;
