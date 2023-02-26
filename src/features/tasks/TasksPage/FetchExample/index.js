import { useDispatch, useSelector } from 'react-redux';
import { fetchExampleTasks, selectLoading } from '../../tasksSlice';
import { Button } from '../../../../common/Button/styled';
import Loading from './Loading';

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
      {loading ? <Loading /> : 'Pobierz przykładowe zadania'}
    </Button>
  );
};

export default FetchExample;
