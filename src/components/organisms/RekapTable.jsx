import React from 'react'

const RekapTable = () => {
    const data = JSON.parse(localStorage.getItem('rekapPenjualan')) ? JSON.parse(localStorage.getItem('rekapPenjualan')) : [];
    
  return (
    <div className='flex justify-center'>
        <table className='hover:table-fixed border-collapse border border-slate-500 mt-4 mb-4'>
            <thead className='bg-black text-white'>
                <tr>
                    <td className='border border-slate-600'>Product</td>
                    <td className='border border-slate-600'>Harga</td>
                    <td className='border border-slate-600'>Terjual</td>
                    <td className='border border-slate-600'>Pendapatan</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item) => (
                        <tr key={item.id}>
                            <td className='border border-slate-600'>{item.title}</td>
                            <td className='border border-slate-600'>{item.price}</td>
                            <td className='border border-slate-600'>{item.quantity}</td>
                            <td className='border border-slate-600'>{item.price * item.quantity}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td colSpan={3} className='border border-slate-600'></td>
                    <td className='border border-slate-600 text-center'>{
                        data.reduce((acc, item) => {
                            return acc + (item.price * item.quantity)
                        }
                        , 0)
                    }</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default RekapTable