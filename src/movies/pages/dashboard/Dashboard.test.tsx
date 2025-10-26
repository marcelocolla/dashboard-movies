import { describe, expect, it, vi } from 'vitest'
import { renderProvider } from '@testing/wrappers/base-provider'

import Dashboard from './index'
import { screen } from '@testing-library/dom'

vi.mock('./components/ListMovieWinners', () => ({
  ListMovieWinners: () => <div data-testid="panel-list-winners-by-year" />,
}))
vi.mock('./components/ProducersIntervalBetweenWins', () => ({
  ProducersIntervalBetweenWins: () => <div data-testid="panel-producer-winners" />,
}))

describe('Dashboard', () => {
  it('should render all panel on dashboard page', () => {
    renderProvider(<Dashboard />)

    expect(screen.getByTestId('dashboard-container')).toBeInTheDocument()
    expect(screen.getByTestId('panel-multiple-winners')).toBeInTheDocument()
    expect(screen.getByTestId('panel-top-studios-winners')).toBeInTheDocument()
    expect(screen.getByTestId('panel-producer-winners')).toBeInTheDocument()
    expect(screen.getByTestId('panel-list-winners-by-year')).toBeInTheDocument()
  })
})
