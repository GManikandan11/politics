// // contexts/LanguageProvider.tsx
// 'use client';

// import { createContext, useContext, useState, ReactNode } from 'react';

// type Language = 'en' | 'ta';

// interface LanguageContextType {
//   currentLanguage: Language;
//   setCurrentLanguage: (language: Language) => void;
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// export function LanguageProvider({ children }: { children: ReactNode }) {
//   const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

//   return (
//     <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// }


// contexts/LanguageProvider.tsx
'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isMounted, setIsMounted] = useState(false);

  // Load language from localStorage after component mounts (client-side only)
  useEffect(() => {
    setIsMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ta')) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Update localStorage whenever language changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('language', currentLanguage);
    }
  }, [currentLanguage, isMounted]);

  // Function to update language
  const handleSetLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}