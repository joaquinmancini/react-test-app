import React from 'react'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Cars from '../pages/cars/Cars'
export const basePathName = '/drivemart'

export const routes = {
  home: '/home',
  about: '/about',
  cars: '/cars'
}

export type RoutesType = {
  element: React.ReactElement
  path: string
  key: string
}
const DriveMartRoutes: RoutesType[] = [
  {
    element: <Home />,
    path: routes.home,
    key: routes.home
  },
  {
    element: <About />,
    path: routes.about,
    key: routes.about
  },
  {
    element: <Cars />,
    path: routes.cars,
    key: routes.cars
  }
]

export default DriveMartRoutes
