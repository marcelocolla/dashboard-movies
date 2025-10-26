import { useMemo } from 'react'
import type { MoviesWithMultipleWinners } from '~/movies/types/winners'
import type { MRT_ColumnDef } from 'material-react-table'

export function useTableColumns() {
  const columns = useMemo<MRT_ColumnDef<MoviesWithMultipleWinners>[]>(
    () => [
      {
        header: 'Year',
        accessorKey: 'year',
      },
      {
        header: 'Win Count',
        accessorKey: 'winnerCount',
        size: 80,
      },
    ],
    [],
  )

  return columns
}
