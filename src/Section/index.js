import { Title, Wrapper } from './styled';

const Section = ({ contentControlButtons, tasksList }) => (
  <Wrapper>
    <Title>Lista zadań</Title>
    {contentControlButtons}
    {tasksList}
  </Wrapper>
);

export default Section;
