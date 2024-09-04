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
          <a
            href="https://wa.me/5527996205950"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/iconWhatsApp.svg" alt="WhatsApp" />
          </a>
          {/* <a href="https://www.linkedin.com/in/cassianefernandesp/" target="_blank" rel="noopener noreferrer">
            <img src="/iconLinkedIn.svg" alt="LinkedIn" />
          </a> */}
          <a
            href="mailto:fernandescassiane93@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/iconEmail.svg" alt="E-mail" />

          </a>
        </div>
      </div>
      <div className="contacts-image">
        <img
          src={ storageMode ? '/imageDarkContact.svg' : '/imageLightContact.svg' }
          alt="Contact Img"
        />
      </div>
    </Container>
  );
}

export default Contacts;
