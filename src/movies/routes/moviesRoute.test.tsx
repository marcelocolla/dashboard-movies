import { describe, expect, it } from 'vitest'
import { moviesRoute } from '.'

describe('Movies routes', () => {
  it('should return correct routes', () => {
    expect(moviesRoute.children).toHaveLength(2)
  })

  it('should configure dashboard route', () => {
    const [dashboard] = moviesRoute.children || []

    expect(dashboard.index).toBe(true)
    expect(dashboard.path).toBeUndefined()
  })

  it('should configure movies route', () => {
    const [, listMovies] = moviesRoute.children || []
    expect(listMovies.index).toBeUndefined()
    expect(listMovies.path).toEqual('filmes')
  })
})
