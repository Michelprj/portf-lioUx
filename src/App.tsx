import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/header';
import HeaderContext from './context/HeaderContext';
import dark from './styles/themes/dark';
import ligth from './styles/themes/ligth';
import GlobalStyles from './styles/globalStyles';

function App() {
  const { storageMode } = useContext(HeaderContext);

  return (
    <ThemeProvider theme={ storageMode ? dark : ligth }>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
