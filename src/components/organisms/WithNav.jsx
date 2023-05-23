import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const WithNav = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Sidebar />
        <Footer />
    </>
  )
}

export default WithNav