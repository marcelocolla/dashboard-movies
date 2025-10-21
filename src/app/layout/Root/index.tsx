import { Outlet } from 'react-router'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Navbar } from '~/app/components/Navbar'
import { AppBarWrapper, ContentWrapper, RootWrapper } from './styles'

export function LayoutRoot() {
  return (
    <RootWrapper>
      <AppBarWrapper position="static">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Marcelo Colla
          </Typography>
          <Link
            href="https://www.linkedin.com/in/marcelocolla/"
            target="_blank"
            color="inherit"
            rel="external nofollow"
            title="Marcelo Colla no Linkedin"
          >
            in/marcelocolla
          </Link>
        </Toolbar>
      </AppBarWrapper>

      <Navbar />

      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </RootWrapper>
  )
}
