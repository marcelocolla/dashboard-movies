import type { HTMLAttributes } from 'react'
import { Link } from 'react-router'

type NavbarProps = Readonly<HTMLAttributes<HTMLElement>>

export function Navbar(props: NavbarProps) {
  return (
    <nav data-testid="app-navbar" {...props}>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/filmes">List</Link>
        </li>
      </ul>
    </nav>
  )
}
