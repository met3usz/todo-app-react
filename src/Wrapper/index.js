import { TitleWrapper } from './styled';

const Wrapper = ({ body, title }) => (
  <TitleWrapper>
    <h1>{title}</h1>
    <h2 className="wrapper__header">Dodaj nowe zadanie</h2>
    {body}
  </TitleWrapper>
);

export default Wrapper;
