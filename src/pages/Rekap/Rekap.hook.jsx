import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useRekap = () => {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.login)
  
    useEffect(() => {
      if(user?.admin === false) {
        navigate('/')
      }
    }, [])
}

export default useRekap