import styled from 'styled-components';

export const TitleWrapper = styled.div`
  background: ${({ theme }) => theme.color.white};
  padding: 20px;
  margin-bottom: 0;
`;

export const Title = styled.h1`
  margin-top: 0;
`;

export const SecondTitle = styled.h2`
  margin: 0;
  padding: 0;
`;

export const SecondTitleWrapper = styled.div`
  margin-top: 0;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;
