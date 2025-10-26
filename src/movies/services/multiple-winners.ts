import { httpClient, type Response } from '~/app/core/services/http-client'
import type { MoviesWithMultipleWinners } from '~/movies/types/winners'

const API_URL = '/movies/yearsWithMultipleWinners'

export type MoviesWithMultipleWinnersData = {
  years: MoviesWithMultipleWinners[]
}

export async function yearsWithMultipleWinners() {
  const res = await httpClient.get<never, Response<MoviesWithMultipleWinnersData>>(API_URL)

  return res.data
}
