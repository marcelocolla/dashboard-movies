type Pagination = {
  unpaged: boolean
  pageNumber: number
  paged: boolean
  pageSize: number
  offset: number
}

export type MovieListItem = {
  id: number
  year: number
  title: string
  studios: string[]
  producers: string[]
  winner: boolean
}

export type MovieListResponse = {
  totalPages: number
  totalElements: number
  numberOfElements: number
  size: number
  number: number
  first: boolean
  last: boolean
  empty: boolean
  pageable: Pagination
  content: MovieListItem[]
}
