import { List, ListItem, StyledNavLink } from './styled';

const Navigation = () => {
  return (
    <List>
      <ListItem>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </ListItem>
      <ListItem>
        <StyledNavLink to="/autor">O mnie</StyledNavLink>
      </ListItem>
    </List>
  );
};

export default Navigation;
