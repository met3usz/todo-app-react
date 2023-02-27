import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.color.gray};
  padding: 5px;
  overflow: auto;
  margin: 0 20px 20px 20px;
`;
