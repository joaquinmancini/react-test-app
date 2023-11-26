import './Home.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCarsMock } from '../../Services/Mock/CarsMock.ts'
import {
  Auto,
  CarsResponse,
  useGetAutosService
} from '../../services/service.ts'
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
      <div className='main-container'>
        <h1 className='main-container'> Bienvenidos a DriveMart!!!</h1>
      </div>
    </>
  )
}
export default Home
