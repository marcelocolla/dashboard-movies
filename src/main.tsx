import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppBootstrap } from '~/app/bootstrap'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppBootstrap />
  </StrictMode>,
)
