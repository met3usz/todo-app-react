import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

export const StyledParagraph = styled.p`
  margin: 0;
  margin-left: 10px;
  padding: 0;
`;
