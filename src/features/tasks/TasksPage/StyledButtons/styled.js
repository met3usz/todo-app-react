import styled from 'styled-components';

export const StyledButtons = styled.div`
  padding: 20px;
  margin-top: 0;
  align-self: center;
  justify-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 10px;
  }
`;
