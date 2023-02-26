import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 18px;

  &.active {
    font-weight: 500;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style-type: none;
  background-color: ${({ theme }) => theme.color.teal};
  padding: 20px;
  margin: 0;
`;

export const ListItem = styled.li`
  transition: 0.5s ease;
  color: ${({ theme }) => theme.color.teal};

  &:hover {
    color: ${({ theme }) => theme.color.white};
    text-decoration: underline;
    transform: scale(1.05);
  }
`;
