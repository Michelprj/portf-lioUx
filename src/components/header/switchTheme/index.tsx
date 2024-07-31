import { useContext } from 'react';
import HeaderContext from '../../../context/HeaderContext';
import { Checkbox, Container, GlobalStyle, Label } from './style';

function SwitchTheme() {
  const { handleTheme, storageMode } = useContext(HeaderContext);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Checkbox
          id="chk"
          checked={ storageMode }
          onChange={ handleTheme }
        />
        <Label htmlFor="chk">
          <img src="/sun.svg" alt="sunTheme" />
          <img src="/moon.svg" alt="moonTheme" />
          <div className="ball" />
        </Label>
      </Container>
    </>
  );
}

export default SwitchTheme;
