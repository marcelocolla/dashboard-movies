import { useMemo } from 'react'
import type { ProducerWinner } from '~/movies/types/producer-winners'
import type { MRT_ColumnDef } from 'material-react-table'

export function useTableColumns() {
  const columns = useMemo<MRT_ColumnDef<ProducerWinner>[]>(
    () => [
      {
        header: 'Producer',
        accessorKey: 'producer',
      },
      {
        header: 'Interval',
        accessorKey: 'interval',
        size: 90,
      },
      {
        header: 'Previous Year',
        accessorKey: 'previousWin',
        size: 100,
      },
      {
        header: 'Following Year',
        accessorKey: 'followingWin',
        size: 100,
      },
    ],
    [],
  )

  return columns
}
