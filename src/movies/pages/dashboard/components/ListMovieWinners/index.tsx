import { useQuery } from '@tanstack/react-query'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { Button, Stack, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Panel } from '~/movies/components/Panel'
import { findWinnersByYear } from '~/movies/services/list-movies'
import { tableMinimalConfig } from '~/app/core/constants/table'
import { useTableColumns } from './useTableColumns'
import { useState } from 'react'

const MAX_CHAR = 4

export function ListMovieWinners() {
  const [year, setYear] = useState<number>()
  const rawValue = year?.toString() || ''
  const isValid = rawValue.length === MAX_CHAR
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['movies-winners-by-year', year],
    queryFn: () => findWinnersByYear(year),
    enabled: false,
  })
  const columns = useTableColumns()
  const table = useMaterialReactTable({
    ...tableMinimalConfig,
    columns,
    data: data || [],
    state: { isLoading, density: 'compact' },
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawInteger = parseInt(event.target.value)

    setYear(rawInteger)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    refetch()
  }

  return (
    <Panel title="List movie winners by year" testId="panel-list-winners-by-year">
      <Stack direction="row" spacing={2} marginBlock={2} component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          size="small"
          type="number"
          value={year}
          placeholder="Search by year"
          onChange={handleChange}
          error={rawValue.length > MAX_CHAR}
        />
        <Button type="submit" variant="contained" disabled={!isValid}>
          <Search />
        </Button>
      </Stack>

      <MaterialReactTable table={table} />
    </Panel>
  )
}
