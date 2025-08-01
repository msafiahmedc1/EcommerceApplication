import { useForm } from "react-hook-form";
import { useNavigate, Link, useOutletContext } from "react-router-dom";

const AddProduct = () => {
  const { setProducts } = useOutletContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setProducts((prev) => [...prev, data]);
    reset();
    navigate("/admin/index");
  };

  return (
    <div className="pt-5">
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Create</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            {...register("salePrice", { required: "Sale price is required" })}
            type="number"
            placeholder="Sale Price"
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.salePrice && (
            <p className="text-red-500">{errors.salePrice.message}</p>
          )}

          <input
            {...register("purchasePrice", {
              required: "Purchase price is required",
            })}
            type="number"
            placeholder="Purchase Price"
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.purchasePrice && (
            <p className="text-red-500">{errors.purchasePrice.message}</p>
          )}

          <input
            {...register("picture", { required: "Product image is required" })}
            type="file"
            className="w-full border rounded-md py-2 px-4 bg-gray-50"
          />
          {errors.picture && (
            <p className="text-red-500">{errors.picture.message}</p>
          )}

          <textarea
            {...register("description")}
            placeholder="Description"
            className="w-full px-4 py-2 border rounded-md"
            rows={4}
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
