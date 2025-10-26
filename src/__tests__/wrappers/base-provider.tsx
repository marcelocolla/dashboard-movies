import { render } from '@testing-library/react'
import { MemoryRouter, type MemoryRouterProps } from 'react-router'
import { ThemeProvider } from '~/app/providers/theme'

type AppWrappersArgs = {
  router?: Omit<MemoryRouterProps, 'children'>
}

export function renderProvider(ui: React.ReactNode, args?: AppWrappersArgs) {
  const router = args?.router

  return render(
    <MemoryRouter {...router}>
      <ThemeProvider>{ui}</ThemeProvider>
    </MemoryRouter>,
  )
}
