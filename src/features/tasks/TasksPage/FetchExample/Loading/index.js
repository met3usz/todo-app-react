import { TailSpin } from 'react-loader-spinner';
import { StyledParagraph, Wrapper } from './styled';

const Loading = () => {
  return (
    <Wrapper>
      <TailSpin width="20" height="20" color="hsl(187,100%,23%)" />
      <StyledParagraph> Ładowanie...</StyledParagraph>
    </Wrapper>
  );
};

export default Loading;
