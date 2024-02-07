import { useContext } from 'react';
import { Container } from './style';
import HeaderContext from '../../context/HeaderContext';
import { i18n } from '../../translate/i18n';

function Contacts() {
  const { storageMode } = useContext(HeaderContext);
  return (
    <Container id="contacts">
      <div className="contacts-text">
        <div className="text-contacts">
          <h2>{i18n.t('contactsText.text1')}</h2>
          <p>{i18n.t('contactsText.text2')}</p>
        </div>
        <div className="contacts-icons">
          <a href="https://www.linkedin.com/in/michelprdev/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedInIcon.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Michelprj" target="_blank" rel="noopener noreferrer">
            <img src="/githubIcon.png" alt="GitHub" />

          </a>
          <a
            href="mailto:michelpr1224@gmail.com?subject=&body="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/emailIcon.png" alt="E-mail" />

          </a>
          <a
            href="https://wa.me/5527999855540?text=Ol%C3%A1%21+Preciso+falar+com+voc%C3%AA%21+"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/phoneIcon.png" alt="Phone" />

          </a>
        </div>
      </div>
      <div className="contacts-image">
        <img
          src={ storageMode ? '/imgContactDark.png' : '/imgContactLight.png' }
          alt="Contact Img"
        />
      </div>
    </Container>
  );
}

export default Contacts;
