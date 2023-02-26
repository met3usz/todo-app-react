import styled from 'styled-components';

export const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding-top: 20px;
    text-align: center;
  }
`;
