import { afterEach, describe, expect, it, vi } from 'vitest'
import { renderProvider } from '@testing/wrappers/base-provider'
import { screen } from '@testing-library/dom'
import ListMovies from './index'

import { listAllMovies } from '~/movies/services/list-movies'

vi.mock('~/movies/services/list-movies')

const listAllMoviesSpy = vi.mocked(listAllMovies)

describe('ListMovies', () => {
  listAllMoviesSpy.mockRejectedValue({ success: false })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render table header text and no results when service fails', () => {
    renderProvider(<ListMovies />)

    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('Year')).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Winner?')).toBeInTheDocument()
    expect(listAllMoviesSpy).toHaveBeenCalledWith(
      {
        pageIndex: 1,
        pageSize: 10,
      },
      [],
    )
  })
})
