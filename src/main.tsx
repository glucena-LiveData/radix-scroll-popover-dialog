import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './index.css';
import * as Tooltip from '@radix-ui/react-tooltip';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tooltip.Provider>
      <App />
    </Tooltip.Provider>  
  </StrictMode>,
)
