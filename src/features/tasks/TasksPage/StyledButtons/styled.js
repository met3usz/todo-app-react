import styled from 'styled-components';

export const StyledButtons = styled.div`
  padding: 20px;
  margin-top: 0;
  align-self: center;
  justify-self: flex-end;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 10px;
  }
`;

export const Button = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  color: hsl(187, 100%, 23%);
  cursor: pointer;
  transition: 0.5s ease;
  margin: 0 5px;

  &:hover {
    color: hsl(187, 100%, 35%);
  }

  &:disabled {
    color: hsl(0, 0%, 65%);
    cursor: default;
  }
`;
