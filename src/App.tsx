import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/header';
import HeaderContext from './context/HeaderContext';
import dark from './styles/themes/dark';
import ligth from './styles/themes/ligth';
import GlobalStyles from './styles/globalStyles';
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';

function App() {
  const { storageMode } = useContext(HeaderContext);

  return (
    <ThemeProvider theme={ storageMode ? dark : ligth }>
      <GlobalStyles />
      <Header />
      <Home />
      <About />
      <Skills />
    </ThemeProvider>
  );
}

export default App;
