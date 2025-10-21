import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'

export const RootWrapper = styled('main')({
  minHeight: '100vh',
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: '200px 1fr',
  gridTemplateAreas: `
      "header header"
      "sidebar content"
    `,
  ['& > navbar']: {
    gridArea: 'sidebar',
  },
})

export const AppBarWrapper = styled(AppBar)({
  gridArea: 'header',
})
export const ContentWrapper = styled('section')({
  gridArea: 'content',
})
