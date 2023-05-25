import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import RekapTable from '../../components/organisms/RekapTable'

const Rekap = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.login)

  useEffect(() => {
    if(user?.admin === false) {
      navigate('/')
    }
  }, [])

  return (
    <RekapTable />
  )
}

export default Rekap