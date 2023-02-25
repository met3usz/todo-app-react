import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
  selectHideDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
} from '../../tasksSlice';
import { StyledButtons, Button } from './styled';

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();
  return (
    <StyledButtons>
      <Button
        onClick={() => {
          dispatch(fetchExampleTasks());
        }}
      >
        Pobierz przykładowe zadania
      </Button>
      {!areTasksEmpty > 0 && (
        <>
          <Button
            onClick={() => {
              dispatch(toggleHideDone());
            }}
          >
            {hideDone ? 'Pokaż' : 'Ukryj'} wykonane
          </Button>
          <Button
            onClick={() => {
              dispatch(setAllDone());
            }}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  );
};

export default Buttons;
