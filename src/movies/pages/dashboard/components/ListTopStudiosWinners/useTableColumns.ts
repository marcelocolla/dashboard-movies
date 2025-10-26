import { useMemo } from 'react'
import type { MoviesTopStudiosWinners } from '~/movies/types/winners'
import type { MRT_ColumnDef } from 'material-react-table'

export function useTableColumns() {
  const columns = useMemo<MRT_ColumnDef<MoviesTopStudiosWinners>[]>(
    () => [
      {
        header: 'Name',
        accessorKey: 'name',
      },
      {
        header: 'Win Count',
        accessorKey: 'winCount',
        size: 80,
      },
    ],
    [],
  )

  return columns
}
