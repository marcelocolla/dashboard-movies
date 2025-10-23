import { Suspense } from 'react'
import { AppRoutes } from './routes'
import { ReactQueryProvider } from './providers/react-query'

export function AppBootstrap() {
  return (
    <Suspense>
      <ReactQueryProvider>
        <AppRoutes />
      </ReactQueryProvider>
    </Suspense>
  )
}
