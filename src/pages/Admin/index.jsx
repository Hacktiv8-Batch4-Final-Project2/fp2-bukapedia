import useAdmin from "./Admin.hooks"

const Admin = () => {
  const { products, handleChange, handleSave, setId } = useAdmin()

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