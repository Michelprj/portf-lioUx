import React from 'react';
import { i18n } from '../../translate/i18n';
import { Container } from './style';

function About() {
  return (
    <Container id="about">
      <div className="about-text">

        <h2>{i18n.t('aboutText.subtitle')}</h2>
        <p>{i18n.t('aboutText.paragraph1')}</p>

      </div>
    </Container>
  );
}

export default About;
