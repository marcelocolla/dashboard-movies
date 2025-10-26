import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

export const PanelWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  width: '100%',
}))
export const PanelTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
}))
