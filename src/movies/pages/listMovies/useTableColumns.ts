import { useMemo } from 'react'
import type { MRT_ColumnDef } from 'material-react-table'
import type { MovieListItem } from '~/movies/types/movies'

export function useTableColumns() {
  const columns = useMemo<MRT_ColumnDef<MovieListItem>[]>(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
        size: 60,
        enableColumnFilter: false,
      },
      {
        header: 'Year',
        accessorKey: 'year',
        size: 80,
      },
      {
        header: 'Title',
        accessorKey: 'title',
        enableColumnFilter: false,
      },
      {
        header: 'Winner?',
        accessorKey: 'winner',
        size: 60,
        Cell: ({ row }) => (row.original.winner ? 'Yes' : 'No'),
        muiFilterTextFieldProps: { placeholder: 'Yes/No' },
        filterVariant: 'select',
        filterSelectOptions: [
          { label: 'Yes', value: 'true' },
          { label: 'No', value: 'false' },
        ],
      },
    ],
    [],
  )

  return columns
}
