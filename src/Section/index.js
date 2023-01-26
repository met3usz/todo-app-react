import './style.css';

const Section = ({
  tasks,
  hideDoneTasks,
  contentControlButtons,
  tasksList,
}) => (
  <section className="section">
    <h2 className="section__title">Lista zadań</h2>
    {contentControlButtons}
    {tasksList}
  </section>
);

export default Section;
