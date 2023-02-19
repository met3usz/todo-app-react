import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: hsl(0, 0%, 100%);
  padding: 0;
  margin-top: 15px;
  display: grid;
  grid-template-areas:
    'title buttons'
    'list list';

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  padding: 20px;
  margin: 0;
`;
