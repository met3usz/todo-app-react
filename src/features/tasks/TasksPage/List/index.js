import ListItem from './ListItem';
import { ListWrapper } from './styled';
import { useSelector } from 'react-redux';
import { selectHideDone, selectTasksByQuery } from '../../tasksSlice';
import { useLocation } from 'react-router-dom';
import searchQueryParamName from '../searchQueryParamName';

const List = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  return (
    <ListWrapper>
      {tasks.map((task) => (
        <ListItem task={task} hideDone={hideDone} key={task.id} />
      ))}
    </ListWrapper>
  );
};

export default List;
