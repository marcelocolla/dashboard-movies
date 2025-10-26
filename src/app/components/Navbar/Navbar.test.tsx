import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { renderProvider } from '@testing/wrappers/base-provider'
import { Navbar } from '.'

describe('Navbar', () => {
  it('renders the navbar with default props', () => {
    renderProvider(<Navbar />)
    expect(screen.getByTestId('app-navbar')).toBeInTheDocument()
  })

  it('should render all menus correctly', () => {
    renderProvider(<Navbar />)

    const dashboard = screen.getByRole('link', { name: 'Dashboard' })
    const listAll = screen.getByRole('link', { name: 'List' })

    expect(dashboard).toBeInTheDocument()
    expect(dashboard).toHaveAttribute('href', '/')
    expect(listAll).toBeInTheDocument()
    expect(listAll).toHaveAttribute('href', '/filmes')
  })
})
