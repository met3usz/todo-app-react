import { Title, TitleWrapper } from './styled';

const Wrapper = ({ body, title }) => (
  <TitleWrapper>
    <Title>{title}</Title>
    <h2>Dodaj nowe zadanie</h2>
    {body}
  </TitleWrapper>
);

export default Wrapper;
