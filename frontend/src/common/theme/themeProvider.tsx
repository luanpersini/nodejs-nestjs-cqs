import * as colors from './colors'

import { DefaultTheme, ThemeProvider } from 'styled-components'

import { ReactFCWithChildrenOnly } from '../../react'
import GlobalStyle from './globalStyle'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    colors: typeof colors
  }
}

export const defaultTheme: DefaultTheme = {
  borderRadius: '6px',
  colors
}

export const StatefulThemeProvider: ReactFCWithChildrenOnly = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
