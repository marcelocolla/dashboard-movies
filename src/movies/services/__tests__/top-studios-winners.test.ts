import { afterEach, describe, expect, it, vi } from 'vitest'
import { httpClient } from '~/app/core/services/http-client'
import { studiosWithWinCount } from '../top-studios-winners'

vi.mock('~/app/core/services/http-client')

const httpClientGET = vi.spyOn(httpClient, 'get')
const response = {
  data: [{ year: 2020, winCount: 2 }],
}

describe('studiosWithWinCount', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return correct when the service is called successfully', async () => {
    httpClientGET.mockResolvedValueOnce(response)
    const result = await studiosWithWinCount()

    expect(result).toStrictEqual(response.data)
    expect(httpClientGET).toHaveBeenCalledWith('/movies/studiosWithWinCount')
  })
})
