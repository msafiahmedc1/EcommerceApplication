import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import FILTERS from "./constants";

const MobileViewFilter = ({
  mobileFiltersOpen,
  setMobileFiltersOpen,
  categories,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default MobileViewFilter;
