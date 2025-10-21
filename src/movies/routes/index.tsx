import { lazy } from 'react'
import type { RouteObject } from 'react-router'

const Dashboard = lazy(() => import('~/movies/pages/dashboard'))
const ListMovies = lazy(() => import('~/movies/pages/listMovies'))

export const moviesRoute: RouteObject = {
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
    {
      path: 'filmes',
      element: <ListMovies />,
    },
  ],
}
