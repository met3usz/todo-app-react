import { useSelector, useDispatch } from 'react-redux';
import {
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
} from '../../tasksSlice';
import { StyledButtons } from './styled';
import { Button } from '../../../../common/Button/styled';

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();
  return (
    <StyledButtons>
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
