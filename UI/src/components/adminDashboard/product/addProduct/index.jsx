import { useState } from "react";
import { useNavigate, Link, useOutletContext } from "react-router-dom";

const AddProduct = () => {
  const { setProducts } = useOutletContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    salePrice: "",
    purchasePrice: "",
    picture: null,
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prev) => [...prev, formData]);
    navigate("/admin/index");
  };

  return (
    <div className="pt-5">
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Create</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            name="salePrice"
            type="number"
            placeholder="Sale Price"
            className="w-full px-4 py-2 border rounded-md"
            onChange={(e) =>
              setFormData({ ...formData, salePrice: e.target.value })
            }
          />
          <input
            name="purchasePrice"
            type="number"
            placeholder="Purchase Price"
            className="w-full px-4 py-2 border rounded-md"
            onChange={(e) =>
              setFormData({ ...formData, purchasePrice: e.target.value })
            }
          />
          <input
            name="picture"
            type="file"
            className="w-full border rounded-md py-2 px-4 bg-gray-50"
            onChange={(e) =>
              setFormData({ ...formData, picture: e.target.files[0] })
            }
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full px-4 py-2 border rounded-md"
            rows={4}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[#3e5f52] text-white px-6 py-2 rounded-lg hover:bg-[#2e4a3e] transition"
            >
              Create
            </button>
            <Link to="/admin/index" className="text-[#3e5f52] hover:underline">
              Back to List
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
