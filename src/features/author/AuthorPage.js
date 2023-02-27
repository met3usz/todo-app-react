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
              Aktualnie uczę się
              <b> Reacta </b> razem z całą społecznością <b>You</b>Code!
            </p>
            <p>
              Lubię <em>japońską</em> motoryzację oraz interesuję się
              <em> fotografią</em>.
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
