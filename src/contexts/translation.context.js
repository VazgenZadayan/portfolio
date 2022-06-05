import { createContext, useCallback, useContext, useState } from 'react';

import { languages } from './languages';

import translations from './translations.json';

const TranslationContext = createContext(languages.en);

function TranslationProvider({ children }) {
  const [currentLang, setLang] = useState(languages.en);

  const setLanguage = useCallback(
    lang => {
      setLang(lang);
    },
    [setLang]
  );

  const t = useCallback(
    key => {
      return translations[currentLang][key];
    },
    [currentLang]
  );

  return (
    <TranslationContext.Provider
      value={{
        setLanguage,
        t,
        lang: currentLang,
        supportedLanguages: languages,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslations = () => {
  const context = useContext(TranslationContext);

  return context;
};

export default TranslationProvider;
