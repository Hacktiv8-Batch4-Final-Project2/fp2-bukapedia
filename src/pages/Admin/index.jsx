
import useAdmin from "./Admin.hooks"

const Admin = () => {
  const { products, handleChange, handleSave, setId } = useAdmin()

  return (
    <>
      <div className="p-5">
        <div className="overflow-auto">
        <table className=" w-full">
          <thead className="bg-gray-100 border-b-2 border-gray-200 ">
            <tr className="bg-white  ">
              <th
                className="p-3 text-xl font-semibold tracking-wide text-center whitespace-nowrap"
                colSpan={2}
                >
                Product
              </th>
              <th className="p-3 text-xl font-semibold tracking-wide text-left whitespace-nowrap">
                Stock
              </th>
              <th className="p-3 text-xl font-semibold tracking-wide text-left whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((product) => (
              <tr className="" key={product.id}>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-[80px] max-w-[80px] mt-4"
                    />
                </td>
                <td className="p-3 text-sm text-gray-700 font-bold hover:underline whitespace-nowrap cursor-pointer">
                  {product.title}
                </td>
                <td className="w-20 p-3 text-lg text-black whitespace-nowrap ">
                  <input
                    type="number"
                    className=""
                    placeholder={product.qty}
                    onChange={(e) => {
                      handleChange(e);
                      setId(product.id);
                    }}
                    />
                </td>
                <td className="w-20 p-3 text-sm whitespace-nowrap">
                  <button
                    className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSave}
                    >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
      </div>
    </>
  );
};

export default Admin;
