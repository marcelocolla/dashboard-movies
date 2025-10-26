import { Suspense } from 'react'
import { AppRoutes } from './routes'
import { ReactQueryProvider } from './providers/react-query'
import { ThemeProvider } from './providers/theme'

export function AppBootstrap() {
  return (
    <Suspense>
      <ReactQueryProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </ReactQueryProvider>
    </Suspense>
  )
}
