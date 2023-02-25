import styled from 'styled-components';

export const StyldeForm = styled.form`
  background-color: hsl(0, 0%, 100%);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  padding: 0 20px 20px 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 0;
  border: 0;
  outline: none;
  color: hsl(0, 0%, 100%);
  background-color: hsl(187, 100%, 23%);
  overflow: auto;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    background-color: hsl(187, 100%, 35%);
    transform: scale(1.05);
  }
`;
