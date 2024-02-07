import { useContext } from 'react';
import { Container } from './style';
import { i18n } from '../../translate/i18n';
import HeaderContext from '../../context/HeaderContext';

function Home() {
  const { storageMode } = useContext(HeaderContext);
  return (
    <Container id="home">
      <img
        className="geometric-image"
        src={ storageMode
          ? '/geometricDark.svg' : '/geometricLight.svg' }
        alt="Geometric Item"
      />
      <div className="profile">
        <img
          src="/profile.svg"
          alt="profile"
        />
      </div>

      <div className="container-text">
        <p className="first-child">
          {i18n.t('apresentationText.firstText')}
        </p>
        <p className="change-color">
          {i18n.t('apresentationText.secondText')}
        </p>
        <p className="">
          {' '}
          {i18n.t('apresentationText.thirdText')}
        </p>
      </div>
    </Container>
  );
}

export default Home;
