export const tableStandardConfig = {
  enableColumnActions: false,
  enableColumnFilters: false,
  enableBottomToolbar: false,
  enableTopToolbar: false,
  muiCircularProgressProps: {
    size: 32,
  },
}

export const tableMinimalConfig = {
  ...tableStandardConfig,
  enableSorting: false,
}
