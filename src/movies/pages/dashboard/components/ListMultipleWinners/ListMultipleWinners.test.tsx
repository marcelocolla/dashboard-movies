import { afterEach, describe, expect, it, vi } from 'vitest'
import { renderProvider } from '@testing/wrappers/base-provider'
import { screen } from '@testing-library/dom'
import { yearsWithMultipleWinners } from '~/movies/services/multiple-winners'

import { ListMultipleWinners } from './index'

vi.mock('~/movies/services/multiple-winners')

const yearsWithMultipleWinnersSpy = vi.mocked(yearsWithMultipleWinners)
describe('ListMultipleWinners', () => {
  yearsWithMultipleWinnersSpy.mockRejectedValue({ success: false })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render panel with correct props', () => {
    renderProvider(<ListMultipleWinners />)

    expect(screen.getByTestId('panel-multiple-winners')).toBeInTheDocument()
    expect(screen.getByText('List years with multiple winners')).toBeInTheDocument()
  })

  it('should render table header text and no results when service fails', () => {
    renderProvider(<ListMultipleWinners />)

    expect(screen.getByText('Year')).toBeInTheDocument()
    expect(screen.getByText('Win Count')).toBeInTheDocument()
    expect(screen.getByText('No records to display')).toBeInTheDocument()
  })

  it('should render the table data when calling the success service', async () => {
    const response = {
      years: [{ year: 2020, winnerCount: 12 }],
    }
    yearsWithMultipleWinnersSpy.mockResolvedValueOnce(response as never)

    renderProvider(<ListMultipleWinners />)

    expect(await screen.findByText('2020')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
  })
})
