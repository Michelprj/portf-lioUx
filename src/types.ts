export type HeaderContextType = {
  handleTheme: () => void;
  values: {
    languageOption: any;
  };
  handleLanguage: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  storageMode: boolean;
  valuesLanguage: {
    country: string;
    acronym: string;
  }[];
  setViewMenu: React.Dispatch<React.SetStateAction<string>>;
  viewMenu: string;
  // applyBlurFilter: boolean;
};

export type HeaderProviderType = {
  children: React.ReactNode;
};
