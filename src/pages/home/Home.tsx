import { useEffect, useState } from 'react'
import { Auto, CarsResponse, useGetAutosService } from '../../services/service.ts'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { getCarsMock } from '../../Services/mock/CarsMock.ts'
const Home: React.FC = () => {
    const [cars, setCars] = useState<Auto[]>()
    const [isLoading, setIsLoading] = useState(false)
    // const [user, setUser] = useState(Promise<Auto[]>);
    const navigate = useNavigate()
    // const carsitos = getAutos()
    const { getAutos } = useGetAutosService()
  
    const getCars = () => {
      return console.log(cars)
    }
  
    useEffect(() => {
      setIsLoading(true)
      const miguel: CarsResponse = getCarsMock
      const { autos } = miguel
      if (!autos) {
        //  showModal(ErrorService)
        console.log('Se produjo u nerror al cargar los autos')
      }
      setCars(autos)
      setIsLoading(false)
    }),
      []
  
    return (
      <>
        <h1>Titulo del Nav</h1>
        <nav>
          <ul>
            <li>
              {/* <a href="/">Home</a> */}
              <button onClick={() => navigate('/')}>Ir al Home</button>
            </li>
            <li>
              {/* <a href="/about">About</a> */}
              <button onClick={() => navigate('/about')}>Ir a About</button>
            </li>
            <li>
              <button
                onClick={() => {
                  getCars()
                }}
              >
                Cars
              </button>
            </li>
          </ul>
        </nav>
        <div>
        </div>
      </>
    )
  }
  export default Home
  