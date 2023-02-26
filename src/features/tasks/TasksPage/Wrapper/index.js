import { SecondTitle, Title, TitleWrapper } from './styled';

const Wrapper = ({ body, title, header, fetchExample }) => (
  <>
    <Title>{title}</Title>

    <TitleWrapper>
      <div>
        <SecondTitle>{header}</SecondTitle>
        {fetchExample}
      </div>
      {body}
    </TitleWrapper>
  </>
);

export default Wrapper;
