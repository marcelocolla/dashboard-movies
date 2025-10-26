import { styled } from '@mui/material/styles'
import { Navbar } from '~/app/components/Navbar'

export const RootWrapper = styled('main')(({ theme }) => ({
  minHeight: '100vh',
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: '180px 1fr',
  gridTemplateAreas: `
      "header header"
      "sidebar content"
    `,
  ['& > navbar']: {
    gridArea: 'sidebar',
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '280px 1fr',
  },
}))

export const AppBarWrapper = styled('header')(({ theme }) => ({
  gridArea: 'header',
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(3, 2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}))
export const NavbarWrapper = styled(Navbar)({
  backgroundColor: '#e9eaea',
})
export const ContentWrapper = styled('section')({
  gridArea: 'content',
})
export const ProfileLink = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',

  a: {
    textDecoration: 'none',
    animation: 'all 0.2s ease-out',
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
}))
