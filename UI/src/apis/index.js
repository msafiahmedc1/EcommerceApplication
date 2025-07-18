import axios from "axios";

const GetProductData = async () => {
  const resProduct = await axios.get(
    "https://api.escuelajs.co/api/v1/products"
  );
  return resProduct.data;
};

const GetCategoryData = async () => {
  const resCategory = await axios.get(
    "https://api.escuelajs.co/api/v1/categories"
  );
  return resCategory.data;
};

export default { GetProductData, GetCategoryData };
