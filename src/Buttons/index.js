import React from 'react';
import { Wrapper, Button } from './styled';

const Buttons = ({ tasks, hideDone, toggleHide, setAllDone }) => (
  <Wrapper>
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
  </Wrapper>
);

export default Buttons;
