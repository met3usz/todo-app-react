import {
  ExampleWrapper,
  SecondTitle,
  SecondTitleWrapper,
  Title,
  TitleWrapper,
} from './styled';

const Header = ({ body, title, header, fetchExample }) => (
  <>
    <Title>{title}</Title>

    <TitleWrapper>
      <SecondTitleWrapper>
        <SecondTitle>{header}</SecondTitle>
        <ExampleWrapper>{fetchExample}</ExampleWrapper>
      </SecondTitleWrapper>
      {body}
    </TitleWrapper>
  </>
);

export default Header;
