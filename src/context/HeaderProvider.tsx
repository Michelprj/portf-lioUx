import { useEffect, useState } from 'react';
import HeaderContext from './HeaderContext';
import { HeaderProviderType } from '../types';

const keyLanguageStorage = 'i18nextLng';

const INITIAL_STATE = {
  languageOption: localStorage.getItem(keyLanguageStorage),
};

function HeaderProvider({ children }: HeaderProviderType) {
  const [values, setValues] = useState(INITIAL_STATE);
  const [storageMode, setStorageMode] = useState(false);
  const storageDarkMode: boolean = JSON.parse(localStorage
    .getItem('themeLight') as string);
  const [viewMenu, setViewMenu] = useState('disable');

  useEffect(() => {
    if (storageDarkMode === null) {
      setStorageMode(false);
    } else {
      setStorageMode(storageDarkMode);
    }
  }, [storageDarkMode]);

  const handleTheme = () => {
    setStorageMode(!storageMode);
    localStorage.setItem('themeLight', JSON.stringify(!storageMode));
  };

  const handleLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValues((prevState: any) => (
      {
        ...prevState,
        [event.target.name]: event.target.value,
      }
    ));

    localStorage.setItem(keyLanguageStorage, event.target.value);
    // navigate('/');
    window.location = window.location;
  };

  const valuesLanguage = [
    {
      country: 'pt-BR',
      acronym: 'PT',
    },
    {
      country: 'en-US',
      acronym: 'EN',
    },
  ];

  const value = {
    handleTheme,
    values,
    handleLanguage,
    storageMode,
    valuesLanguage,
    setViewMenu,
    viewMenu,
    // applyBlurFilter,
  };

  return (
    <HeaderContext.Provider value={ value }>
      {children}
    </HeaderContext.Provider>
  );
}

export default HeaderProvider;
