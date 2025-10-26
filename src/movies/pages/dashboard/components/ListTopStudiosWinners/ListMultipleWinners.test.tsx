import { afterEach, describe, expect, it, vi } from 'vitest'
import { renderProvider } from '@testing/wrappers/base-provider'
import { screen } from '@testing-library/dom'
import { studiosWithWinCount } from '~/movies/services/top-studios-winners'

import { ListTopStudiosWinners } from './index'

vi.mock('~/movies/services/top-studios-winners')

const studiosWithWinCountSpy = vi.mocked(studiosWithWinCount)

describe('ListTopStudiosWinners', () => {
  studiosWithWinCountSpy.mockRejectedValue({ success: false })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render top studios panel with correct props', () => {
    renderProvider(<ListTopStudiosWinners />)

    expect(screen.getByTestId('panel-top-studios-winners')).toBeInTheDocument()
    expect(screen.getByText('Top 3 studios with winners')).toBeInTheDocument()
  })

  it('should render table header text and no results when service fails', () => {
    renderProvider(<ListTopStudiosWinners />)

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Win Count')).toBeInTheDocument()
    expect(screen.getByText('No records to display')).toBeInTheDocument()
  })

  it('should render the table data when calling the success service', async () => {
    const response = {
      studios: [
        { name: 'Columbia Pictures', winCount: 13 },
        { name: 'Warner Bros.', winCount: 9 },
        { name: 'John Pictures', winCount: 9 },
        { name: 'XPTO Pictures', winCount: 9 },
      ],
    }
    studiosWithWinCountSpy.mockResolvedValueOnce(response as never)

    renderProvider(<ListTopStudiosWinners />)

    expect(await screen.findByText('Columbia Pictures')).toBeInTheDocument()
    expect(screen.getByText('13')).toBeInTheDocument()
    expect(screen.getByText('Warner Bros.')).toBeInTheDocument()
    expect(screen.getByText('John Pictures')).toBeInTheDocument()
    expect(screen.queryByText('XPTO Pictures')).not.toBeInTheDocument()
  })
})
