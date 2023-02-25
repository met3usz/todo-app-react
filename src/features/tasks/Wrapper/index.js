import { Title, TitleWrapper } from './styled';

const Wrapper = ({ body, title }) => (
  <>
    <Title>{title}</Title>

    <TitleWrapper>
      <h2>Dodaj nowe zadanie</h2>
      {body}
    </TitleWrapper>
  </>
);

export default Wrapper;
