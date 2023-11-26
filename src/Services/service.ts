import axios from 'axios'
// import { getCarsMock } from './Mock/CarsMock'
import { useCallback } from 'react'
import { getCarsMock } from '../Services/Mock/CarsMock'
const baseURL = 'https://jsonplaceholder.typicode.com/users/.'

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
  getUser: (userId: string) => Promise<any>
  getCualquierCosa: () => Promise<any>
}

export const useGetAutosService = (): AutosServiceReturn => {
  // : Promise<Auto[]> Con la forma de async Await fetch
  const getAutos = useCallback(async () => {
    return await Promise.resolve(getCarsMock)
  }, [])

  // : Promise<Auto[]> Con la forma de Promesas
  const getUser = async (userID: string) => {
    await axios
      .get(baseURL + userID)
      .then(response => {
        // manejar respuesta exitosa
        console.log(response.data)
        return response.data.email
      })
      .catch(error => {
        // manejar error
        console.log(error)
        console.log('Error en la peticion')
      })
      .finally(() => {
        console.log('Peticion ejecutada')
      })
  }

  const getCualquierCosa = async () => {
    return await new Promise(() =>
      console.log('Nueva Promesa de cualquier tipo')
    )
  }

  return {
    getUser,
    getAutos,
    getCualquierCosa
  }
}
