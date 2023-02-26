import { Container } from '../../../common/Container/styled';
import Wrapper from './Wrapper';
import Section from './Section';
import List from './List';
import StyledButtons from './StyledButtons';
import Form from './Form';
import Search from './Search';
import FetchExample from './FetchExample';

function TasksPage() {
  return (
    <Container>
      <Wrapper
        title={'Lista zadań'}
        header={'Dodaj nowe zadanie'}
        fetchExample={<FetchExample />}
        body={<Form />}
      />
      <Wrapper header={'Wyszukiwarka'} body={<Search />} />
      <Section contentControlButtons={<StyledButtons />} tasksList={<List />} />
    </Container>
  );
}

export default TasksPage;
