import Grid from '@mui/material/Grid'
import { Panel } from '~/movies/components/Panel'
import { ListMultipleWinners } from './components/ListMultipleWinners'
import { ListTopStudiosWinners } from './components/ListTopStudiosWinners'
import { ProducersIntervalBetweenWins } from './components/ProducersIntervalBetweenWins'

export default function Dashboard() {
  return (
    <Grid container padding={2} spacing={2}>
      <Grid size={{ md: 6 }}>
        <ListMultipleWinners />
      </Grid>
      <Grid size={{ md: 6 }}>
        <ListTopStudiosWinners />
      </Grid>
      <Grid size={{ md: 6 }}>
        <ProducersIntervalBetweenWins />
      </Grid>
      <Grid size={{ md: 6 }}>
        <Panel title="List movie by year">[[ list items ]]</Panel>
      </Grid>
    </Grid>
  )
}
