import { afterEach, describe, expect, it, vi } from 'vitest'
import { renderProvider } from '@testing/wrappers/base-provider'
import { fireEvent, screen, waitFor } from '@testing-library/dom'
import { findWinnersByYear } from '~/movies/services/list-movies'

import { ListMovieWinners } from './index'

vi.mock('~/movies/services/list-movies')

const findWinnersByYearSpy = vi.mocked(findWinnersByYear)

describe('ListMovieWinners', () => {
  findWinnersByYearSpy.mockRejectedValue({ success: false })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render top studios panel with correct props', () => {
    renderProvider(<ListMovieWinners />)

    expect(screen.getByTestId('panel-list-winners-by-year')).toBeInTheDocument()
    expect(screen.getByText('List movie winners by year')).toBeInTheDocument()
    expect(findWinnersByYearSpy).not.toHaveBeenCalled()
  })

  it('should render search input', () => {
    renderProvider(<ListMovieWinners />)

    const input = screen.getByPlaceholderText('Search by year')

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('name', 'search')
  })

  it('should render table header text and no results when service fails', () => {
    renderProvider(<ListMovieWinners />)

    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('Year')).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('No records to display')).toBeInTheDocument()
  })

  it('should render the table data when calling the success service', async () => {
    const response = [
      { id: '123-aaa', title: 'Columbia Pictures', year: 2020 },
      { id: '222-bbb', title: 'Warner Bros.', year: 2009 },
      { id: '333-abc', title: 'John Pictures', year: 2007 },
    ]
    findWinnersByYearSpy.mockResolvedValue(response as never)

    renderProvider(<ListMovieWinners />)

    const input = screen.getByPlaceholderText('Search by year')

    fireEvent.change(input, { target: { value: '2020' } })
    fireEvent.click(screen.getByTestId('search-button'))

    await waitFor(() => {
      expect(findWinnersByYearSpy).toHaveBeenCalled()
    })

    expect(findWinnersByYearSpy).toBeCalledWith(2020)
    expect(await screen.findByText('Columbia Pictures')).toBeInTheDocument()
    expect(screen.getByText('123-aaa')).toBeInTheDocument()
    expect(screen.getByText('2020')).toBeInTheDocument()

    expect(screen.getByText('222-bbb')).toBeInTheDocument()
    expect(screen.getByText('Warner Bros.')).toBeInTheDocument()
    expect(screen.getByText('2009')).toBeInTheDocument()
  })
})
