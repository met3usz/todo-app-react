import './App.css';
import Container from './Container';
import Wrapper from './Wrapper';
import Section from './Section';
import List from './List';
import Buttons from './Buttons';
import Form from './Form';

const tasks = [
  { id: 1, content: 'zrobić zakupy', done: true },
  { id: 2, content: 'zjeść kolację', done: false },
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
        tasksList={<List tasks={tasks} hide={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
