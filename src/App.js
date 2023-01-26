import './App.css';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';

const tasks = [
  { id: 1, content: 'zrobić zakupy', done: false },
  { id: 2, content: 'zjeść kolację', done: true },
];
let hideDoneTasks = true;

function App() {
  return (
    <main>
      <div className="wrapper">
        <h1>Lista zadań</h1>
        <h2 className="wrapper__header">Dodaj nowe zadanie</h2>
        <Form />
      </div>
      <section className="section">
        <h2 className="section__title">Lista zadań</h2>
        <Buttons tasks={tasks} />
        <List tasks={tasks} hide={hideDoneTasks} />
      </section>
    </main>
  );
}

export default App;
