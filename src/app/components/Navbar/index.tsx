import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import type { HTMLAttributes } from 'react'
import { Link } from 'react-router'

type NavbarProps = Readonly<HTMLAttributes<HTMLElement>>

const menus = [
  { label: 'Dashboard', to: '/' },
  { label: 'List', to: '/filmes' },
]

export function Navbar(props: NavbarProps) {
  return (
    <nav data-testid="app-navbar" {...props}>
      <List>
        {menus.map((menu) => (
          <ListItem disablePadding key={menu.label}>
            <ListItemButton component={Link} to={menu.to}>
              <ListItemText primary={menu.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  )
}
