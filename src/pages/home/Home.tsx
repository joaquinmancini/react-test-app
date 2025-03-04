import { useEffect, useState } from 'react'
import { CarsResponse, useGetAutosService } from '../../Services/service'
import './Home.css'
const Home: React.FC = () => {
  const [cars, setCars] = useState<CarsResponse>()
  const [isLoading, setIsLoading] = useState(false)

  // const [user, setUser] = useState(Promise<Auto[]>);
  // const navigate = useNavigate()
  // const carsitos = getAutos()
  const { getAutos, getAutosServ } = useGetAutosService()

  const getAutosFn = async () => {
    const cars = await getAutos()
    console.log(cars)
    return cars
  }

  useEffect(() => {
    if (cars) {
      console.log('Trayendo autos del servicio!')
    }
  }, [cars])

  useEffect(() => {
    const llamado = async () => {
      setIsLoading(true)
      const miguel: Promise<CarsResponse> = getAutosServ()
      const autos = await miguel
      if (!autos) {
        //  showModal(ErrorService)
        console.log('Se produjo un error al cargar los autos')
      }
      setCars(autos)
      setIsLoading(false)
    }
    llamado()
  }, [getAutos])

  return (
    <>
      <div className='main-container'>
        <h1 className='main-container'> Bienvenidos a DriveMart!!!</h1>
      </div>
    </>
  )
}
export default Home
