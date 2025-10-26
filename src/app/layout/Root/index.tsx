import { Outlet } from 'react-router'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { LinkedIn } from '@mui/icons-material'
import { useLocation } from 'react-router'
import { AppBarWrapper, ContentWrapper, NavbarWrapper, ProfileLink, RootWrapper } from './styles'

export function LayoutRoot() {
  const location = useLocation()

  return (
    <RootWrapper>
      <AppBarWrapper>
        <Typography variant="h5">Marcelo Colla</Typography>

        <ProfileLink>
          <LinkedIn />
          <Link
            href="https://www.linkedin.com/in/marcelocolla/"
            target="_blank"
            color="inherit"
            rel="external nofollow"
            title="Marcelo Colla no Linkedin"
          >
            in/marcelocolla
          </Link>
        </ProfileLink>
      </AppBarWrapper>

      <NavbarWrapper activeTo={location.pathname} />

      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </RootWrapper>
  )
}
