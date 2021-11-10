import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Layout
