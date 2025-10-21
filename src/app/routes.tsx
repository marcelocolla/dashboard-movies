import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { LayoutRoot } from './layout/Root'
import { moviesRoute } from '~/movies/routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutRoot />,
    children: [moviesRoute],
  },
])

export function AppRoutes() {
  return <RouterProvider router={router} />
}
