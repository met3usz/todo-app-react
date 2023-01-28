import Container from './Container';
import Wrapper from './Wrapper';
import Section from './Section';
import List from './List';
import Buttons from './Buttons';
import Form from './Form';
import { hello } from './utils/hello';

hello();

const tasks = [
  { id: 1, content: 'zrobić zakupy', done: false },
  { id: 2, content: 'zjeść kolację', done: true },
  { id: 3, content: 'iść spać wcześnie', done: false },
];
let hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Wrapper body={<Form />} title={'Lista zadań'} />
      <Section
        tasks={tasks}
        hideDoneTasks={hideDoneTasks}
        contentControlButtons={<Buttons tasks={tasks} hide={hideDoneTasks} />}
        tasksList={<List tasks={tasks} hide={hideDoneTasks} key={tasks.id} />}
      />
    </Container>
  );
}

export default App;
