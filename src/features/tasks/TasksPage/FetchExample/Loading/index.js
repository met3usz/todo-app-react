import { TailSpin } from 'react-loader-spinner';
import { StyledParagraph, Wrapper } from './styled';

const Loading = () => {
  return (
    <Wrapper>
      <TailSpin width="18" height="18" color="hsl(187,100%,23%)" />
      <StyledParagraph> Ładowanie...</StyledParagraph>
    </Wrapper>
  );
};

export default Loading;
