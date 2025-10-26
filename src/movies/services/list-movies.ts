import { httpClient, type Response } from '~/app/core/services/http-client'
import type { MoviesWinnersByYear } from '~/movies/types/winners'

export async function findWinnersByYear(year?: number) {
  const params = { year }
  const res = await httpClient.get<never, Response<MoviesWinnersByYear[]>>('/movies/winnersByYear', { params })

  return res.data
}
