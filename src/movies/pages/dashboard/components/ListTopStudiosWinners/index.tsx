import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { Panel } from '~/movies/components/Panel'
import { studiosWithWinCount } from '~/movies/services/top-studios-winners'

import { tableMinimalConfig } from '~/app/core/constants/table'
import { useTableColumns } from './useTableColumns'

const MAX_STUDIOS = 3

export function ListTopStudiosWinners() {
  const { data, isLoading } = useQuery({
    queryKey: ['movies-top3-studios-winners'],
    queryFn: studiosWithWinCount,
    initialData: { studios: [] },
  })
  const studios = useMemo(() => data.studios.slice(0, MAX_STUDIOS), [data.studios])
  const columns = useTableColumns()
  const table = useMaterialReactTable({
    ...tableMinimalConfig,
    columns,
    data: studios,
    state: { isLoading, density: 'compact' },
  })

  return (
    <Panel title={`Top ${MAX_STUDIOS} studios with winners`} testId="panel-top-studios-winners">
      <MaterialReactTable table={table} />
    </Panel>
  )
}
