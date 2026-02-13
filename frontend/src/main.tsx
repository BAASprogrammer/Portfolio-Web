import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Import fonts so Vite can process and serve them
import './assets/fonts/Inter-Regular.woff2'
import './assets/fonts/Inter-Medium.woff2'
import './assets/fonts/Inter-SemiBold.woff2'
import './assets/fonts/Inter-Bold.woff2'

// Import global styles
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
