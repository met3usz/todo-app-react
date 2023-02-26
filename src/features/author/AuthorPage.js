import { Container } from '../../common/Container/styled';
import Header from '../tasks/TasksPage/Header';

function Author() {
  return (
    <Container>
      <Header
        body={
          <>
            <p>
              <strong>Hej! </strong>
              Aktualnie jestem studentem pierwszego roku na
              <b> Uniwersytecie Marii Curie-Skłodowskiej w Lublinie</b>
            </p>
            <p>
              Lubię <em>japońską</em> motoryzacją oraz interesuję się
              <em> fotografią</em>.
            </p>
            <p>
              Pasjonuję się rówież układaniem kostek <strong>Rubika.</strong>
            </p>
          </>
        }
        title={'O autorze'}
        header={'Mateusz Wąsik'}
      />
    </Container>
  );
}

export default Author;
