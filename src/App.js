import './App.css';
import Form from './Form';
import List from './List';

const tasks = [
  { id: 1, content: 'zrobić zakupy', done: false },
  { id: 2, content: 'zjeść kolację', done: true },
];

const hideDoneTasks = true;

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
        <div className="section__header "></div>
        <List tasks={tasks} hideDoneTasks={hideDoneTasks} />
      </section>
    </main>
  );
}

export default App;
