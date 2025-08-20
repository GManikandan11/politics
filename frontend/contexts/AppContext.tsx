// // contexts/AppContext.tsx
// 'use client'

// import { createContext, useState, useContext } from 'react'

// type Language = 'en' | 'ta'
// type Theme = 'light' | 'dark'

// interface AppContextType {
//   language: Language
//   setLanguage: (lang: Language) => void
//   theme: Theme
//   setTheme: (theme: Theme) => void
// }

// const AppContext = createContext<AppContextType | undefined>(undefined)

// export function AppProvider({ children }: { children: React.ReactNode }) {
//   const [language, setLanguage] = useState<Language>('en')
//   const [theme, setTheme] = useState<Theme>('light')

//   return (
//     <AppContext.Provider value={{ language, setLanguage, theme, setTheme }}>
//       {children}
//     </AppContext.Provider>
//   )
// }

// export function useAppContext() {
//   const context = useContext(AppContext)
//   if (!context) {
//     throw new Error('useAppContext must be used within an AppProvider')
//   }
//   return context
// }