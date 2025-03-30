import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LaptopPricePredictor from './LaptopPricePredictor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LaptopPricePredictor />
  </StrictMode>,
)
