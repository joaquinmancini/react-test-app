import axios from 'axios'
// import { getCarsMock } from './Mock/CarsMock'
import { useCallback } from 'react'
import { getCarsMock } from '../Services/Mock/CarsMock'
const baseURL = 'http://localhost:8000/api/v1'

export interface Auto {
  id: number
  marca: string
  modelo: string
  año: number
  patente: string
  imagen: string
}

export interface CarsResponse {
  autos: Auto[]
}

// INTERFAZ DE METODOS
export interface AutosServiceReturn {
  getAutos: () => Promise<CarsResponse> // Este es el getter de la Promesa de tipo CarsResponse
  getAutosServ: () => Promise<CarsResponse>
  getUser: (userId: string) => Promise<any>
  getUseQuery: () => Promise<any>
}

export const useGetAutosService = (): AutosServiceReturn => {
  // : Promise<Auto[]> Con la forma de async Await fetch
  //MOCK
  const getAutos = useCallback(async () => {
    return await Promise.resolve(getCarsMock)
  }, [])

  //Llamada a la api
  const getAutosServ = useCallback(async () => {
    let cars: CarsResponse
    try {
      const response = await fetch(baseURL + '/cars')
      cars = await response.json()
      console.log(cars)
    } catch {
      throw new Error('error get autosService')
    }
    return cars
  }, [])

  // : Promise<Auto[]> Con la forma de Promesas
  const getUser = async (userID: string) => {
    await axios
      .get(baseURL + userID)
      .then((response) => {
        // manejar respuesta exitosa
        console.log(response.data)
        return response.data.email
      })
      .catch((error) => {
        // manejar error
        console.log(error)
        console.log('Error en la peticion')
      })
      .finally(() => {
        console.log('Peticion ejecutada')
      })
  }

  const getUseQuery = async () => {
    const response = await fetch('/api/data')
    if (response.status !== 200) {
      return new Error('Failed to fetch data')
    }
    return response.json()
  }

  return {
    getUser,
    getAutosServ,
    getAutos,
    getUseQuery
  }
}
