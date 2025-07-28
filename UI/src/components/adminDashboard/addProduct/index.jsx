const AddProduct = () => {
  return (
    <div className="pt-5">
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Create</h2>
        <form className="space-y-6" encType="multipart/form-data">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sale Price
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Purchase Price
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Picture
            </label>
            <input
              type="file"
              className="w-full border rounded-md py-2 px-4 bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              rows={4}
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[#3e5f52] text-white px-6 py-2 rounded-lg hover:bg-[#2e4a3e] transition"
            >
              Create
            </button>
            <a
              href="#"
              className="text-[#3e5f52] hover:underline flex items-center"
            >
              Back to List
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
