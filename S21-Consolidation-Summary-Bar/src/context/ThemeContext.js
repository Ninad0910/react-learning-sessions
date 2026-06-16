import { createContext, useContext } from 'react'

export const ThemeContext = createContext(null)

export default function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('Used outside of ThemeContext.Provider wrapped Component')
  }
  return context
}
