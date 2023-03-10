import styled from 'styled-components';

export const ListWrapper = styled.ul`
  padding: 20px;
  list-style-type: none;
  grid-column-start: span 2;
  border-top: 1px solid ${({ theme }) => theme.color.gray};
  margin-top: 0;
`;
