export type MoviesWithMultipleWinners = {
  year: number
  winnerCount: number
}

export type MoviesTopStudiosWinners = {
  name: string
  winCount: number
}

export type MoviesWinnersByYear = {
  id: number
  year: number
  title: string
  studios: string[]
  producers: string[]
  winner: boolean
}
