import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import type { PropsWithChildren } from 'react'
import { theme } from '~/app/core/theme'

export function ThemeProvider({ children }: PropsWithChildren) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
