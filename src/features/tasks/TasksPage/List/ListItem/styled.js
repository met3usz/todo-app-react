import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Item = styled.li`
  padding: 5px;
  margin: 5px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;

  ${({ hiden }) =>
    hiden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  width: 35px;
  height: 35px;
  border-radius: 0;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s ease;
`;

export const ToggleDoneButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.green};
  &:hover {
    background-color: ${({ theme }) => theme.color.greenHover};
  }
`;

export const RemoveButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.red};
  &:hover {
    background-color: ${({ theme }) => theme.color.redHover};
  }
`;

export const Content = styled.p`
  margin: 0 20px;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.teal};
  transition: 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.color.tealHover};
  }
`;
