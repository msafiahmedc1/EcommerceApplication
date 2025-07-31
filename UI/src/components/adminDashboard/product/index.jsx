import { Link, useOutletContext } from "react-router-dom";

const ManageProducts = () => {
  const { products } = useOutletContext();

  return (
    <div className="pt-15 px-4">
      <Link to="/admin/addproduct">
        <button className="bg-[#3e5f52] text-white px-4 py-2 rounded-lg mb-4">
          Add Product
        </button>
      </Link>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Sale Price</th>
            <th className="border px-4 py-2">Purchase Price</th>
            <th className="border px-4 py-2">Picture</th>
            <th className="border px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.salePrice}</td>
              <td className="border px-4 py-2">{product.purchasePrice}</td>
              <td className="border px-4 py-2">
                {product.picture ? (
                  <img
                    src={URL.createObjectURL(product.picture)}
                    alt="product"
                    className="h-12 object-contain"
                  />
                ) : (
                  "N/A"
                )}
              </td>
              <td className="border px-4 py-2">{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
