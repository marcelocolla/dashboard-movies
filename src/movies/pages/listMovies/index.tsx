import { useState } from 'react'
import { Box } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnFiltersState,
  type MRT_PaginationState,
} from 'material-react-table'
import { Panel } from '~/movies/components/Panel'
import { listAllMovies } from '~/movies/services/list-movies'
import { useTableColumns } from './useTableColumns'

export default function ListMovies() {
  const [pagination, setPagination] = useState<MRT_PaginationState>({ pageIndex: 1, pageSize: 10 })
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([])
  const { data, isLoading } = useQuery({
    queryKey: ['movies-list-all', pagination, columnFilters],
    queryFn: () => listAllMovies(pagination, columnFilters),
  })
  console.log('>>> columnFilters', columnFilters)

  const columns = useTableColumns()
  const table = useMaterialReactTable({
    enableTopToolbar: false,
    manualPagination: true,
    manualFiltering: true,
    initialState: {
      showColumnFilters: true,
    },
    columns,
    rowCount: data?.totalElements,
    data: data?.content || [],
    state: { isLoading, pagination, columnFilters },
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    paginationDisplayMode: 'pages',
  })

  return (
    <Box padding={2} data-testid="list-movies-container">
      <Panel title="List movies">
        <MaterialReactTable table={table} />
      </Panel>
    </Box>
  )
}
