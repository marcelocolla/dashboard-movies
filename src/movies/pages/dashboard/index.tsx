import Grid from '@mui/material/Grid'
import { ListMultipleWinners } from './components/ListMultipleWinners'
import { ListTopStudiosWinners } from './components/ListTopStudiosWinners'
import { ProducersIntervalBetweenWins } from './components/ProducersIntervalBetweenWins'
import { ListMovieWinners } from './components/ListMovieWinners'

const GRID_SIZE = { sm: 12, md: 6 }

export default function Dashboard() {
  return (
    <Grid container padding={2} spacing={2} data-testid="dashboard-container">
      <Grid size={GRID_SIZE}>
        <ListMultipleWinners />
      </Grid>
      <Grid size={GRID_SIZE}>
        <ListTopStudiosWinners />
      </Grid>
      <Grid size={GRID_SIZE}>
        <ProducersIntervalBetweenWins />
      </Grid>
      <Grid size={GRID_SIZE}>
        <ListMovieWinners />
      </Grid>
    </Grid>
  )
}
