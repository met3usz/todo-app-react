import styled from 'styled-components';

export const StyldeForm = styled.form`
  background-color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  padding: 0 20px 20px 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
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
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.teal};
  overflow: auto;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.tealHover};
    transform: scale(1.05);
  }
`;
