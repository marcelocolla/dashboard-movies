import { httpClient, type Response } from '~/app/core/services/http-client'
import type { MoviesWinnersByYear } from '~/movies/types/winners'
import type { MovieListResponse } from '~/movies/types/movies'

type ListAllMoviesArgs = {
  pageIndex: number
  pageSize?: number
  winner?: boolean
  year?: string
}

type ListAllResponse = Response<MovieListResponse>

export async function listAllMovies(args: ListAllMoviesArgs) {
  const params = { size: args.pageSize ?? 10, page: args.pageIndex }
  const res = await httpClient.get<never, ListAllResponse>('/movies', { params })

  return res.data
}

export async function findWinnersByYear(year?: number) {
  const params = { year }
  const res = await httpClient.get<never, Response<MoviesWinnersByYear[]>>('/movies/winnersByYear', { params })

  return res.data
}
