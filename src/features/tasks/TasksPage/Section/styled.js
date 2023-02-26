import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding: 0;
  margin-top: 15px;
  display: grid;
  grid-template-areas:
    'title buttons'
    'list list';

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  padding: 20px;
  margin: 0;
`;
