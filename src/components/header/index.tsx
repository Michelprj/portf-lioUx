import { useContext } from 'react';
import { Link } from 'react-scroll';
import SwitchTheme from './switchTheme';
import { Container, ContainerSelector, Select, TextsHeader } from './style.';
import HeaderContext from '../../context/HeaderContext';
import { i18n } from '../../translate/i18n';

function Header() {
  const { values,
    setViewMenu, viewMenu, handleLanguage, valuesLanguage } = useContext(HeaderContext);

  const toggleMenu = () => {
    if (viewMenu !== 'actived') {
      setViewMenu('actived');
    } else {
      setViewMenu('disable');
    }
  };

  return (
    <header>
      <Container>
        <img src="/logo.svg" alt="logo" className="logo" />

        <button
          className="btn-hamburger"
          onClick={ toggleMenu }
          aria-label="Burger menu"
        >
          <span className={ viewMenu === 'actived' ? 'hamburgerOpen' : 'hamburger' } />
        </button>

        <div className="container-textHeader-and-buttons">
          <TextsHeader className={ viewMenu }>
            <Link
              to="about"
              activeClass="active"
              spy
              smooth
              offset={ 50 }
              duration={ 800 }
              onClick={ () => setViewMenu('disable') }
            >
              {i18n.t('headerTexts.textAbout')}

            </Link>
            <Link
              to="skills"
              activeClass="active"
              spy
              smooth
              offset={ 50 }
              duration={ 800 }
              onClick={ () => setViewMenu('disable') }
            >
              {i18n.t('headerTexts.textSkills')}

            </Link>
            <Link
              to="projects"
              activeClass="active"
              spy
              smooth
              offset={ 50 }
              duration={ 800 }
              onClick={ () => setViewMenu('disable') }
            >
              {i18n.t('headerTexts.textProjects')}

            </Link>
            <Link
              to="contacts"
              activeClass="active"
              spy
              smooth
              offset={ 50 }
              duration={ 800 }
              onClick={ () => setViewMenu('disable') }
            >
              {i18n.t('headerTexts.textContacts')}

            </Link>
          </TextsHeader>

          <ContainerSelector>
            <img
              src={ values.languageOption === 'pt-BR' ? '/pt.svg' : '/en.svg' }
              alt={ values.languageOption === 'pt-BR' ? 'ptIcon' : 'enIcon' }
              className="languageIcon"
            />

            <Select
              name="languageOption"
              onChange={ handleLanguage }
              value={ values.languageOption }
              id="languageOption"
              className="languageOption"
            >
              { valuesLanguage.map((value, index) => (
                <option key={ index } value={ value.country }>{value.acronym}</option>
              ))}
            </Select>
          </ContainerSelector>

          <SwitchTheme />
        </div>
      </Container>
    </header>

  );
}

export default Header;
