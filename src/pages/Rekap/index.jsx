import useRekap from './Rekap.hook'
import RekapTable from '../../components/organisms/RekapTable'

const Rekap = () => {
  useRekap()

  return (
    <RekapTable />
  )
}

export default Rekap