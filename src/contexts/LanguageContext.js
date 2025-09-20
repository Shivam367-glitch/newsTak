import   { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const initialLang = localStorage.getItem('selectedLang')
    ? JSON.parse(localStorage.getItem('selectedLang'))
    : { value: 'en', label: 'English' };

  const [selectedLang, setSelectedLang] = useState(initialLang);

  
  useEffect(() => {
    localStorage.setItem('selectedLang', JSON.stringify(selectedLang));
  }, [selectedLang]);
   

  return (
    <LanguageContext.Provider value={{ selectedLang, setSelectedLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
