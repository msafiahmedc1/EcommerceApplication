import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

const ManageProducts = () => {
  const { products } = useOutletContext();
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    const urls = products.map((product) =>
      product.picture instanceof File
        ? URL.createObjectURL(product.picture)
        : null
    );
    setImageURLs(urls);

    return () => {
      urls.forEach((url) => url && URL.revokeObjectURL(url));
    };
  }, [products]);

  return (
    <div className="pt-15 px-4">
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
                {imageURLs[idx] ? (
                  <img
                    src={imageURLs[idx]}
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
