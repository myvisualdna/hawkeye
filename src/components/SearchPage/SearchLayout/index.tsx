import React from 'react';
import ComboSearchPage from '../SearchComponents/comboboxSearchPage';
import BedsListbox from '../SearchComponents/bedsListbox';
import PriceListbox from '../SearchComponents/priceListbox';
import MenuDropdown from '../SearchComponents/menuDropdown';
import PropertyTypeListbox from '../SearchComponents/propertyTypeListbox';
import SaleTypeListbox from 'src/components/SearchPage/SearchComponents/saleTypeListbox'
import SearchBody from '../SearchBody';

type Props = {};

const SearchLayout = (props: Props) => {
  return (
    <div>
      <header className="sticky top-0 bg-white shadow-sm z-40">
        <div className="p-4 mx-auto max-w-screen-2xl sticky top-0">
          <div className="flex items-center justify-between space-x-4 lg:space-x-10">
            <div className="flex lg:w-0 lg:flex-1 gap-2">
              {/* <span className="w-20 h-10 bg-gray-200 rounded-lg"></span> */}
              <ComboSearchPage />
              <SaleTypeListbox />
              <BedsListbox />
              <PropertyTypeListbox />
              <PriceListbox />
              <button className='secondary-button'>Search</button>
            </div>

            {/* <nav className="hidden text-sm font-medium space-x-8 md:flex">
              <a className="text-gray-500" href="">
                About
              </a>
              <a className="text-gray-500" href="">
                Blog
              </a>
              <a className="text-gray-500" href="">
                Projects
              </a>
              <a className="text-gray-500" href="">
                Contact
              </a>

            </nav> */}

            {/* <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
              <a
                className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
                href=""
              >
                Log in
              </a>

              <a
                className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
                href=""
              >
                Sign up
              </a>
            </div> */}

            <div className="lg:hidden">
              <button
                className="p-2 text-gray-600 bg-gray-100 rounded-lg"
                type="button"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div>
        <SearchBody />

      </div>
    </div>
  );
};

export default SearchLayout;
