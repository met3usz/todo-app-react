import styled from 'styled-components';

export default styled.input`
  border: 1px solid ${({ theme }) => theme.color.gray};
  padding: 5px;
  overflow: auto;
`;
