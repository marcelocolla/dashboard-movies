import { useQuery } from '@tanstack/react-query'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { tableMinimalConfig } from '~/app/core/constants/table'
import { Panel } from '~/movies/components/Panel'
import { producersIntervalBetweenWinners } from '~/movies/services/producer-winners'
import { useTableColumns } from './useTableColumns'
import { MaximumTitle, MinimumTitle } from './styles'

export function ProducersIntervalBetweenWins() {
  const { data, isLoading } = useQuery({
    queryKey: ['movies-producers-winners'],
    queryFn: producersIntervalBetweenWinners,
  })
  const columns = useTableColumns()
  const tableMaximum = useMaterialReactTable({
    ...tableMinimalConfig,
    columns,
    data: data?.max || [],
    state: { isLoading, density: 'compact' },
  })
  const tableMinimum = useMaterialReactTable({
    ...tableMinimalConfig,
    columns,
    data: data?.min || [],
    state: { isLoading, density: 'compact' },
  })

  return (
    <Panel title="Producers with longest and shortest internal between wins" data-testid="panel-producer-winners">
      <MaximumTitle variant="h6">Maximum</MaximumTitle>
      <MaterialReactTable table={tableMaximum} />

      <MinimumTitle variant="h6">Minimum</MinimumTitle>
      <MaterialReactTable table={tableMinimum} />
    </Panel>
  )
}
