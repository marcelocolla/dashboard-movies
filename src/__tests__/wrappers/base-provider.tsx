import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { MemoryRouter, type MemoryRouterProps } from 'react-router'
import { ThemeProvider } from '~/app/providers/theme'

type AppWrappersArgs = {
  router?: Omit<MemoryRouterProps, 'children'>
  client?: QueryClient
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export function renderProvider(ui: React.ReactNode, args?: AppWrappersArgs) {
  const client = args?.client ?? queryClient
  const router = args?.router

  return render(
    <MemoryRouter {...router}>
      <QueryClientProvider client={client}>
        <ThemeProvider>{ui}</ThemeProvider>
      </QueryClientProvider>
    </MemoryRouter>,
  )
}
