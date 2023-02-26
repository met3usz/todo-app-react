import { Container } from '../../../common/Container/styled';
import Header from './Header';
import Section from './Section';
import List from './List';
import StyledButtons from './StyledButtons';
import Form from './Form';
import Search from './Search';
import FetchExample from './FetchExample';

function TasksPage() {
  return (
    <Container>
      <Header
        title={'Lista zadań'}
        header={'Dodaj nowe zadanie'}
        fetchExample={<FetchExample />}
        body={<Form />}
      />
      <Header header={'Wyszukiwarka'} body={<Search />} />
      <Section contentControlButtons={<StyledButtons />} tasksList={<List />} />
    </Container>
  );
}

export default TasksPage;
