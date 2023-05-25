import useRekap from './Rekap.hooks'
import RekapTable from '../../components/organisms/RekapTable'

const Rekap = () => {
  useRekap()
  
  return (
    <RekapTable />
  )
}

export default Rekap