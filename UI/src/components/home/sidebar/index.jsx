import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FILTERS from "./constants";

const Sidebar = ({ categories }) => {
  return (
    <div>
      <form className="hidden lg:block">
        <ul className="mb-6 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
          {categories?.slice(0, 3).map((item, index) => (
            <li key={index} className="mb-2">
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
        {FILTERS.map((section) => (
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
    </div>
  );
};

export default Sidebar;
