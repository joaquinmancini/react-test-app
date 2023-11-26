import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import Root from './Root'

const App: React.FC = () => (
  <HashRouter basename='/'>
    <Root />
  </HashRouter>
)

const container = document.getElementById('app')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
