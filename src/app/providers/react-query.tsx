import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

const queryClient = new QueryClient()

type ReactQueryProviderProps = PropsWithChildren & {
  readonly client?: QueryClient
}

export function ReactQueryProvider({ children, client = queryClient }: Readonly<ReactQueryProviderProps>) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
