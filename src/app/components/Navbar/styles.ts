import { styled } from '@mui/material/styles'
import { ListItemButton, type ListItemButtonProps } from '@mui/material'

type ListItemMenuProps = ListItemButtonProps & {
  readonly to?: string
}

export const ListItemMenu = styled(ListItemButton)<ListItemMenuProps>(({ theme }) => ({
  marginBottom: '1px',
  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
}))
