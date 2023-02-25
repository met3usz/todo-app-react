import { SecondTitle, Title, TitleWrapper } from './styled';

const Wrapper = ({ body, title, header }) => (
  <>
    <Title>{title}</Title>

    <TitleWrapper>
      <SecondTitle>{header}</SecondTitle>
      {body}
    </TitleWrapper>
  </>
);

export default Wrapper;
