import Container from './Container';
import Wrapper from './Wrapper';
import Section from './Section';
import List from './List';
import Buttons from './Buttons';
import Form from './Form';

const tasks = [
  { id: 1, content: 'zrobić zakupy', done: false },
  { id: 2, content: 'zjeść kolację', done: true },
  { id: 3, content: 'iść spać wcześnie', done: false },
];

let hideDone = false;

function App() {
  return (
    <Container>
      <Wrapper body={<Form />} title={'Lista zadań'} />
      <Section
        tasks={tasks}
        hideDone={hideDone}
        contentControlButtons={<Buttons tasks={tasks} hide={hideDone} />}
        tasksList={<List tasks={tasks} hide={hideDone} key={tasks.id} />}
      />
    </Container>
  );
}

export default App;
