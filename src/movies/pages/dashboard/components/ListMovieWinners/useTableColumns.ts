import { useMemo } from 'react'
import type { MoviesWinnersByYear } from '~/movies/types/winners'
import type { MRT_ColumnDef } from 'material-react-table'

export function useTableColumns() {
  const columns = useMemo<MRT_ColumnDef<MoviesWinnersByYear>[]>(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
        size: 60,
      },
      {
        header: 'Year',
        accessorKey: 'year',
        size: 60,
      },
      {
        header: 'Title',
        accessorKey: 'title',
      },
    ],
    [],
  )

  return columns
}
