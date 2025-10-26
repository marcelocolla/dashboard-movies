import { httpClient, type Response } from '~/app/core/services/http-client'
import type { MoviesTopStudiosWinners } from '~/movies/types/winners'

const API_URL = '/movies/studiosWithWinCount'

export type MoviesTopStudiosWinnersData = {
  studios: MoviesTopStudiosWinners[]
}

export async function studiosWithWinCount() {
  const res = await httpClient.get<never, Response<MoviesTopStudiosWinnersData>>(API_URL)

  return res.data
}
