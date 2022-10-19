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
        <div className="hidden lg:flex p-4 mx-auto max-w-screen-2xl sticky top-0">
          <div className="hidden lg:flex items-center justify-between space-x-4 lg:space-x-10">
            <div className="flex lg:w-0 lg:flex-1 gap-2 ">
              <ComboSearchPage />
              <SaleTypeListbox />
              <BedsListbox />
              <PropertyTypeListbox />
              <PriceListbox />
              <button className='secondary-button'>Search</button>
            </div>

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
