import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import Root from './Root'
import { NavBar } from './components/NavBar'

//TODO -> RESOLVER QUE LA PRIMERA PAGINA QUE SE RENDERICE SEA EL HOME
// eslint-disable-next-line react-refresh/only-export-components
const App: React.FC = () => (
  <>
    <HashRouter>
      <NavBar></NavBar>
      <Root />
    </HashRouter>
  </>
)

const container = document.getElementById('app')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
