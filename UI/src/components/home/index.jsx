import { useEffect, useState } from "react";
import API from "../../apis";
import HomeLayout from "../../layout/homeLayout";
import HeroSection from "../heroSection";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await API.GetCategoryData();
      console.log("Fetched Categories:", data);
      setCategories(data);
    };

    const fetchProduct = async () => {
      const data = await API.GetProductData();
      console.log("Fetched Product:", data);
      setProducts(data);
    };

    fetchCategory();
    fetchProduct();
  }, []);

  return (
    <div>
      <HeroSection title="Home" />
      <HomeLayout categories={categories} products={products} />
    </div>
  );
};

export default Home;
