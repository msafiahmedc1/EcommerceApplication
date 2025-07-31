import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faFilter,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import MobileViewFilter from "./mobileViewFilter";
import { SORTOPTIONS } from "./constants";
import Sidebar from "./sidebar";
import Body from "./body";
import HeroSection from "../heroSection";
import API from "../../apis";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await API.GetCategoryData();
      setCategories(data);
    };

    const fetchProduct = async () => {
      const data = await API.GetProductData();
      setProducts(data);
    };

    fetchCategory();
    fetchProduct();
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <HeroSection title="Home" />
      <div className="bg-white">
        <MobileViewFilter
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
          categories={categories}
        />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ml-1 w-4 text-gray-400"
                    />
                  </MenuButton>
                </div>
                <MenuItems className="absolute right-0 mt-2 w-40 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {SORTOPTIONS.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
              <button className="ml-4 text-gray-400 hover:text-gray-500">
                <FontAwesomeIcon icon={faTableCellsLarge} className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="ml-4 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <FontAwesomeIcon icon={faFilter} className="w-5 h-5" />
              </button>
            </div>
          </div>
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              <Sidebar categories={categories} />
              <div className="lg:col-span-3">
                <Body products={products} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
