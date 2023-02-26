import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding-top: 20px;
    justify-content: center;
  }
`;

export const StyledParagraph = styled.p`
  margin: 0;
  margin-left: 10px;
  padding: 0;
`;
