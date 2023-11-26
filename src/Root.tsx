import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DriveMartRoutes from './Routes/DriveMartRoutes'

type RoutesType = {
  element: any
  path: string
  key: string
}

const Root: React.FC = () => {
  return (
    <Routes>
      {DriveMartRoutes.map((item: RoutesType) => (
        <Route key={item.key} path={item.path} element={item.element} />
      ))}
    </Routes>
  )
}

export default Root
