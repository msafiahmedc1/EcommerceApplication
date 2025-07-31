import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";

const Sidebar = ({ title, items, footerText }) => {
  const [dropDown, setDropDown] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropDown = (label) => {
    setDropDown(!dropDown);
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  console.log("S2", items);

  return (
    <div className="flex">
      <aside className="w-64 min-h-screen bg-[#3e5f52] text-white p-6 shadow-md flex flex-col">
        <div className="text-3xl font-bold mb-12 text-center tracking-wide">
          {title}
        </div>
        <nav className="space-y-3">
          {items.map(
            ({ icon: Icon, iconOpen: IconOpen, label, path, dropdown }) => (
              <div key={label}>
                {dropdown ? (
                  <Menu as="div" className="relative inline-block w-full">
                    <MenuButton
                      onClick={() => handleDropDown(label)}
                      className="flex w-full items-center justify-between px-4 py-3 rounded-lg bg-[#2e4a3e] text-white hover:bg-[#3a5f4c] transition"
                    >
                      <div className="flex items-center gap-4">
                        {/* ✅ Dynamically switch icon */}
                        {openDropdown === label && IconOpen ? (
                          <IconOpen className="w-5 h-5 text-[#c8e3d7]" />
                        ) : (
                          <Icon className="w-5 h-5 text-[#c8e3d7]" />
                        )}

                        <span className="text-sm font-medium">{label}</span>
                      </div>
                    </MenuButton>
                    {openDropdown === label && (
                      <MenuItems className="top-15 z-10 mt-0 ml-2 w-48 origin-top-left rounded-md bg-[#3e5f52] shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="py-1">
                          {dropdown.map(
                            ({ label: subLabel, path: subPath }) => (
                              <MenuItem key={subLabel}>
                                {({ active }) => (
                                  <Link
                                    to={subPath}
                                    className={`block px-4 py-2 text-sm ${
                                      active
                                        ? "bg-gray-100 text-white"
                                        : "text-white"
                                    }`}
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    {subLabel}
                                  </Link>
                                )}
                              </MenuItem>
                            )
                          )}
                        </div>
                      </MenuItems>
                    )}
                  </Menu>
                ) : (
                  <Link
                    to={path}
                    className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-[#2e4a3e] transition-all duration-200 cursor-pointer group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-[#c8e3d7] group-hover:text-white" />
                    <span className="text-sm font-medium group-hover:text-white">
                      {label}
                    </span>
                  </Link>
                )}
              </div>
            )
          )}
        </nav>
        {footerText && (
          <div className="mt-auto pt-10 text-center text-xs text-[#c8e3d7] border-t border-[#4d6b60]">
            {footerText}
          </div>
        )}
      </aside>
    </div>
  );
};

export default Sidebar;
