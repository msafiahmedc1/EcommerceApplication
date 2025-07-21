"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faChevronDown,
  faFilter,
  faMinus,
  faPlus,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Link } from "react-router-dom";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L" },
      { value: "6l", label: "6L" },
      { value: "12l", label: "12L" },
      { value: "18l", label: "18L" },
      { value: "20l", label: "20L" },
      { value: "40l", label: "40L" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HomeLayout = ({ categories, products }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/25" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="ml-auto w-full max-w-xs bg-white p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="h-5 w-5 text-gray-500"
                />
              </button>
            </div>
            <form>
              <ul className="mb-4 text-sm font-medium text-gray-900">
                {categories.map((cat) => (
                  <li key={cat.name} className="mb-2">
                    <a href={cat.href}>{cat.name}</a>
                  </li>
                ))}
              </ul>
              {filters.map((section) => (
                <Disclosure key={section.id} as="div" className="mb-4">
                  <DisclosureButton className="flex justify-between w-full text-left">
                    <span className="font-medium">{section.name}</span>
                    <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-1">
                    {section.options.map((opt) => (
                      <div key={opt.value} className="flex items-center">
                        <input
                          id={opt.value}
                          name={section.id}
                          type="checkbox"
                          className="mr-2"
                        />
                        <label htmlFor={opt.value}>{opt.label}</label>
                      </div>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>
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
                  {sortOptions.map((option) => (
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
            <form className="hidden lg:block">
              <ul className="mb-6 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                {categories?.slice(0, 3).map((item, index) => (
                  <li key={index} className="mb-2">
                    <a>{item.name}</a>
                  </li>
                ))}
              </ul>
              {filters.map((section) => (
                <Disclosure key={section.id} as="div" className="mb-4">
                  <DisclosureButton className="flex justify-between w-full text-left">
                    <span className="font-medium">{section.name}</span>
                    <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-1">
                    {section.options.map((opt) => (
                      <div key={opt.value} className="flex items-center">
                        <input
                          id={`desk-${opt.value}`}
                          name={section.id}
                          type="checkbox"
                          className="mr-2"
                        />
                        <label htmlFor={`desk-${opt.value}`}>{opt.label}</label>
                      </div>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.slice(0, 10).map((item) => (
                  <div key={item.id} className="border p-4 rounded-lg shadow">
                    <Link to={`/product/${item.id}`}>
                      <div className="h-40 bg-gray-100 mb-2 flex items-center justify-center overflow-hidden">
                        <img
                          src={item.images?.[0]}
                          alt={item.title}
                          className="h-full object-contain"
                        />
                      </div>
                    </Link>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      {item.description?.slice(0, 60)}...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
