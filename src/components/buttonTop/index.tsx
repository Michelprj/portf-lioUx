import { Link } from 'react-scroll';
import { useContext } from 'react';
import { Container } from './style';
import HeaderContext from '../../context/HeaderContext';

function ButtonTop() {
  const { storageMode } = useContext(HeaderContext);
  return (
    <Container>
      <Link
        to="home"
        spy
        smooth
        offset={ 50 }
        duration={ 500 }
      >
        <img
          src={
          storageMode ? '/arrowDark.svg' : '/arrowLight.svg'
}
          alt="Button Top"
        />
      </Link>
    </Container>
  );
}

export default ButtonTop;
