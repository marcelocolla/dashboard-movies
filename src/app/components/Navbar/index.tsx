import { List, ListItem, ListItemText } from '@mui/material'
import type { HTMLAttributes } from 'react'
import { Link } from 'react-router'
import { ListItemMenu } from './styles'

type NavbarProps = Readonly<HTMLAttributes<HTMLElement>> & {
  readonly activeTo?: string
}

const menus = [
  { label: 'Dashboard', to: '/' },
  { label: 'List', to: '/filmes' },
]

export function Navbar({ activeTo, ...props }: NavbarProps) {
  return (
    <nav data-testid="app-navbar" {...props}>
      <List>
        {menus.map((menu) => (
          <ListItem disablePadding key={menu.label}>
            <ListItemMenu component={Link} to={menu.to} selected={menu.to === activeTo}>
              <ListItemText primary={menu.label} />
            </ListItemMenu>
          </ListItem>
        ))}
      </List>
    </nav>
  )
}
