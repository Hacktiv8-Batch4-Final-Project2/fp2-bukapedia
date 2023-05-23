import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const [qty, setQty] = useState(0)
  const [id, setId] = useState(0)
  const navigate = useNavigate()
  const isAdmin = JSON.parse(localStorage.getItem('user'))
  // const products = JSON.parse(localStorage.getItem('products'))
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem('products')))

  const handleChange = (e) => {
    setQty(e.target.value)
  }

  const handleSave = () => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.qty = qty
      }
      return product
    })
    setProducts(newProducts)
    localStorage.setItem('products', JSON.stringify(newProducts))
  }
  
  useEffect(() => {
    if (!isAdmin?.admin) {
      navigate('/')
    }
  }, [isAdmin, navigate])
  return (
    <>
      <table className='hover:border-collapse border border-slate-500'>
        <thead>
          <tr>
            <th colSpan={2} className='border border-slate-600 text-left'>Product</th>
            <th className='border border-slate-600' >Stock</th>
            <th className='border border-slate-600' >Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
              <tr key={product.id}>
                <td className='border border-slate-600' ><img src={product.image} alt={product.title} className='w-20 h-20' /></td>
                <td className='border border-slate-600' >{product.title}</td>
                <td className='border border-slate-600' >
                  <input type='number' className='border border-slate-600' placeholder={product.qty} onChange={(e) => {
                    handleChange(e)
                    setId(product.id)
                  }} />
                </td>
                <td className='border border-slate-600' >
                  <button className='bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={handleSave}>Update</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  )
}

export default Admin