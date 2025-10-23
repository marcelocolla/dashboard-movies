import type { ReactNode } from 'react'
import { PanelWrapper, PanelTitle } from './styles'

type PanelProps = Readonly<{ title: string; children: ReactNode; testId?: string }>
export function Panel({ title, children, testId = 'panel-container' }: PanelProps) {
  return (
    <PanelWrapper data-testid={testId}>
      <PanelTitle variant="subtitle1">{title}</PanelTitle>

      {children}
    </PanelWrapper>
  )
}
