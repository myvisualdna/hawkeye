import React, { FC, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Table } from 'src/components/SearchPage/SearchBody/PropertyList/Table';
import { properties } from './properties';
import Image from 'next/image';
import SaleTypeListbox from '../SearchComponents/saleTypeListbox';
import BedsListbox from '../SearchComponents/bedsListbox';
import PropertyTypeListbox from '../SearchComponents/propertyTypeListbox';
import PriceListbox from '../SearchComponents/priceListbox';
import SortingSelector from '../SearchComponents/sortingSelector';
import ComboSearch from 'src/components/Homepage/SearchModule/comboSearch';
import ComboSearchPage from '../SearchComponents/comboboxSearchPage';

const columns = [
  { accessor: 'id', label: 'ID' },
  // { accessor: 'propertyType', label: 'PropType' },
  // { accessor: 'date', label: 'date' },
  // { accessor: 'start_date', label: 'Start Date' },
];

export interface SectionGridHasMapProps {}

const SectionGridHasMap: FC<SectionGridHasMapProps> = () => {
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  const [showFullMapFixed, setShowFullMapFixed] = useState(false);

  return (
    <div>
      {/* <SortingTab /> */}
      <div className="grid grid-cols-5 gap-4 p-4">
        <div className="col-span-5 lg:col-span-3">
          <div>
            <div className="mb-6 hidden lg:flex space-x-4 sticky top-0 z-40">
              <ComboSearchPage />
              <SaleTypeListbox />
              <BedsListbox />
              <PropertyTypeListbox />
              <PriceListbox />
            </div>
            <div>
              <h1 className="font-display font-black lg:text-2xl mb-4 text-xl">
                Properties for sale in San Francisco, CA
              </h1>
              <div className="my-4 flex items-center space-x-4 sticky top-0 z-40">
                <h3 className="font-display font-regular text-sm text-gray-500">
                  1,663 Homes
                </h3>
                <div className="flex items-center ml-8">
                  <h3 className="font-display font-regular text-base text-gray-800 mr-4">
                    Sort by
                  </h3>{' '}
                  <SortingSelector />
                </div>
              </div>
            </div>
          </div>
          <div className="z-0">
            <Table rows={properties} columns={columns} />
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-2 rounded-lg bg-gradient-to-r from-rose-100 to-teal-100"></div>
      </div>
    </div>
  );
};

export default SectionGridHasMap;
