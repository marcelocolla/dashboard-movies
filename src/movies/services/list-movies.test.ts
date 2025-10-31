import { afterEach, describe, expect, it, vi } from 'vitest'
import { httpClient } from '~/app/core/services/http-client'
import { listAllMovies, findWinnersByYear } from './list-movies'

vi.mock('~/app/core/services/http-client')

const httpClientGET = vi.spyOn(httpClient, 'get')
const response = {
  data: [{ id: '1', year: 2020, title: 'Friday the 13th' }],
}

describe('listAllMovies', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should call the service with the correct parameters', async () => {
    httpClientGET.mockResolvedValueOnce(response)
    await listAllMovies({ pageIndex: 5, pageSize: 25 })

    expect(httpClientGET).toHaveBeenCalledWith('/movies', {
      params: { page: 5, size: 25 },
    })
  })

  it('should call the service with correct filters', async () => {
    httpClientGET.mockResolvedValueOnce(response)
    const columnFilters = [
      { id: 'year', value: '2020' },
      { id: 'winner', value: 'false' },
      { id: '', value: 'invalid' },
    ]
    await listAllMovies({ pageIndex: 1, pageSize: 10 }, columnFilters)

    expect(httpClientGET).toHaveBeenCalledWith('/movies', {
      params: { page: 1, size: 10, year: '2020', winner: 'false' },
    })
  })

  it('should return correct when the service is called successfully', async () => {
    httpClientGET.mockResolvedValueOnce(response)
    const result = await listAllMovies({ pageIndex: 1 })

    expect(result).toStrictEqual(response.data)
    expect(httpClientGET).toHaveBeenCalledWith('/movies', {
      params: { page: 1, size: 10 },
    })
  })
})

describe('findWinnersByYear', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should call the service with the correct parameters', async () => {
    httpClientGET.mockResolvedValueOnce(response)
    await findWinnersByYear()

    expect(httpClientGET).toHaveBeenCalledWith('/movies/winnersByYear', {
      params: { year: undefined },
    })
  })

  it('should return correct when the service is called successfully', async () => {
    httpClientGET.mockResolvedValueOnce(response)
    const result = await findWinnersByYear(2020)

    expect(result).toStrictEqual(response.data)
    expect(httpClientGET).toHaveBeenCalledWith('/movies/winnersByYear', {
      params: { year: 2020 },
    })
  })
})
