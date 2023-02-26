import { useDispatch, useSelector } from 'react-redux';
import { fetchExampleTasks, selectLoading } from '../../tasksSlice';
import { Button } from '../../../../common/Button/styled';
import Loading from './Loading';
import { StyledParagraph } from './styled';

const FetchExample = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Button
      onClick={() => {
        dispatch(fetchExampleTasks());
      }}
      disabled={loading}
    >
      {loading ? (
        <Loading />
      ) : (
        <StyledParagraph>Pobierz przykładowe zadania</StyledParagraph>
      )}
    </Button>
  );
};

export default FetchExample;
