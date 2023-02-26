import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.teal};
  cursor: pointer;
  transition: 0.5s ease;
  margin: 0 5px;

  &:hover {
    color: ${({ theme }) => theme.color.tealHover};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.disabled};
    cursor: default;
  }
`;
