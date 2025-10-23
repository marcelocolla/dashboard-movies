import { useQuery } from '@tanstack/react-query'
import { Panel } from '~/movies/components/Panel'
import { yearsWithMultipleWinners } from '~/movies/services/multiple-winners'

import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { useTableColumns } from './useTableColumns'
import { tableMinimalConfig } from '~/app/core/constants/table'

export function ListMultipleWinners() {
  const { data, isLoading } = useQuery({
    queryKey: ['movies-years-multiple-winners'],
    queryFn: yearsWithMultipleWinners,
    initialData: { years: [] },
  })
  const columns = useTableColumns()
  const table = useMaterialReactTable({
    ...tableMinimalConfig,
    columns,
    data: data.years,
    state: { isLoading, density: 'compact' },
  })

  return (
    <Panel title="List years with multiple winners" testId="panel-multiple-winners">
      <MaterialReactTable table={table} />
    </Panel>
  )
}
