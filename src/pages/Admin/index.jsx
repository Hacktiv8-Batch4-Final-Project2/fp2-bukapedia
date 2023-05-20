import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate = useNavigate()
    const isAdmin = JSON.parse(localStorage.getItem('user')).admin
    console.log(isAdmin);
    
    useEffect(() => {
        if (isAdmin === false) {
            navigate('/')
        }
    }, [isAdmin, navigate])
  return (
    <div>

      
    </div>
  )
}

export default Admin