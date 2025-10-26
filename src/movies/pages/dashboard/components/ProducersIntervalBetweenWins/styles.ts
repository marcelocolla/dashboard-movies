import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const MaximumTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))
export const MinimumTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.text.secondary,
}))
