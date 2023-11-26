import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'

export const NavBar: React.FC = () => {
  const navigate = useNavigate()
  //TODO-> ARMAR UN NAVIGATE GENERICO EN FORMATO FUNCION PARA USARLO NE TODA LA APP
  return (
    <div>
      <nav>
        <ul className='navX'>
          <li>
            <button onClick={() => navigate('/home')}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate('/about')}>About</button>
          </li>

          <li>
            <button onClick={() => navigate('/cars')}>Cars</button>
          </li>
          {/* <li>
            <button
              onClick={() => {
                getCars()
              }}
            >
              Cars
            </button>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
