import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HydratedRouter } from "react-router";

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <HydratedRouter />
  </StrictMode>,
)
