import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ title, items, footerText }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropDown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div className="flex">
      <aside className="w-64 min-h-screen bg-[#3e5f52] text-white p-6 shadow-md flex flex-col">
        <div className="text-3xl font-bold mb-12 text-center tracking-wide">
          {title}
        </div>
        <nav className="space-y-3">
          {items.map(
            ({ icon: Icon, iconOpen: IconOpen, label, path, dropdown }) => (
              <div key={label} className="relative">
                {dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropDown(label)}
                      className="flex w-full items-center justify-between px-4 py-3 rounded-lg bg-[#3e5f52] text-white hover:bg-[#2e4a3e] transition"
                    >
                      <div className="flex items-center gap-4">
                        {openDropdown === label && IconOpen ? (
                          <IconOpen className="w-5 h-5 text-[#c8e3d7]" />
                        ) : (
                          <Icon className="w-5 h-5 text-[#c8e3d7]" />
                        )}
                        <span className="text-sm font-medium">{label}</span>
                      </div>
                    </button>
                    {openDropdown === label && (
                      <div className="left-4 mt-2 w-52 rounded-md bg-[#3e5f52] shadow-lg z-10">
                        {dropdown.map(({ label: subLabel, path: subPath }) => (
                          <Link
                            key={subLabel}
                            to={subPath}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 text-sm text-white hover:bg-[#2e4a3e]"
                          >
                            {subLabel}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
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
