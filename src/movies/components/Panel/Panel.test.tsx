import { describe, expect, it } from 'vitest'
import { renderProvider } from '@testing/wrappers/base-provider'
import { Panel } from '.'
import { screen } from '@testing-library/dom'

const customElement = <h3>Custom children mocked</h3>

describe('Panel', () => {
  it('should render Panel with correct props', () => {
    renderProvider(<Panel title="Custom title" children={null} />)
    expect(screen.getByTestId('panel-container')).toBeInTheDocument()
    expect(screen.getByText('Custom title')).toBeInTheDocument()
  })

  it('should correctly render children when they are set', () => {
    renderProvider(<Panel title="Custom title" children={customElement} testId="custom-id" />)

    expect(screen.getByTestId('custom-id')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Custom children mocked')
  })
})
