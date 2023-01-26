import './style.css';

const Wrapper = ({ body, title }) => (
  <div className="wrapper">
    <h1>{title}</h1>
    <h2 className="wrapper__header">Dodaj nowe zadanie</h2>
    {body}
  </div>
);

export default Wrapper;
