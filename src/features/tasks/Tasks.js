import { Container } from '../../common/Container/styled';
import Wrapper from './Wrapper';
import Section from './Section';
import List from './List';
import StyledButtons from './StyledButtons';
import Form from './Form';

function Tasks() {
  return (
    <Container>
      <Wrapper body={<Form />} title={'Lista zadań'} />
      <Section contentControlButtons={<StyledButtons />} tasksList={<List />} />
    </Container>
  );
}

export default Tasks;
