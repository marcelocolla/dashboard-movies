import { Suspense } from 'react'
import { AppRoutes } from './routes'

export function AppBootstrap() {
  return (
    <Suspense>
      <AppRoutes />
    </Suspense>
  )
}
