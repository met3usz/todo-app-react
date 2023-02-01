import styled, { css } from 'styled-components';

export const Item = styled.li`
  padding: 5px;
  margin: 5px 0;
  border-bottom: 1px solid hsl(0, 0%, 80%);
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
  color: hsl(0, 0%, 100%);
  width: 35px;
  height: 35px;
  border-radius: 0;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s ease;

  ${({ done }) =>
    done &&
    css`
      background-color: hsl(123, 66%, 26%);
      &:hover {
        background-color: hsl(122, 75%, 36%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: hsl(351, 82%, 51%);
      &:hover {
        background-color: hsl(8, 80%, 57%);
      }
    `}
`;

export const Content = styled.p`
  margin: 0 20px;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;
